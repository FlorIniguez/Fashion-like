import jwt from "jsonwebtoken";
import { NextFunction, Request as ExpressRequest, Response } from "express";
import  { IUser, Rol } from "../../models/Users";
import dotenv from "dotenv";
dotenv.config();

// extender una interfaz existente para agregarle propiedades adicionales o modificar su comportamiento.
// extender la interfaz Request de Express para agregar la propiedad user con el tipo IUser.
interface Request extends ExpressRequest {
  user?: IUser;
}

export const authorize = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res
        .status(401)
        .json({ message: "Se requiere un token de autenticación." });
    }
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET || "") as IUser;
    req.user = decoded;
    //verificar rol
    if (req.user.rol !== Rol.ADMIN_ROLE) {
      return res
        .status(403)
        .json({ mesagge: "No tienes permiso para acceder a esta función" });
    }
    next();
  } catch (error) {
    res.status(401).json({ mesagge: "El token no es válido o ha expirado" });
  }
};
