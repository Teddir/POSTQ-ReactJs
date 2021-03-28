import { api } from '../Api/Api'
import { setProject } from '../../redux/projectAction'
import store from '../../redux/store'

export const getProject = () => {
    const data = {loading: true, dataProject: {}, error: false}
    // store.dispatch(setProject(data))
    return api('GET', '/projects')
    .then((res) => {
        if (res[0] === 200) {
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
        desc,
        like
    }
    if (avatar) {
        const data = new FormData();
        data.append('avatar', {
            name: avatar.name,
            type: avatar.type,
            uri: avatar.uri,
        });
        Object.keys(body).forEach((key) => {
        data.append(key, body[key]);
    });
    console.log(avatar)
    return api('POST', '/projects/create', data, avatar)
    } else {
        return api('POST', '/barangs/create', body)
    }
}