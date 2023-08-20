import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const generateJWT = (id: string): string => {
  const payload = { id };
  try {
    const token: string = jwt.sign(payload, process.env.TOKEN_SECRET || '', { expiresIn: '2h' });
    return token;
  } catch (error) {
    throw new Error('Error al generar el token JWT.');
  }
};