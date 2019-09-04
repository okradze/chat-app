import React, { useEffect, useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
import ChatPreview from '../ChatPreview/ChatPreview'
import HomeContext from '../HomeContent/Context'
import withAuth from '../withAuth/withAuth'
import { CHATS, CHAT_SUBSCRIPTION } from './ChatsPreviewGraphQL'
import './ChatsPreview.scss'

const ChatsPreview = ({ auth }) => {
    const { setVisitedChat, visitedChat } = useContext(HomeContext)

    const { data, loading, subscribeToMore } = useQuery(CHATS)

    useEffect(() => {
        const unsubscribe = subscribeToMore({
            document: CHAT_SUBSCRIPTION,
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev

                const { chat } = subscriptionData.data

                return {
                    ...prev,
                    chats: [
                        chat,
                        ...prev.chats.filter(({ _id }) => _id !== chat._id),
                    ],
                }
            },
        })

        return () => {
            unsubscribe()
        }
    })

    return (
        <div className="ChatsPreview">
            {!loading &&
                data.chats.map(
                    ({ _id, users, lastMessage, createdAt }, index) => (
                        <ChatPreview
                            key={index}
                            _id={_id}
                            isVisited={
                                visitedChat ? _id === visitedChat._id : false
                            }
                            setVisitedChat={setVisitedChat}
                            fullName={
                                users.find(user => user._id !== auth.user._id)
                                    .fullName
                            }
                            lastMessage={lastMessage}
                            createdAt={createdAt}
                            onClick={() => setVisitedChat({ _id, users })}
                        />
                    ),
                )}
        </div>
    )
}

export default withAuth(ChatsPreview)
