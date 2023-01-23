import {Router} from "express"
import { cadastrarTransacoes, pegarTransacoes } from "../controllers/transacaoController.js"
import { userMiddleware } from "../middleware/userMiddleware.js"

const router = Router()

router.get("/transacoes", userMiddleware, pegarTransacoes)
router.post("/transacoes", userMiddleware, cadastrarTransacoes)

export default router