const Chat = {
    async users(chat) {
        const { users } = await chat.populate('users').execPopulate()
        return users
    },
}

export default Chat
