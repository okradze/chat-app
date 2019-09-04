import { UserInputError } from 'apollo-server-express'
import Chat from '../../models/Chat'
import Message from '../../models/Message'
import getUserId from '../../utils/getUserId'

const messages = async (parent, { chatId }, { req }) => {
    const userId = getUserId(req)
    const chat = await Chat.findOne({ _id: chatId, users: userId })

    if (!chat) {
        throw new UserInputError('NO_CHAT')
    }

    return await Message.find({ chat: chatId })
}

export default messages
