import joi from "joi";

export const userSchema = joi.object({
    name: joi.string().min(2).max(50).required(),
    email: joi.string().email().required(),
    password: joi.string().min(4).max(6).required(),
})