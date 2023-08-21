import express,{ Request,Response } from "express";
import Post from "../../models/Post";


export const getPosts = async (req:Request, res: Response) =>{
    try {
        const posts = await Post.find().sort({createdAt: -1});
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({mesagge: "Error al obtener los posteos"})
    }
}