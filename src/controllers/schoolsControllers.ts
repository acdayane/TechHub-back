import { Request, Response } from "express";
import schoolsServices from "../services/schoolsServices";
import httpStatus from "http-status";

export async function getSchools(req: Request, res: Response) {
    try {
        const schools = await schoolsServices.listSchools();      
        return res.status(200).send(schools);
    } catch(err) {
        console.log(err)
        return res.sendStatus(httpStatus.NOT_FOUND);
    }
}

export async function getSchoolById(req: Request, res: Response) {
    let { schoolId } = req.params;

    try {
        const school = await schoolsServices.schoolById(Number(schoolId));      
        return res.status(200).send(school);
    } catch(err) {
        console.log(err)
        return res.sendStatus(httpStatus.NOT_FOUND);
    }
}