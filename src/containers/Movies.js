import React, {Component} from 'react';
import '../assets/App.scss';
import {getMovies} from '../actions/MoviesActions'
import { connect } from 'react-redux'
import Popup from "../components/Popup";
import Movie from "../components/Movie";

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
        let list = props.movies.sort(this.sortByYear);
        this.setState({ moviesList: list})
    }

    sortByYear(a, b) {
        let first = new Date(a.release).getFullYear();
        let second = new Date(b.release).getFullYear();
        return first - second;
    }

    handleClick(key) {
        this.setState({isShowPopup: true, currentMovie: this.state.moviesList[key]})
    }

    closePopup() {
        this.setState({isShowPopup: false})
    }

    render() {
        const {moviesList, currentMovie, isShowPopup} = this.state;

        return (
            <div className='movies'>
                {moviesList.length > 0 && moviesList.map((movie, index) => {
                    return <Movie key={index} id={index} data={movie} handleClick={this.handleClick}/>
                })}
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
