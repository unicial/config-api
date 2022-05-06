import * as moduleAlias from "module-alias";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const sourcePath = "src";
moduleAlias.addAliases({
  "@server": sourcePath,
  "@config": `${sourcePath}/config`,
  "@router": `${sourcePath}/router`,
  "@controller": `${sourcePath}/controller`,
  "@middleware": `${sourcePath}/middleware`,
});

import { createServer } from "@config/express";
import { AddressInfo } from "net";
import http from "http";

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || "5000";

const startServer = async () => {
  console.log(path.resolve(__dirname, "../.env"));
  const app = await createServer();

  const server = http.createServer(app).listen({ host, port }, () => {
    const addressInfo = server.address() as AddressInfo;
    console.log(
      `Server ready at http://${addressInfo.address}:${addressInfo.port}`
    );
  });

  const signalTraps: NodeJS.Signals[] = ["SIGTERM", "SIGINT", "SIGUSR2"];
  signalTraps.forEach((type) => {
    process.once(type, async () => {
      console.log(`process.once ${type}`);

      server.close(() => {
        console.log("HTTP server closed");
      });
    });
  });
};

startServer();
