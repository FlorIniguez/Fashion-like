import bcrypt from "bcrypt";
import { Request, Response } from "express";
import User, { IUser } from "../../models/Users";
import { generateJWT } from "../../middlewares/generateToken";

export const loginController = async (req: Request, res: Response) => {
  try {
    const userFound: IUser | null = await User.findOne({
      email: req.body.email,
    });
    if (!userFound)
      return res
        .status(400)
        .json({ mesagge: "Email o contraseña incorrectos" });

    const isMatch = await bcrypt.compare(req.body.password, userFound.password);
    if (!isMatch)
      return res
        .status(400)
        .json({ mesagge: "Email o contraseña incorrectos" });
  //token
  const token : string = generateJWT( userFound._id);
  res.header('Authorization',token).json({msg: 'Login existoso'});

  } catch (error) {
    res.status(500).json(error);
  }
};
