const movies = (state = [], action) => {
    switch (action.type) {
        case 'UPLOAD_MOVIES':
            return action.movies

        default:
            return state
    }
}

export default movies