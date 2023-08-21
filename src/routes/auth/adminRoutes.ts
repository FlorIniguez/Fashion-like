import express from 'express'
import { authorize } from '../../utils/middlewares/authorize';
import { validateToken } from '../../utils/middlewares/validateToken';
import { deletePost } from '../../controllers/auth/deletePost';
import { updatePost } from '../../controllers/auth/updatePost';
import { addPost } from '../../controllers/auth/addPost';
import { validatePostCreate } from '../../utils/validators/postValidator';
import { getPostDetails } from '../../controllers/auth/getPostDetails';


const router = express.Router();

router.delete('/delete/:id', validateToken, authorize, deletePost);
router.put('/update/:id', validateToken, authorize,updatePost);
router.put('/create',validateToken, authorize, validatePostCreate, addPost);
router.put('/details/:id', validateToken, authorize,getPostDetails);
export default router;