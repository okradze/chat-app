import Message from '../../models/Message'
import getUserId from '../../utils/getUserId'

const createMessage = (parent, { data }, { req }) => {
    const userId = getUserId(req)

    const message = new Message({
        ...data,
        user: userId,
    }).save()

    return message
}

export default createMessage
