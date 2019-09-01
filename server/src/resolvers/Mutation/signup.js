import User from '../../models/User'

const signup = async (parent, { data }) => {
    // validate

    // create

    const user = new User(data)

    await user.save()

    return user
}

export default signup
