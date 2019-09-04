import React, { useState } from 'react'
import ChatsPreview from '../ChatsPreview/ChatsPreview'
import ChatOverview from '../ChatOverview/ChatOverview'
import HomeContext from './Context'

const HomeContent = () => {
    const [visitedChat, setVisitedChat] = useState()

    return (
        <HomeContext.Provider value={{ visitedChat, setVisitedChat }}>
            <div className="home__content">
                <ChatsPreview />
                {visitedChat && <ChatOverview />}
            </div>
        </HomeContext.Provider>
    )
}

export default HomeContent
