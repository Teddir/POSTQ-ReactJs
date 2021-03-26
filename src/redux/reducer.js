import { combineReducers } from 'redux'

const tokenReducer = (state = '', action) => {
    switch (action.type) {
        case 'CHANGE_TOKEN':
            return action.data
        case 'CLEAR_TOKEN':
            return action.data
        default:
            return state
    }
}

const userReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_USER':
            return action.data
        default:
            return state
    }
}

const projectReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_PROJECT':
            return action.data
        case 'ADD_PROJECT':
            return action.data
        default:
            return state
    }
}

export default combineReducers({
    user: userReducer,
    token: tokenReducer,
    project: projectReducer,
})