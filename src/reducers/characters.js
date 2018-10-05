const initialState = {
    listForModal: []
}

const characters = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CHARACTER':
            let newList = state.listForModal
            newList.push(action.character)
            return {...state, listForModal: newList}
        case 'CLEAR_CHARACTERS_LIST_FOR_MODAL':
            return {...state, listForModal: []}
        default:
            return state
    }
}

export default characters