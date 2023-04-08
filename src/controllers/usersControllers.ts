import { Request, Response } from "express";
import usersServices from "../services/usersServices";
import httpStatus from "http-status";
import bcrypt from "bcrypt";
import { userSchema } from "../models/userScheema";

export async function signUp(req: Request, res: Response) {
    let { name, email, password } = req.body;

    try {
        const { error } = userSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const err = error.details.map((d) => d.message);
            return res.status(httpStatus.UNPROCESSABLE_ENTITY).send({message: err});
        }

        const hashedPassword = await bcrypt.hash(password, 3);

        await usersServices.signUpService(name, email, hashedPassword);   

        return res.sendStatus(httpStatus.CREATED);

    } catch(err) {        
        if (err == httpStatus.CONFLICT) {
            return res.status(httpStatus.CONFLICT).send({message: "Email já cadastrado"});
        }

        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}