import db from "../database/mongodb.js"
import { authCadastroSchema } from "../schemas/authSchema.js"
import { authLoginSchema } from "../schemas/authSchema.js"
import bcrypt from "bcrypt"
import {v4 as uuid} from "uuid"

export async function loginUser(req, res) {
    try {
      const user = req.body
  
      const validate = authLoginSchema.validate(user)
  
      if (validate.error) {
        return res.status(422).send("Preencha todos os campos")
      }
  
      const verificaUser = await db.collection('users').findOne({ email: user.email })
  
      if (!verificaUser) {
        return res.status(422).send("Usuário ou senha incorreta")
      }
  
      const passwordBcrypt = bcrypt.compareSync(user.password, verificaUser.password)
  
      if (passwordBcrypt) {
        const token = uuid();
        await db.collection('sessions').insertOne({ token, userId: verificaUser._id })
  
        return res.status(200).send({ token, name: verificaUser.name })
      }
  
      res.status(200).send("Cadastro realizado com sucesso")
    } catch (error) {
      console.error("Erro ao cadastrar usuário")
      res.status(500).send("Erro ao cadastrar usuário")
    }
  }

export async function cadastroUser (req, res){
    try {
        const newUser = req.body
        const passwordHash = bcrypt.hashSync(newUser.password, 10);
        const validate = authCadastroSchema.validate(newUser)

        if(validate.error){
            return res.status(422).send("Preencha todos os campos")
        }

        await db.collection("users").insertOne({
            name: newUser.name,
            email: newUser.email,
            password: passwordHash
        })
        res.status(200).send("Cadastro realizado com sucesso")
    } catch (error) {
        console.error("Errro ao cadastrar usuário")
        res.status(500).send("Erro ao cadastrar usuário")
    }
}