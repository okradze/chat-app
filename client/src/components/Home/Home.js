import React from 'react'
import Header from '../Header/Header'
import ChatsPreview from '../ChatsPreview/ChatsPreview'
import ChatOverview from '../ChatOverview/ChatOverview'
import './Home.scss'

const Home = () => (
    <div className="home">
        <Header />
        <div className="home__content">
            <ChatsPreview />
            <ChatOverview />
        </div>
    </div>
)

export default Home
