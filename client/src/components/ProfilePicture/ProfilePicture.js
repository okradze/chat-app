import React from 'react'
import './ProfilePicture.scss'

const ProfilePicture = ({
    photoURL,
    isActive,
    width,
    height,
    ...otherProps
}) => (
    <figure className="ProfilePicture">
        <img
            style={{
                width,
                height,
            }}
            className="ProfilePicture__img"
            src={photoURL}
            alt=""
            {...otherProps}
        />
        {isActive && <span className="ProfilePicture__active" />}
    </figure>
)

export default ProfilePicture
