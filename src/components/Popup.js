import React from 'react';
import '../assets/popup.scss';
import CharactersList from '../containers/CharactersList'

const Popup = ({close, data}) => {
    return (
        <div>
        <div className='popup'>
            <button className='close' onClick={close}>X</button>
            <img className='popup-top-image' alt='poster' src={data.media[0].src}/>
            <div className='popup-media'>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Q0CbN8sfihY" frameBorder="0"
                        allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
            <h2>{data.title}</h2>
            <div className='popup-info'>
                <div className='popup-container'>
                    <div className='small-text'>release</div>
                    <div className='content-text'>{new Date(data.release).getFullYear()}</div>
                </div>
                <div className='popup-container'>
                    <div className='small-text'>rating</div>
                    <div className='content-text'>{data.rating}</div>
                </div>
                <div className='popup-container'>
                    <div className='small-text'>length</div>
                    <div className='content-text'>2h23m</div>
                </div>
            </div>
            <div className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, assumenda autem blanditiis consequatur ducimus ea est facilis fugit nam natus necessitatibus nemo nostrum numquam officiis quae sunt tempora tenetur, voluptatibus?</div>
            <CharactersList cast={data.cast}/>
        </div>
        <div onClick={close} className='backdrop'></div>
        </div>
    );
}


export default Popup;