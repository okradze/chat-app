import React from 'react'
import Header from '../Header/Header'
import ChatsPreview from '../ChatsPreview/ChatsPreview'
import ChatOverview from '../ChatOverview/ChatOverview'

const Home = () => (
    <div className="home">
        <Header />
        <div className="container">
            <div className="home__content">
                <ChatsPreview />
                <ChatOverview />
            </div>
        </div>
    </div>
)

export default Home
