import React from 'react'

const ProfilePicture = ({ photoURL, width, height, ...otherProps }) => (
    <img
        style={{
            width,
            height,
            borderRadius: '50%',
        }}
        className="ProfilePicture"
        src={photoURL}
        alt=""
        {...otherProps}
    />
)

export default ProfilePicture
