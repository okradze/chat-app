import Chat from '../../models/Chat'
import getUserId from '../../utils/getUserId'
import { createChatSchema } from '@chat/common'

const createChat = async (parent, { data }, { req }) => {
    const userId = getUserId(req)

    const uniqueUsers = [...new Set(data.users)]

    await createChatSchema.validate({ users: uniqueUsers })

    const chat = await new Chat({
        users: [...uniqueUsers, userId],
    }).save()

    return await chat.populate('users').execPopulate()
}

export default createChat
