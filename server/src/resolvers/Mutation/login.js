import { UserInputError } from 'apollo-server-express'
import bcrypt from 'bcryptjs'
import User from '../../models/User'
import generateToken from '../../utils/generateToken'
import setTokenCookie from '../../utils/setTokenCookie'

const login = async (parent, { data: { email, password } }, { res }) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new UserInputError('NO_USER')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new UserInputError('NO_USER')
    }

    const token = generateToken(user._id)

    setTokenCookie(res, token)

    return user
}

export default login
