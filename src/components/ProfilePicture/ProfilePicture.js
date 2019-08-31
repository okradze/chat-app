import React from 'react'
import './ProfilePicture.scss'

const ProfilePicture = ({ photoURL }) => (
    <div className="profile-picture">
        <img className="profile-picture__img" src={photoURL} alt="" />
    </div>
)

export default ProfilePicture
