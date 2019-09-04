import React from 'react'
import { useSubscription } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import './ChatPreview.scss'

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

const ChatPreview = ({
    _id,
    fullName,
    lastMessage,
    createdAt,
    onClick,
    isVisited,
}) => {
    // useSubscription(MESSAGE_SUBSCRIPTION, {
    //     variables: {
    //         chatId: _id,
    //     },
    //     onSubscriptionData(data) {
    //         console.log(data)
    //     },
    // })

    const formatDate = date => {
        const now = new Date()
        if (date.getDate() === now.getDate()) {
            return `${date.getHours()}:${date.getMinutes()}`
        }
    }

    return (
        <div
            role="button"
            tabIndex="0"
            onClick={() => {
                onClick()
            }}
            onKeyPress={e => {
                if (e.which === 13) {
                    onClick()
                }
            }}
            className={`ChatPreview ${isVisited && 'ChatPreview--visited'}`}
        >
            <ProfilePicture
                width="4.5rem"
                height="4.5rem"
                photoURL="https://randomuser.me/api/portraits/men/10.jpg"
            />

            <div className="ChatPreview__user-info">
                <h4 className="ChatPreview__user-name">{fullName}</h4>
                <div className="ChatPreview__last-message">
                    {lastMessage ? lastMessage.message : 'Start a conversation'}
                </div>
            </div>
            <time className="ChatPreview__date">
                {formatDate(
                    lastMessage
                        ? new Date(lastMessage.createdAt * 1)
                        : new Date(createdAt * 1),
                )}
            </time>
        </div>
    )
}

export default ChatPreview
