import { NextFunction, Request, Response } from "express";
import { check } from "express-validator";
import { ValidateResult } from "./validateHelper";
import { Rol } from "../../models/Users";

export const validateUser = [
check("password").notEmpty().withMessage("password campo requerido")
  .isLength({ min: 5 }).withMessage('El campo "password" debe tener al menos 5 caracteres'),

check("email")
    .exists()
    .notEmpty()
    .withMessage("Email es un campo requerido")
    .isEmail()
    .withMessage("Formato de email invalido"),
    
check('rol')
    .isIn(Object.values(Rol))
    .withMessage("El rol no es vàlido, opciones: admin o user "),

  (req: Request, res: Response, next: NextFunction) => {
    ValidateResult(req, res, next);
  },
];