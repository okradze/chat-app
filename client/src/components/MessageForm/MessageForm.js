import React, { useState, useContext } from 'react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import HomeContext from '../HomeContent/Context'
import withAuth from '../withAuth/withAuth'
import SendSvg from '../../svg/Send'
import './MessageForm.scss'

const SEND_MESSAGE = gql`
    mutation SendMessage($message: String!, $chatId: ID!) {
        createMessage(data: { chat: $chatId, message: $message }) {
            _id
            user {
                _id
            }
            message
            createdAt
        }
    }
`

const MessageForm = () => {
    const [message, setMessage] = useState('')
    const { visitedChat } = useContext(HomeContext)
    const [sendMessage] = useMutation(SEND_MESSAGE, {
        variables: {
            message,
            chatId: visitedChat._id,
        },
    })

    const onSubmit = e => {
        e.preventDefault()
        if (message) {
            sendMessage()
            setMessage('')
        }
    }

    const onChange = e => {
        setMessage(e.target.value)
    }

    return (
        <form onSubmit={onSubmit} className="MessageForm">
            <textarea
                onChange={onChange}
                value={message}
                placeholder="Type a message here"
                className="MessageForm__textarea"
                rows="1"
            />
            <button type="submit" className="MessageForm__button">
                <SendSvg className="MessageForm__send-icon" />
            </button>
        </form>
    )
}

export default withAuth(MessageForm)
