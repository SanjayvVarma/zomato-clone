import joi from "joi";

export const ValidateRegister = (userData) => {
    const Schema = joi.object({
        fullname: joi.string().required().min(5),
        email: joi.string().email().required(),
        password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
        address: joi.array().items(
            joi.object({
                detail: joi.string().optional(),
                for: joi.string().optional(),
            })
        ).optional(),
        phone: joi.array().items(
            joi.string().pattern(new RegExp("^[0-9]{10}$")).optional()
        ).optional(),
    });

    return Schema.validateAsync(userData);
};


export const ValidateLogin = (userData) => {
    const Schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().required(),
    });

    return Schema.validateAsync(userData);
};