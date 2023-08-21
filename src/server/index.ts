import express from 'express';
import cors from 'cors'
import userRoutes from '../routes/users/userRoutes';
import postRoutes from '../routes/posts/postRoutes';
import adminRoutes from '../routes/auth/adminRoutes';


const server = express();


server.use(express.json());
server.use(cors())

//outeError
server.use('/user', userRoutes)
server.use('/posts', postRoutes)
server.use('/auth', adminRoutes)

export default server;

