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

export const addProject = (title, desc, like, bhs, avatar) => {
    // console.log('asasasas ====',avatar);
    const body = {
        title,
        desc,
        like,
        bhs,
    }
    if (avatar) {
        const data = new FormData();

        data.append('avatar', avatar.currentFile)

        Object.keys(body).forEach((key) => {
        data.append(key, body[key]);
        });

        return api('POST', '/projects/create', data, avatar.currentFile)
    }
}

export const updateProject = (title, desc, like, bhs, avatar, id) => {
    const body = {
        title,
        desc,
        like,
        bhs,
    }
    if (avatar) {
        const data = new FormData();

        data.append('avatar', avatar.currentFile)

        Object.keys(body).forEach((key) => {
        data.append(key, body[key]);
        });
        return api('POST', `/projects/update/${id}`, data, avatar.currentFile)
    }
}

export const deleteProject = (id) => {
    return api('DELETE', `/projects/delete/${id}`)
}
