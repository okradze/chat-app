import Chat from '../../models/Chat'
import getUserId from '../../utils/getUserId'
import { createChatSchema } from '@chat/common'

const createChat = async (parent, { data }, { req }) => {
    const uniqueUsers = [...new Set(data.users)]

    const userId = getUserId(req)

    await createChatSchema.validate({ users: uniqueUsers })

    const chat = await new Chat({
        users: [...uniqueUsers, userId],
    }).save()

    return chat
}

export default createChat
