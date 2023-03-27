import { Router } from "express";
import { getSchools, getSchoolById } from "../controllers/schoolsControllers";

const schoolsRouter = Router();

schoolsRouter
    .get("/schools", getSchools)
    .get("/schools/:schoolId", getSchoolById)

export default schoolsRouter;