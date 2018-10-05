import {request} from 'graphql-request'

export const uploadMovies = (data) => {
    return {
        type: 'UPLOAD_MOVIES',
        movies: data.movies.items
    }
}
const query = `{
        movies {
            items {
              title
              rating
              release
              
                    media {
                      type
                      src
                    }
                    cast {
                      id
                    }
                    trivia {
                      universeTimeline
                    }
            } 
          }
    }`;


export const getMovies = () => {
    return dispatch => {

        request('http://starwars.asteriainc.se/graphql', query)
            .then(res => {
                dispatch(uploadMovies(res));
            })
    };
};