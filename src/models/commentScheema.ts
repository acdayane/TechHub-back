import joi from "joi";

export const commentSchema = joi.object({
    content: joi.string().min(3).max(280).required(),
    courseId: joi.number().integer().required(),
    userId: joi.number().integer().required()
})