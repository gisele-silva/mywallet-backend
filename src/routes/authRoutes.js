import { Router } from "express"
import { loginUser } from "../controllers/authController.js";
import { cadastroUser } from "../controllers/authController.js";
const router = Router();

router.post("/login", loginUser)
router.post("/cadastro", cadastroUser)

export default router;
