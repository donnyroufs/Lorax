import express from "express";

export default {
  app: express(),
  PORT: process.env.NODE_ENV === "prod" ? 5000 : 5000,
  setup() {
    this.app.use("/", express.json());
  },
  async start() {
    this.app.listen(this.PORT, () =>
      console.log(`Server running on ${this.PORT}...`)
    );

    this.setup();
  }
};
