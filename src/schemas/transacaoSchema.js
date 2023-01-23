import joi from 'joi';

export const transacaoSchema = joi.object({
    type: joi.string().required().valid("entrada", "saida"),
    value: joi.number().required(),
    description: joi.string().required()
})
