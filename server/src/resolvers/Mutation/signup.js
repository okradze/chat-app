import { signupSchema } from '@chat/common'
import User from '../../models/User'
import generateToken from '../../utils/generateToken'
import setTokenCookie from '../../utils/setTokenCookie'

const signup = async (parent, { data }, { res }) => {
    // validate

    await signupSchema.validate(data, {
        abortEarly: false,
        strict: true,
    })

    const user = await new User(data).save()

    const token = generateToken(user._id)

    setTokenCookie(res, token)

    return user
}

export default signup
