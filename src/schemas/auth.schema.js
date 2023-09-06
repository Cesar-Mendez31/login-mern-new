import { z } from 'zod';

export const registerSchema = z.object({
    username : z. string({
        required_error: "Username is a requerid field"
    }),
    email : z.string({
        required_error:"Email address is a requerid field",
    }).email({
        message:'invalid email adress'
    }),
    password: z.string({
        required_error: 'password is a requerid field'
    }).min(6, {
        message : 'password must be at least 6 characters long.'
    })
});

export const loginSchema = z.object({
    email : z.string({
        required_error:"Email address is a requerid field",
    }).email({
        message:'invalid email adress'
    }),
    password: z.string({
        required_error: 'password is a requerid field'
    }).min(6, {
        message : 'password must be at least 6 characters long.'
    })
})