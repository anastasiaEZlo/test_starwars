import {request} from 'graphql-request'

export const addCharacter = (data) => {
    return {
        type: 'ADD_CHARACTER',
        character: data.character
    }
}
const query = (id) => `{
  character(id: "${id}") {
    name
    castName
    media {
      type
      src
    }
  }
}
`;


export const getCharacter = (id) => {
    return dispatch => {

        request('http://starwars.asteriainc.se/graphql', query(id))
            .then(res => {
                dispatch(addCharacter(res));
            })
    };
};

export const clearList  = () => {
    return {
        type: 'CLEAR_CHARACTERS_LIST_FOR_MODAL'
    }
}