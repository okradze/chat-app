import React, { useState, useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import withAuth from '../withAuth/withAuth'
import LeftMessage from '../Message/LeftMessage'
import RightMessage from '../Message/RightMessage'
import HomeContext from '../HomeContent/Context'

const MESSAGES = gql`
    query Messages($chatId: ID!) {
        messages(chatId: $chatId) {
            _id
            user {
                _id
            }
            message
            createdAt
        }
    }
`

const MessagesOverview = ({ auth }) => {
    const { visitedChat } = useContext(HomeContext)
    const [messages, setMessages] = useState()

    useQuery(MESSAGES, {
        variables: {
            chatId: visitedChat._id,
        },
        onCompleted(data) {
            setMessages(data.messages)
        },
    })

    return (
        <div className="MessagesOverview">
            {messages &&
                messages.map(({ message, user, createdAt }, index) => {
                    if (user._id === auth.user._id) {
                        return (
                            <RightMessage
                                key={index}
                                createdAt={createdAt}
                                sentByMe
                                photoURL="https://randomuser.me/api/portraits/men/47.jpg"
                                message={message}
                            />
                        )
                    }
                    return (
                        <LeftMessage
                            key={index}
                            createdAt={createdAt}
                            sentByMe={false}
                            photoURL="https://randomuser.me/api/portraits/men/17.jpg"
                            message={message}
                        />
                    )
                })}
        </div>
    )
}

export default withAuth(MessagesOverview)
