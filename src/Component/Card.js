import React from 'react';
import './card.css';

export const Card = ({name , desc, address, mail, phone, username}) => {
  return (
    <div className='container'>
        <div className='wrapper'>
            <div className='name'>
                <h1>{name}</h1>
            </div>
            <div className='desc'>
                <p>{desc}</p>
            </div>
            <div className='generalInfo'>
                <h1 className='general'>General Info</h1>
                <div className='infos'>
                    <p className='eachInfo'>username:</p>
                    <p className='eachDetails'>{username}</p>
                </div>
                <div className='infos'>
                    <p className='eachInfo'>Address:</p>
                    <p className='eachDetails'>{address}</p>
                </div>
                <div className='infos'>
                    <p className='eachInfo'>Email:</p>
                    <p className='eachDetails'>{mail}</p>
                </div>
                <div className='infos'>
                    <p className='eachInfo'>Phone:</p>
                    <p className='eachDetails'>{phone}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
