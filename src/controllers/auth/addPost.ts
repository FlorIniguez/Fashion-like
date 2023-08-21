import { Request, Response } from "express";
import { AddPostDTO } from "../post/interface";
import Post, { IPost } from "../../models/Post";

require("dotenv").config();

export const addPost = async (req:Request, res:Response) =>{
    try {
        const newPost : AddPostDTO = req.body;
        const post : IPost = new Post ({
            ...newPost
        })
        const savedPost = await post.save();
        res.status(201).json({
            message: "Post creado exitosamente",
            post: {
              _id: savedPost._id,
              title: savedPost.title,
              createdAt: savedPost.createdAt,}
            });
    } catch (error) {
        console.error("Error al registrar el post:", error);
        res.status(500).json({ error: "Ha ocurrido un error al registrar el post" });
      }
}