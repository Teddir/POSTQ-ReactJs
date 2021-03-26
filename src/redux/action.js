import { removeToken } from '../services/storage/Token';

const setUser = (user) => {
    return {
        type: 'SET_USER',
        data: user
    }
}

const clearToken = () => {
    removeToken();
    return {
        type: 'CLEAR_TOKEN'
    }
}

const changeToken = (data) => {
    return {
        type: 'CHANGE_TOKEN',
        data: data
    }
}


export { setUser, clearToken, changeToken }