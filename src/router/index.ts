import express from "express";
import explorerRouter from "./explorer";

var app: express.Application = express();
app.use("/explorer.json", explorerRouter);

export default app;
