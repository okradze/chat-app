import { createMessageSchema } from '@chat/common'
import Message from '../../models/Message'
import getUserId from '../../utils/getUserId'

const createMessage = async (parent, { data }, { req }) => {
    const userId = getUserId(req)

    await createMessageSchema.validate(data)

    const message = await new Message({
        ...data,
        user: userId,
    }).save()

    return message
}

export default createMessage
