import { Request, Response } from "express";
import usersServices from "../services/usersServices";
import httpStatus from "http-status";
import { userSchema } from "../models/userScheema";

export async function signUp(req: Request, res: Response) {
    const { name, email, password } = req.body;

    try {
        const { error } = userSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const err = error.details.map((d) => d.message);
            return res.status(httpStatus.UNPROCESSABLE_ENTITY).send({message: err});
        }

        await usersServices.signUpService(name, email, password);   
   
        return res.sendStatus(httpStatus.CREATED);

    } catch(err) {        
        if (err == httpStatus.CONFLICT) {
            return res.status(httpStatus.CONFLICT).send({message: "E-mail already registred"});
        }

        console.log(err);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
};

export async function signIn(req: Request, res: Response) {   
    const { email, password } = req.body;

    try {
        const token = await usersServices.signInService(email, password);
        
        res.status(httpStatus.OK).send(token);

    } catch (err) {
        if (err == httpStatus.NOT_FOUND) {
            return res.status(httpStatus.FOUND).send({message: "E-mail does not exist"});
        }

        if (err == httpStatus.UNAUTHORIZED) {
            return res.status(httpStatus.UNAUTHORIZED).send({message: "Check your password"});
        }

        console.log(err);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    };
};
