import { signupSchema } from '@chat/common'
import User from '../../models/User'

const signup = async (parent, { data }) => {
    try {
        // validate

        await signupSchema.validate(data, {
            abortEarly: false,
            strict: true,
        })

        const user = await new User(data).save()

        return user
    } catch (e) {
        if (e.message.endsWith('EMAIL_TAKEN')) {
            throw new Error('EMAIL_TAKEN')
        }
    }
}

export default signup
