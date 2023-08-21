import { Request, Response } from "express";
import Post from '../../models/Post';

export const getPostDetails = async (req: Request, res:Response) =>{
    try {
        const postId = req.params.postId;
        const post = await Post.findById(postId);
        if(!post) {
            return res.status(404).json({mesagge: 'El post no existe'});
        }
        const postDetails = {
            title: post.title,
            content: post.content,
            likes : post.likes,
            dislikes: post.dislikes,
        }
        res.status(200).json(postDetails)
    } catch (error) {
        res.status(500).json({mesagge: 'Error al obtener detalle del post '})
    }
}