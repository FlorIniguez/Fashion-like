import express, {Request, Response} from 'express';
import cors from 'cors'
const userRoutes = require('../routes/users/userRoutes')

const server = express();


server.use(express.json());
server.use(cors())

server.get('/', (_eq: Request,res:Response)=> {
    res.send('Welcome to my backend project!');
   })
//faltan rutas y routeError
server.use('/user', userRoutes)
export default server;

