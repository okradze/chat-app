import React, { useState } from 'react'
import ChatsPreview from '../ChatsPreview/ChatsPreview'
import Chat from '../Chat/Chat'
import HomeContext from './Context'

const HomeContent = () => {
    const [visitedChat, setVisitedChat] = useState()

    return (
        <HomeContext.Provider value={{ visitedChat, setVisitedChat }}>
            <div className="home__content">
                <ChatsPreview />
                {visitedChat && <Chat />}
            </div>
        </HomeContext.Provider>
    )
}

export default HomeContent
