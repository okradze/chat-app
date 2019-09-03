import { withFilter } from 'apollo-server-express'
import getUserId from '../../utils/getUserId'

const chat = {
    subscribe: withFilter(
        (parent, args, { pubsub }) => {
            return pubsub.asyncIterator('chat')
        },
        (payload, variables, { req }) => {
            const userId = getUserId(req)
            return payload.chat.users.includes(userId)
        },
    ),
}

export default chat
