import express from "express";
import apiRoutes from "../api/routes/index";

export default {
  app: express(),
  PORT: process.env.NODE_ENV === "prod" ? 5000 : 5000,
  setup() {
    this.middleware();
    this.routes();
  },
  middleware() {
    this.app.use("/", express.json());
  },
  routes() {
    this.app.use("/api", apiRoutes);
  },
  async start() {
    this.app.listen(this.PORT, () =>
      console.log(`Server running on ${this.PORT}...`)
    );

    this.setup();
  }
};
