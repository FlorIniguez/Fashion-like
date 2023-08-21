import express  from "express";
import { loginValidation } from "../../utils/validators/loginValidation";
import { registerController } from "../../controllers/users/registerController";
import { loginController } from "../../controllers/users/loginController";
import { validateUser } from "../../utils/validators/userCreateValidator";

const router = express.Router();

router.post('/login', loginValidation, loginController)
router.post('/register', validateUser,registerController)

export default router;