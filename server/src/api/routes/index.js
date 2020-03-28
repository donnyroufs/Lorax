import { Router } from "express";
import userRoutes from "./User.routes";

const router = Router();

router.use("/user", userRoutes);

export default router;
