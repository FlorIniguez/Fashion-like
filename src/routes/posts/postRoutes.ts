import express from 'express'
import { getPosts } from '../../controllers/post/getPosts';
import { validateToken } from '../../utils/middlewares/validateToken';
import { likePost } from '../../controllers/post/likePost';
import { dislikePost } from '../../controllers/post/dislikePost';

const router = express.Router();

router.get('/get', getPosts)
router.post('/count/:postId/like', validateToken, likePost )
router.post('/count/:postId/dislike',validateToken, dislikePost )



export default router;