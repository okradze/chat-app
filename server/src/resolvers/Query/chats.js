import getUserId from '../../utils/getUserId'
import Chat from '../../models/Chat'

const chats = async (parent, args, { req }) => {
    const userId = getUserId(req)

    return await Chat.find({ users: userId })
}

export default chats
