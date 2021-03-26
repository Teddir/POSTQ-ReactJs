import { api } from '../Api/Api'
import { setProject } from '../../redux/projectAction'
import store from '../../redux/store'

export const getProject = () => {
    const data = {loading: true, dataProject: {}, error: false}
    store.dispatch(setProject(data))
    return api('GET', '/projects')
    .then((res) => {
        if (res.status === 200) {
            data.dataProject = res.data
            console.log('get data project', data.dataProject ? 'y' : 'n')
        } else {
            data.error = res.error
        }
    })
    .catch((err) => {(data.error = err)})
    .finally(() => {
        data.loading = false
        store.dispatch(setProject(data))
    })
}

export const addProject = (title, avatar, desc, like) => {
    const body = {
        title,
        avatar,
        desc,
        like
    }
    return api('POST', '/projects/create', body)
}