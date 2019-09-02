import { createMessageSchema } from '@chat/common'
import Chat from '../../models/Chat'
import Message from '../../models/Message'
import getUserId from '../../utils/getUserId'

const createMessage = async (parent, { data }, { req }) => {
    await createMessageSchema.validate(data)

    const userId = getUserId(req)

    const chat = await Chat.findOne({ _id: data.chat, users: userId })

    if (!chat) {
        throw new Error('NO_CHAT')
    }

    const message = await new Message({
        ...data,
        user: userId,
    }).save()

    return message
}

export default createMessage
