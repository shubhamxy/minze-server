import dotenv from "dotenv";
import express from "express";
import { GraphQLServer } from "graphql-yoga";
import { prisma } from "./database/generated/prisma-client";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";
import routes from "./services";
import { schema } from "./services/graphql";
import { applyMiddleware, applyRoutes } from "./utils";

dotenv.config();
const { PORT = 3000 } = process.env;

process.on("uncaughtException", (e) => {
  console.log(e);
  process.exit(1);
});

process.on("unhandledRejection", (e) => {
  console.log(e);
  process.exit(1);
});

const router = express();

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
