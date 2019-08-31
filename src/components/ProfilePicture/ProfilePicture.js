import React from 'react'

const ProfilePicture = ({ photoURL }) => (
    <div className="profile-pic">
        <img src={photoURL} alt="" />
    </div>
)

export default ProfilePicture
