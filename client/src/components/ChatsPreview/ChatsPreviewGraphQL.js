import gql from 'graphql-tag'

export const CHAT_SUBSCRIPTION = gql`
    subscription {
        chat {
            _id
            users {
                _id
                fullName
            }
            lastMessage {
                createdAt
                message
            }
            createdAt
        }
    }
`

export const CHATS = gql`
    query {
        chats {
            _id
            users {
                _id
                fullName
            }
            lastMessage {
                createdAt
                message
            }
            createdAt
        }
    }
`
