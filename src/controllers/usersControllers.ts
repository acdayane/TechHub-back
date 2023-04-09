import { Request, Response } from "express";
import usersServices from "../services/usersServices";
import httpStatus from "http-status";
import bcrypt from "bcrypt";
import { userSchema } from "../models/userScheema";
import jwt from "jsonwebtoken";

export async function signUp(req: Request, res: Response) {
    let { name, email, password } = req.body;

    try {
        const { error } = userSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const err = error.details.map((d) => d.message);
            return res.status(httpStatus.UNPROCESSABLE_ENTITY).send({message: err});
        }

        const hashedPassword = await bcrypt.hash(password, 2);

        await usersServices.signUpService(name, email, hashedPassword);   
   
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
    //let { userId } = res.locals.userToken;
    
    const { email, password } = req.body;

    try {
        const checkEmail = await usersServices.signInService(email);
        if (!checkEmail) {
            return res.sendStatus(httpStatus.NOT_FOUND);
        };
       
        const checkPassword = bcrypt.compareSync(password, checkEmail.password);
        if (!checkPassword) {
            return res.sendStatus(httpStatus.UNAUTHORIZED);
        };

        const token = jwt.sign({ id: checkEmail.id }, process.env.SECRET_JWT, { expiresIn: 86400 });

        res.status(httpStatus.OK).send(token);

    } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    };
};
