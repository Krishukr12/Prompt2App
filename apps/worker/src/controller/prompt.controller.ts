import { NextFunction, Request, Response } from "express";

export const postPrompt = (req: Request, res: Response, next: NextFunction) => {
 //get prompt and project id from body
 // generate a AI client instance 
 // find project with project id && if project doesn't exit , send them error
 // create a prompt and dump into the database
 


  res.send("working here!");
};
