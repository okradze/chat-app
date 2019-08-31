import React, { useState } from 'react'
import SearchSvg from '../../svg/Search'
import AutoCompleteInput from '../AutoCompleteInput/AutoCompleteInput'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import Button from '../Button/Button'
import SendSvg from '../../svg/Send'
import './AutoCompleteInputContainer.scss'

const AutoCompleteInputContainer = () => {
    const [isOpen, setIsOpen] = useState(true)

    const renderItem = ({ photoURL, displayName }) => (
        <span onClick={() => setIsOpen(false)} className="search-item">
            <div className="search-item__user">
                <ProfilePicture photoURL={photoURL} />
                <p>{displayName}</p>
            </div>
            <SendSvg className="search-item__icon" />
        </span>
    )

    return (
        <AutoCompleteInput
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            Svg={SearchSvg}
            suggestions={[
                {
                    displayName: 'Zura Chubinashvili',
                    photoURL:
                        'https://i2.wp.com/metro.co.uk/wp-content/uploads/2015/11/twitter.png?quality=90&strip=all&zoom=1&resize=644%2C637&ssl=1',
                },
                {
                    displayName: 'Luka Baby',
                    photoURL:
                        'https://freehindistatus.com/wp-content/uploads/2018/05/cute-baby-whatsapp-profile-300x300.jpg',
                },
            ]}
            render={renderItem}
        />
    )
}

export default AutoCompleteInputContainer
