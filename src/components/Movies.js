import React, {Component} from 'react';
import '../assets/App.css';
import Timeline from 'react-visjs-timeline'
import {getMovies} from '../actions/MoviesActions'
import { connect } from 'react-redux'
import Popup from "./Popup";

class Movies extends Component {
    state = {
        moviesList: [],
        groups: [],
        isShowPopup: false,
        currentMovie: {}
    }
    componentDidMount() {
        this.props.initApp();
        this.handleClick = this.handleClick.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }

    componentWillReceiveProps(props, state) {
        let groups = []
        let list = props.movies.map((movie, index) => {
            groups.push({
                    content: movie.rating,
                    className: 'group'
                })
            return {
                ...movie,
                id: index,
                start: new Date(movie.release),
                content: `<div class="movie"> <img src=${movie.media[0].src} > <div class="title">${movie.title}</div> </div>`,
                group: index
            }
        })
        groups.sort((a, b) => parseFloat(b.content) - parseFloat(a.content))
        groups = groups.map((g, index) => { return { ...g, id: index} })
        this.setState({ moviesList: list, groups})
    }

    handleClick(e) {
        const id = e.items[0];
        this.setState({isShowPopup: true, currentMovie: this.state.moviesList[id]})
    }

    closePopup() {
        this.setState({isShowPopup: false})
    }

    render() {
        const {moviesList,groups, currentMovie, isShowPopup} = this.state;

        const options = {
            width: '100%',
            height: '100vh',
        }
        return (
            <div>
                {moviesList.length > 0 && <Timeline selectHandler={this.handleClick} groups={groups} items={moviesList} options={options}/>}
                {isShowPopup && <Popup data={currentMovie} close={this.closePopup}/>}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initApp: () => { dispatch(getMovies()) }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movies)
