const storeToken = async (token) => {
    try {
        localStorage.setItem('token', token)
    } catch (error) {
        console.log(error)
    }
}

const getToken = async (token) => {
    try {
        const value = await localStorage.getItem(token)
        if (value !== null) {
            return value
        }
    } catch (error) {
        console.log(error)
    }
}

const removeToken = async () => {
    try {
        localStorage.removeItem('token');
        console.log('Token is Deleted')
    } catch (error) {
        console.log(error)
    }
}

export {storeToken, getToken, removeToken}