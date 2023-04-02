import { Router } from "express";
import { getTechnologyById, getTechnologies } from "../controllers/technologiesControllers";

const technologiesRouter = Router();

technologiesRouter
    .get("/technologies/", getTechnologies)
    .get("/technologies/:technologyId", getTechnologyById);

export default technologiesRouter;