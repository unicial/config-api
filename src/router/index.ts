import express from "express";
import explorerRouter from "./explorer";
import featureFlagExplorerRouter from "./feature_flag";
var app: express.Application = express();

app.use("/explorer.json", explorerRouter);

app.use("/feature-flag/explorer.json", featureFlagExplorerRouter);

export default app;
