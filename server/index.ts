require("dotenv").config();
import next from "next";
import http from "http";
import { Request, Response } from "express";
import mongoose from "mongoose";

import server from "./server";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, dir: "client" });
const handle = app.getRequestHandler();

mongoose.connect(process.env.MONGO_URI as string, (err) => {
  if (err) {
    console.log(
      "Unable to connect to MongoDB Server. Please check DB Server status."
    );
    console.error(err);
    process.exit(1);
  }
  console.log("Successfully connected to MongoDB server");
  app.prepare().then(() => {
    server.all("*", (req: Request, res: Response) => {
      return handle(req, res);
    });

    http.createServer(server).listen(3000);
  });
});
