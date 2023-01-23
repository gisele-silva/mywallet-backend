import joi from "joi"

export const authCadastroSchema = joi.object({
    name: joi.string().required().min(3),
    email: joi.string().email().required().min(3),
    password: joi.string().required().min(4),
    confirmPassword: joi.required('password')
});

export const authLoginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});