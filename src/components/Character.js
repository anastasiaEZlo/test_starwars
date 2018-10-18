import React, {Component} from 'react';
import '../assets/App.scss';

class Character extends Component {

    render() {
        const { data} = this.props;
        return (
            <div className='character'>
                <div className='img-container'>
                    <img src={data.media[0].src} />
                </div>
                <div >
                    <div className='name'>{data.name}</div>
                    <div className='cast-name'>{data.castName}</div>
                </div>
            </div>
        );
    }
}


export default Character;