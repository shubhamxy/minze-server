import CONFIG from "./config"; /* Should be at top */
import routes from "./services";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";
import { logger, applyMiddleware, applyRoutes } from "./utils";
import { GraphQLServer } from "graphql-yoga";
import { Prisma } from "./generated/prisma-client";
import { resolvers } from "./resolvers";

process.on("uncaughtException", e => {
  console.log(e);
  process.exit(1);
});

process.on("unhandledRejection", e => {
  console.log(e);
  process.exit(1);
});

const db = new Prisma({
  endpoint: CONFIG.ENV_VARS.PRISMA_ENDPOINT,
  secret: CONFIG.ENV_VARS.PRISMA_SECRET,
  debug: CONFIG.DEBUG
});

export const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: resolvers as any,
  context: req => ({ ...req, db })
});

// graphql setup
export const options = {
  port: CONFIG.ENV_VARS.PORT || 3000,
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground",
  debug: CONFIG.DEBUG
};

applyMiddleware(middleware, server.express);
applyRoutes(routes, server.express);

export const httpPromise = server.start(options, () => {
  logger.info(`🚀  Server is running on PORT:${CONFIG.ENV_VARS.PORT}`);
});

applyMiddleware(errorHandlers, server.express);
export default server;
