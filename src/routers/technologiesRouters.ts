import { Router } from "express";
import { getTechnologyById } from "../controllers/technologiesControllers";

const technologiesRouter = Router();

technologiesRouter
    .get("/technologies/:technologyId", getTechnologyById);

export default technologiesRouter;