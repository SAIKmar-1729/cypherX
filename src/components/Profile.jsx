import React, {useState, useEffect } from 'react';

const ProfileImage = ({ fullName }) => {
    const [name, setName] = useState("")

    useEffect(() => {
        const nameParts = fullName ? fullName.split(' ') : []
        const initials = nameParts.length > 1 ? nameParts[0].charAt(0).toUpperCase() + nameParts[1].charAt(0).toUpperCase() : nameParts[0].charAt(0).toUpperCase();
        setName(initials)
    }, [fullName]);

    return (
        <div id="profileImage" style={profileImageStyle}>{name}</div>
    );
};

const profileImageStyle = {
    width: '25px',
    height: '25px',
    textAlign:'center',
    objectFit: 'contain',
    borderRadius: '50%',
    border: '1px white solid',
    marginRight: '5px',
};

export default ProfileImage;