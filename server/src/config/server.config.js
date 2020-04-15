import express from "express";
import cors from "cors";
import path from "path";
import apiRoutes from "../api/routes/index";
import passport from "passport";
import session from "express-session";

export default {
  app: express(),
  PORT: process.env.NODE_ENV === "prod" ? 3000 : 5000,
  setup() {
    this.app.use(cors());
    this.middleware();
    this.routes();
    if (process.env.NODE_ENV === "prod") {
      this.serve();
    }
  },
  middleware() {
    this.app.use("/", express.json());
    passport.serializeUser(function (user, done) {
      done(null, user);
    });
    passport.deserializeUser(function (obj, done) {
      done(null, obj);
    });

    this.app.use(
      session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
      })
    );
    this.app.use(passport.initialize());
    this.app.use(passport.session());
  },
  routes() {
    this.app.use("/api", apiRoutes);
  },
  serve() {
    this.app.use(express.static(path.join("./client/build")));
    this.app.get("*", (_, res) => {
      res.sendFile(path.join(__dirname, "../../client/build/index.html"));
    });
  },
  async start() {
    this.app.listen(this.PORT, () =>
      console.log(`Server running on ${this.PORT}...`)
    );

    this.setup();
  },
};
