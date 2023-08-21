import express,{ Request,Response } from "express";
import Post from "../../models/Post";


export const updatePost = async (req: Request, res: Response) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body,{new:true});
        if(!post) {
            return res.status(404).json({mesagge: 'Post no encontrado'})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}