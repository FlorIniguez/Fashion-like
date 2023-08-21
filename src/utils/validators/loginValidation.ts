import { NextFunction, Request, Response } from "express";
import { check } from "express-validator";
import { ValidateResult } from "./validateHelper";

export const loginValidation = [
  check("email")
    .exists()
    .notEmpty()
    .withMessage("Email es un campo requerido")
    .isEmail()
    .withMessage("Formato de email invalido"),

  check("password").notEmpty().withMessage("password campo requerido"),

  (req: Request, res: Response, next: NextFunction) => {
    ValidateResult(req, res, next);
  },
];
