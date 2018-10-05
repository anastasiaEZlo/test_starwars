import React, {Component} from 'react';
import '../assets/App.css';

class Character extends Component {

    render() {
        const { data} = this.props;
        return (
            <div className='character'>
                <div className='img-container'>
                    <img src={data.media[0].src} />
                </div>
            </div>
        );
    }
}


export default Character;