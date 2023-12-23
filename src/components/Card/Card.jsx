import React from 'react';
import "./Card.css"
import { images } from '../../constants';
import { useTheme } from '../../ThemeContext';
import ProfileImage from '../Profile';

function Card({ id, description, tags, fullName, isOnline, grouping, prioritySymbol, statusSymbols }) {
    const {theme} = useTheme()
    // console.log("In card");
    // console.log(fullName);
    return (
        <div className={`card ${theme}`}>
            <div className="card-header">
                <div className="id">{id}</div>
                <div className="card-image">
                    {grouping === "User" ? (
                        <div></div>
                    ) : (
                        <>
                            <ProfileImage fullName={fullName}/>
                            <div className={`online-indicator ${isOnline ? 'online' : 'offline'}`} />
                        </>
                    )
                    }
                </div>
            </div>
            <div className="card-content">
                <div className='card-content-text'>
                    {grouping !== "Status" && <img className='card-content-image' src={statusSymbols} />}
                    <p>{description}</p>
                </div>
                <div className="tags">
                    {grouping !== "Priority" &&
                        <img className='card-priority' src={prioritySymbol} alt='' />
                    }
                    {tags.map((tag, index) => (
                        <>
                            <span className="tag" key={index}>
                                <div><img className='grey-circle' src={images.greycircle} alt="" /> {tag}</div>
                            </span>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card;
