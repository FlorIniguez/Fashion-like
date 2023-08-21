import { Request, Response } from "express";
import User, { IUser } from "../../models/Users";
import { AddUserDTO } from "./interface";
import bcrypt from "bcrypt";
// import dotenv from "dotenv";
import { generateJWT } from "../../utils/middlewares/generateToken";
// dotenv.config();

export const registerController = async (req: Request, res: Response) => {
  try {
    const newUser: AddUserDTO = req.body;

    // Verificar si el correo electrónico ya está en uso
    const existingEmailUser: IUser | null = await User.findOne({ email: newUser.email });
    if (existingEmailUser) {
      return res.status(409).json({ message: "El correo electrónico ya está en uso." });
    }

    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    const user: IUser = new User({
      ...newUser,
      password: hashedPassword,
    });
    const savedUser = await user.save();
    //token
    const token: string = generateJWT(savedUser._id);
    res.header('Authorization',token).json({msg: 'Usuario creado con éxito'});
  } catch (error) {
    res
      .status(500)
      .json({ message: error + " No se ha podido crear el usuario" });
  }
};