import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import coursesRouter from "./routers/coursesRouters";
import schoolsRouter from "./routers/schoolsRouters";
import technologiesRouter from "./routers/technologiesRouters";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(coursesRouter)
app.use(schoolsRouter)
app.use(technologiesRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Serving running on port ${port}`));
