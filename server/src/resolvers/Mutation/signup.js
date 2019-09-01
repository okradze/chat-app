import User from '../../models/User'

const signup = async (parent, { data }) => {
    // validate

    const user = await new User(data).save()

    return user
}

export default signup
