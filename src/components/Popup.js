import React from 'react';
import '../assets/App.css';
import CharactersList from '../containers/CharactersList'

const Popup = ({close, data}) => {
    return (
        <div className='popup'>
            <button className='close' onClick={close}>X</button>
            <img src={data.media[0].src}/>
            <h2>{data.title}</h2>
            <CharactersList cast={data.cast}/>
        </div>
    );
}


export default Popup;