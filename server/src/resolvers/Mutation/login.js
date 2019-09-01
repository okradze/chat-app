import { UserInputError } from 'apollo-server-express'
import bcrypt from 'bcryptjs'
import User from '../../models/User'

const login = async (parent, { data: { email, password } }) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new UserInputError('NO_USER')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new UserInputError('NO_USER')
    }

    return user
}

export default login
