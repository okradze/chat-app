import React, { useState, useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import ChatPreview from '../ChatPreview/ChatPreview'
import HomeContext from '../HomeContent/Context'
import withAuth from '../withAuth/withAuth'
import './ChatsPreview.scss'

const CHATS = gql`
    query {
        chats {
            _id
            users {
                _id
                fullName
            }
            createdAt
        }
    }
`

const ChatsPreview = ({ auth }) => {
    const [chats, setChats] = useState()
    const { setVisitedChat } = useContext(HomeContext)

    useQuery(CHATS, {
        onCompleted(data) {
            setChats(data.chats)
        },
    })

    return (
        <div className="ChatsPreview">
            {chats &&
                chats.map(({ _id, users, lastMessage, createdAt }, index) => (
                    <ChatPreview
                        key={index}
                        id={_id}
                        setVisitedChat={setVisitedChat}
                        fullName={
                            users.find(user => user._id !== auth.user._id)
                                .fullName
                        }
                        lastMessage={lastMessage}
                        createdAt={createdAt}
                        onClick={() => setVisitedChat({ _id, users })}
                    />
                ))}
        </div>
    )
}
export default withAuth(ChatsPreview)
