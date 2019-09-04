import React, { useEffect, useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import withAuth from '../withAuth/withAuth'
import Message from '../Message/Message'
import HomeContext from '../HomeContent/Context'
import './Messages.scss'

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

const MESSAGE_SUBSCRIPTION = gql`
    subscription Message($chatId: ID!) {
        message(chatId: $chatId) {
            _id
            message
            user {
                _id
            }
            createdAt
        }
    }
`

const Messages = ({ auth }) => {
    const { visitedChat } = useContext(HomeContext)

    const { subscribeToMore, data, loading } = useQuery(MESSAGES, {
        variables: {
            chatId: visitedChat._id,
        },
    })

    useEffect(() => {
        const unsubscribe = subscribeToMore({
            document: MESSAGE_SUBSCRIPTION,
            variables: {
                chatId: visitedChat._id,
            },
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev

                const { message } = subscriptionData.data

                return {
                    ...prev,
                    messages: [...prev.messages, message],
                }
            },
        })

        return () => {
            unsubscribe()
        }
    }, [subscribeToMore])

    return (
        <div className="Messages">
            {!loading &&
                data.messages.map(({ message, user, createdAt }, index) => (
                    <Message
                        key={index}
                        sentByMe={user._id === auth.user._id}
                        createdAt={createdAt}
                        photoURL="https://randomuser.me/api/portraits/men/47.jpg"
                        message={message}
                    />
                ))}
        </div>
    )
}

export default withAuth(Messages)
