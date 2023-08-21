import { Request, Response } from "express";
import Post from "../../models/Post";

export const deletePost = async (req:Request, res:Response) =>{
    try {
        const deletePost = await Post.findByIdAndDelete(req.params.id);
        if(!deletePost){
            return res.status(404).json({message:'Post no encontrado'})
        }
        res.status(200).json({message : 'Post eliminado exitosamente'})
    } catch (error) {
        res.status(500).json({mesagge : 'Error al eliminar el post'})
    }
}