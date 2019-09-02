import Message from '../models/Message'

const Chat = {
    async users(chat) {
        const { users } = await chat.populate('users').execPopulate()
        return users
    },
    async messages(chat) {
        return await Message.find({ chat: chat._id })
    },
}

export default Chat
