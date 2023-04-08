import joi from "joi";

export const commentSchema = joi.object({
    id: joi.number().integer(),
    content: joi.string().min(3).max(280).required(),
    userId: joi.number().integer().required()
})