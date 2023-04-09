import { Request, Response } from "express";
import schoolsServices from "../services/schoolsServices";
import httpStatus from "http-status";

export async function getSchools(req: Request, res: Response) {
    try {
        const schools = await schoolsServices.listSchools();    

        return res.status(200).send(schools);

    } catch(err) {
        if (err == httpStatus.NOT_FOUND) {
            return res.status(httpStatus.NOT_FOUND).send({message: "Schools list not found"});
        }

        console.log(err)
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

export async function getSchoolById(req: Request, res: Response) {
    let { schoolId } = req.params;

    try {
        const school = await schoolsServices.schoolById(Number(schoolId));

        return res.status(200).send(school);

    } catch(err) {
        if (err == httpStatus.NOT_FOUND) {
            return res.status(httpStatus.NOT_FOUND).send({message: "School not found"});
        }

        console.log(err)
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}