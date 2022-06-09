import indexRouter from "@router/index";
import errorHandler from "@middleware/errorHandler";
import express from "express";
import cors from "cors";

const createServer = (): express.Application => {
  const app = express();

  const corsConfig = {
    credentials: true,
    origin: [
      "http://localhost:3000",
      "http://localhost",
      "http://127.0.0.1:3000",
      "https://play.unicial.org",
    ],
  };

  app.use(express.urlencoded({ extended: true }));
  app.use(cors(corsConfig));
  app.use(express.json());

  app.disable("x-powered-by");

  app.get("/health", (_req, res) => {
    res.send("UP");
  });

  app.use("/", indexRouter);

  app.use(errorHandler);

  return app;
};

export { createServer };
