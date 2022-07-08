import express, { Request, Response } from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoDBStore from "connect-mongodb-session";

const store = new (MongoDBStore(session))({
  uri: process.env.MONGO_URI as string,
  collection: "sessions",
});

// Middlewares
import { errorHandler } from "./middlewares/error-middleware";

const server = express();
const dev = process.env.NODE_ENV !== "production";
const test = process.env.NODE_ENV === "test";

const canSkipRoute = (req: Request, res: Response) => {
  return !req.url.startsWith("/api");
};
if (process.env.NODE_ENV === "production") {
  server.disable("etag");
}

if (dev) {
  server.use(
    morgan("dev", {
      skip: canSkipRoute,
    })
  );
}
// Middlewares
server.use(express.json({ limit: "50mb" }));
server.use(express.urlencoded({ limit: "50mb", extended: !1 }));
server.use(cookieParser());
server.use(
  session({
    secret: "express-session-secret-key",
    resave: !0,
    saveUninitialized: !0,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 Week
    },
    store,
  })
);

// Error handler
server.use(errorHandler);

export default server;
