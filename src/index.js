import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import transacoesRoutes from "./routes/transacoesRoutes.js"

const app = express ();

dotenv.config();
app.use(cors());
app.use(express.json());

app.use(authRoutes);
app.use(transacoesRoutes)

const PORT = process.env.PORT || 5008;

app.listen (PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})