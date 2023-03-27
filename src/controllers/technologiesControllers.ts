import { Request, Response } from "express";
import technologiesServices from "../services/technologiesServices";
import httpStatus from "http-status";

export async function getTechnologyById(req: Request, res: Response) {
    let { technologyId } = req.params;

    try {
        const technology = await technologiesServices.technologyById(Number(technologyId));      
        return res.status(200).send(technology);
    } catch(err) {
        console.log(err)
        return res.sendStatus(httpStatus.NOT_FOUND);
    }
}