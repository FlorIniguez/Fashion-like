import express, { Request, Response } from "express";
import Post from "../../models/Post";

export const likePost = async (req:Request, res:Response) =>{
    try {
        const postId = req.params.postId;
        const post = await Post.findById(postId);
        if(!post) {
            return res.status(404).json({mesagge: 'El post no existe '})
        }
    // Incrementar el contador de "likes" y guardar el post actualizado
    post.likes += 1;
    await post.save();
    res.status(200).json({mesagge: "Posteado 'like' exitosamente" })

    } catch (error) {
        res.status(500).json({mesagge:"Error al dar 'like' al post" })
    }
}