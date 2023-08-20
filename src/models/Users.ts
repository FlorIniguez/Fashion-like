import mongoose, {Document, Schema} from 'mongoose'

export enum Rol {
    ADMIN_ROLE = "admin",
    USER_ROLE = "user"
}
export interface IUser extends Document {
    id: string;
    email: string; 
    password: string;
    createdAt: Date;
    rol: Rol
}

const UserSchema = new Schema ({
    email : {
        type: String,
        required: [true, "Email is required"],
        unique : true
    },
    password: {
        type: String,
        required: [true, "Password obligatorio"],
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      rol: {
        type: String,
        enum: [Rol.ADMIN_ROLE, Rol.USER_ROLE],
        required: true,
        default: Rol.USER_ROLE

      }
})

export default mongoose.model<IUser>("User", UserSchema)