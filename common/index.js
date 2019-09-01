import { string, object } from 'yup'

export const signupSchema = object().shape({
    firstName: string()
        .trim()
        .required()
        .max(50),
    lastName: string()
        .trim()
        .required()
        .max(50),
    email: string()
        .required()
        .email('INVALID_EMAIL'),
    password: string()
        .required()
        .min(8, 'MIN_PASSWORD')
        .max(100),
})
