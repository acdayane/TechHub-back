import { Response } from "express";
import coursesServices from "../services/coursesServices";

export async function getCourses(res: Response) {
    try {
        const courses = await coursesServices.listCourses;
        return courses;
    } catch(err) {
        console.log(err)
        return res.sendStatus(404)
    }
}
