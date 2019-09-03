import Chat from '../../models/Chat'
import getUserId from '../../utils/getUserId'

const message = {
    subscribe: async (parent, { chatId }, { pubsub, req }) => {
        const userId = getUserId(req)
        const chat = await Chat.findOne({ _id: chatId, users: userId })

        if (!chat) {
            throw new Error('NO_CHAT')
        }

        return pubsub.asyncIterator(`message:${chatId}`)
    },
}

export default message
