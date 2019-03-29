import dotenv from "dotenv";
import express from "express";
import { graphql, GraphQLError } from "graphql";
import { GraphQLServer } from "graphql-yoga";
import * as jwt from "jsonwebtoken";
import { prisma } from "./database/generated/prisma-client";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";
import routes from "./services";
import { schema } from "./services/graphql";
import { applyMiddleware, applyRoutes } from "./utils";

dotenv.config();

process.on("uncaughtException", (e) => {
  console.log(e);
  process.exit(1);
});

process.on("unhandledRejection", (e) => {
  console.log(e);
  process.exit(1);
});

const router = express();
const { PORT = 3000 } = process.env;

const links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL"
  }
];
// 1
const idCount = links.length;
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: (root: any, args: any, context: { prisma: { links: () => void; }; }, info: any) => {
      return context.prisma.links();
    }
  },
  Mutation: {
    post: (root: any, args: {
      url: any,
      description: any
    }, context: { prisma: { createLink: (arg0: { url: any, description: any }) => void; }; }) => {
      return context.prisma.createLink({
        url: args.url,
        description: args.description
      });
    }
  }
};
const autheticate = async (resolve: any, root: any, args: any, context: any, info: any) => {
  let token;
  try {
    token = jwt.verify(context.request.get("Authorization"), "secret");
  } catch (e) {
    return new GraphQLError("Not authorised");
  }
  const result = await resolve(root, args, context, info);
  return result;
};

// graphql setup
const options = {
  port: PORT,
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground",
  // applyMiddleware: [middleware, routes , errorHandlers]
};

const server = new GraphQLServer({
  schema,
  context: { prisma }
  // context: (req: any) => ({ ...req }),
  // middlewares: [autheticate]
});

server.start(options, () => {
  console.log(`  🚀 Server is running http://localhost:${PORT}.  `);
});

applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

server.express.use("/", router);
