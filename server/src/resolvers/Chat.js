const Chat = {
    async users(chat) {
        const { users } = await chat.populate('users').execPopulate()
        return users
    },
    async lastMessage(chat) {
        return (await chat.populate('lastMessage').execPopulate()).lastMessage
    },
}

export default Chat
