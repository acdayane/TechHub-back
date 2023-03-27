import { Request, Response } from "express";
import coursesServices from "../services/coursesServices";
import httpStatus from "http-status";

export async function getCourses(req: Request, res: Response) {
    try {
        const courses = await coursesServices.listCourses();      
        return res.status(200).send(courses);
    } catch(err) {
        console.log(err)
        return res.sendStatus(httpStatus.NOT_FOUND);
    }
}

export async function getCourseById(req: Request, res: Response) {
    let { courseId } = req.params;

    try {
        const course = await coursesServices.courseById(Number(courseId));      
        return res.status(200).send(course);
    } catch(err) {
        console.log(err)
        return res.sendStatus(httpStatus.NOT_FOUND);
    }
}
