import React from 'react';
import '../assets/App.scss';

const Movie = ({handleClick, data, id}) => {
    const style = {'marginTop': 400 - (data.rating * 30) + 'px'};
    const getDate = (date) => {
        return new Date(date).getDate() + ', ' +new Date(date).getFullYear()
    }
    return (
        <div className='item'>
            <div className='line'/>
            <div className='movie' style={style} onClick={() => handleClick(id)}>
                <img src={data.media[0].src}/>
                <div className='title-movie'>{data.title}</div>
            </div>
            <div className='year'>{getDate(data.release)}</div>
        </div>
    );
}


export default Movie;