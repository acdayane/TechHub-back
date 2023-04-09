import { Request, Response } from "express";
import technologiesServices from "../services/technologiesServices";
import httpStatus from "http-status";

export async function getTechnologyById(req: Request, res: Response) {
    let { technologyId } = req.params;

    try {
        const technology = await technologiesServices.technologyById(Number(technologyId));    

        return res.status(200).send(technology);

    } catch(err) {
        if (err == httpStatus.NOT_FOUND) {
            return res.status(httpStatus.NOT_FOUND).send({message: "Technology not found"});
        }

        console.log(err)
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

export async function getTechnologies(req: Request, res: Response) {

    try {
        const technologies = await technologiesServices.technologiesList();   

        return res.status(200).send(technologies);

    } catch(err) {
        if (err == httpStatus.NOT_FOUND) {
            return res.status(httpStatus.NOT_FOUND).send({message: "Technologies not found"});
        }

        console.log(err)
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}