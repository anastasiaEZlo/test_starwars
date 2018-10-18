import React, {Component} from 'react';
import '../assets/App.scss';
import {getCharacter, clearList} from '../actions/CharacterActions'
import {connect} from 'react-redux'
import Character from '../components/Character'

class CharactersList extends Component {
    componentDidMount() {
        this.getCast();
    }

    getCast() {
        const {cast, addCharacterToList, clearList} = this.props;
        clearList();
        cast.forEach((id) => addCharacterToList(id.id))
    }

    render() {
        const {listForModal} = this.props.characters;

        return (
            <div className='cast-list'>
                <div className='title-cast'>cast</div>
                <div className='character-list'>
                    {listForModal.length > 0 && listForModal.map((character, index) => {
                        return <Character key={index} data={character}/>
                    })}

                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        characters: state.characters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCharacterToList: (id) => {
            dispatch(getCharacter(id))
        },
        clearList: () => {
            dispatch(clearList())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CharactersList)