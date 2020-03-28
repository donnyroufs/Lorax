import { Router } from "express";
import userRoutes from "./User.routes";
import guildRoutes from "./Guild.routes";
import questionRoutes from "./Question.routes";
import answerRoutes from "./Answer.routes";

const router = Router();

router.use("/user", userRoutes);
router.use("/guild", guildRoutes);
router.use("/question", questionRoutes);
router.use("/answer", answerRoutes);

export default router;
