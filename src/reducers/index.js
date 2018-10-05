import { combineReducers } from 'redux'
import movies from './movies'
import characters from './characters'

export default combineReducers({
    characters,
    movies,
})