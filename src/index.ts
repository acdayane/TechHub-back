import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import coursesRouter from "./routers/coursesRouters";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//app.use(coursesRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Serving running on port ${port}`));
