import { Router, type IRouter } from "express";
import healthRouter from "./health";
import elytraRouter from "./elytra";

const router: IRouter = Router();

router.use(healthRouter);
router.use(elytraRouter);

export default router;
