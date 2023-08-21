import  { Request, Response } from "express";
import Post from "../../models/Post";

export const dislikePost = async (req:Request, res:Response) =>{
 try {
    const postId = req.params.postId;
    const post = await Post.findById(postId);
    if(!post) {
        return res.status(404).json({mesagge: 'El post no existe'})

    }
        // Incrementar el contador de "dislikes" y guardar el post actualizado
        post.dislikes += 1;
        await post.save();
    
        res.status(200).json({ message: "Posteado 'dislike' exitosamente" });
      } catch (error) {
        res.status(500).json({ error: "Error al dar 'dislike' al post" });
      }
    
 }
