import { string, object, array } from 'yup'

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

export const createChatSchema = object().shape({
    users: array(string())
        .min(1)
        .max(50),
})
