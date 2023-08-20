import { Rol } from "../../models/Users";

export interface  AddUserDTO {
    email: string,
    password: string,
    createdAd: Date,
    rol: Rol
}