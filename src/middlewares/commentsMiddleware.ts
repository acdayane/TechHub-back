
import { commentSchema } from "../models/commentScheema";

export async function commentsMiddleware(req, res, next) {
    const { content, userId } = req.body;
    const { error } = commentSchema.validate(req.body, { abortEarly: false });
  
    const newComment = { 
      content, 
      userId 
    };
  
    if(error) {
      const err = error.details.map((d) => d.message);
      return res.status(400).send(err);
    };
  
    req.post = newComment;
    next();
  }