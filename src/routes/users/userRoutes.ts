import express  from "express";
import { loginController } from "../../controllers/users/loginController";
import { registerController } from "../../controllers/users/registerController";

const router = express.Router();

router.post('/login', loginController)
router.post('/register', registerController)

module.exports = router;