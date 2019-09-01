import { AuthenticationError } from 'apollo-server-express'
import User from '../../models/User'
import getUserId from '../../utils/getUserId'
import generateToken from '../../utils/generateToken'
import setTokenCookie from '../../utils/setTokenCookie'

const auth = async (parent, args, { req, res }) => {
    const userId = getUserId(req)

    const user = await User.findOne({ _id: userId })

    if (!user) {
        throw new AuthenticationError('NO_AUTH')
    }

    const token = generateToken(userId)

    setTokenCookie(res, token)

    return user
}

export default auth
