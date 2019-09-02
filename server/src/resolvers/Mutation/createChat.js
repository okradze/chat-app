import Chat from '../../models/Chat'
import getUserId from '../../utils/getUserId'

const createChat = async (parent, { data }, { req }) => {
    const userId = getUserId(req)

    const chat = await new Chat({
        users: [...data.users, userId],
    }).save()

    return await chat.populate('users')
}

export default createChat
