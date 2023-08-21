import { NextFunction, Request, Response } from "express";
import { check } from "express-validator";
import { ValidateResult } from "./validateHelper";

export const validatePostCreate = [
    check("title")
    .notEmpty()
    .withMessage('Title is required'),
    check("content")
    .notEmpty()
    .withMessage('Content is required'),
    check("likes").isInt({ min: 0 }).withMessage("Likes must be a non-negative integer"),
  check("dislikes").isInt({ min: 0 }).withMessage("Dislikes must be a non-negative integer"),
  (req: Request, res: Response, next: NextFunction) => {
    ValidateResult(req, res, next);
  },

]