import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Button, Container } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import { useHistory } from "react-router-dom";
import MenuItem from '@material-ui/core/MenuItem';
import Load from './landing';
import { addProject, deleteProject, getProject, updateSee } from '../../services/endpoint/project';
import { CallReceived } from '@material-ui/icons';

const Home = () => {
    const { project } = useSelector((state) => state)
    console.log(project);
    const [dataUpdate, setDataUpdate] = useState(null);
    const [title, setTitle] = useState(null);
    const [avatar, setAvatar] = useState('');
    const [desc, setDesc] = useState(null);
    const [bahasa_id, setBahasa_id] = useState(null);
    const [link, setLink] = useState(null);
    const [loading, setLoading] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [openModalUpdate, setOpenModalUpdate] = useState(false);
    const [search, setSearch] = useState('');
    const [dataSearch, setDataSearch] = useState([]);
    // const open = Boolean(anchorEl);
    const history = useHistory();

    const data = project.dataProject

    var listBulan = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    var now = new Date()
    var bulan = now.getMonth()
    const timeNow = (now.getDate() + "-" + listBulan[bulan] + "-" + now.getFullYear()).toString();

    const colorNew = `0 5px 20px -5px ` + `rgba(${RandomColor()}, ${RandomColor()}, ${RandomColor()})` ?? '0 5px 20px -5px rgba(0,0,0,0.3)'

    function RandomColor() {
        return Math.floor(Math.random() * 255)
    }

    const getData = () => {
        getProject()
    }

    useEffect(() => {
        getData()
        itemSearch()
    }, [loading, search]);

    // useEffect(() => {
    //     itemSearch()
    // }, [search])

    const handleOpenModal = () => {
        const kode = prompt('Masukan kode untuk melanjutkan !!')
        if (kode === 'wadidaw') {
            setOpenModal(true);
        } else if (kode === '') {
            alert('Maaf akses tidak diterima')
        } else {
            alert('Maaf akses tidak diterima')
        }
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };



    const handleModalUpdate = (item) => {
        setDataUpdate(item)
        setOpenModalUpdate(true)
    }

    const handleCloseModalUpdate = () => {
        setOpenModalUpdate(false);
    }

    const handleUpdateProject = (item) => {
        handleModalUpdate();
        // console.log(item)

    }

    const handleImage = (event) => {
        setAvatar({
            currentFile: event.target.files[0],
            previewImage: URL.createObjectURL(event.target.files[0]),
            progress: 0,
            message: ""
        })
    }

    const handleShow = (item) => {
        console.log('showMe')
        // pindah screen
        history.push(item.link)

        // tambah penonton
        const show = parseInt(item.see) + 1

        //update penonton
        updateSee(item.id, show)
            .then((res) => {
                console.log(res)
            })
    }

    const handleAddProject = () => {
        setLoading(true)
        console.log('sasasa', title, desc, bahasa_id, link, avatar)
        addProject(title, desc, 0, bahasa_id, link, avatar)
            .then((res) => {
                console.log('ini res', res)
                setOpenModal(false);
                setLoading(false)
            })
    }

    const handleDeleteProject = (item) => {
        console.log(item)
        const kode = prompt('Masukan kode untuk melanjutkan !!')
        if (kode === 'wadidaw') {
            setLoading(true)
            deleteProject(item.id)
                .then((res) => {
                    console.log(res)
                    setAnchorEl(null);
                    setLoading(false)
                })
        } else if (kode === '') {
            alert('Maaf akses tidak diterima')
        } else {
            alert('Maaf akses tidak diterima')
        }
    }

    const searchInput = (item) => {
        console.log(item.target.value)
        const vSearch = item.target.value
        setSearch(vSearch)
    }

    const itemSearch = () => {
        console.log(search)
        const result = data?.filter((dataFilter) => {
            if (search === '') {
                return dataFilter
            } else {
                return (
                    // dataFilter.title.toLowerCase().includes(search.toLowerCase()) || dataFilter.desc.toLowerCase().includes(search.toLowerCase())
                    dataFilter.title.includes(search) || dataFilter.desc.includes(search)
                )
            }
        })
        setDataSearch(result);
        console.log(dataSearch)
    }





    // useEffect(() => {                                            //------------------> no react - redux
    //     setLoading(true)
    //     fetch('http://blieka.herokuapp.com/api/projects')
    //     .then((res) => {
    //         if (res.status === 200) {
    //             setData(res.data);
    //             return res.json();
    //         }
    //         throw res;
    //     })
    //     .then(res => {
    //         console.log('ini data', res.data);
    //         getProject();
    //         setData(res.data);
    //     })
    //     .catch((err) => err.message)
    //     .finally(() => {
    //         setLoading(false);
    //     });
    // },[])

    return (
        <div style={{ marginRight: '10%', marginLeft: '10%' }}>
            {project ? (
                <Container >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: 10,
                    }}>
                        <div style={{
                            marginBottom: 50
                        }}>
                            <p style={{
                                fontWeight: 'bold',
                                fontSize: 30,
                                marginBottom: 20,
                                textAlign: 'center'
                            }}>Proyek Mr Eka</p>
                            <p style={{
                                fontSize: 20,
                                marginBottom: 20,
                                textAlign: 'center'
                            }}>Hallo pak Eka & staf, Selamat datang di dalam web sederhana saya, <br /> kritik dan sarannya dipersilahkan.</p>
                            <TextField
                                id="outlined-secondary"
                                label="Search Proyek"
                                variant="outlined"
                                placeholder="Tugas Apa Aja"
                                style={{ width: '100%' }}
                                onChange={(a) => searchInput(a)}
                            />
                        </div>
                    </div>
                    <Fab style={{
                        position: 'fixed',
                        bottom: 20,
                        right: 5,
                        float: 'left'

                    }} color="secondary" aria-label="add" onClick={handleOpenModal}>
                        <AddIcon />
                    </Fab>
                    <>
                        <div style={{ flexGrow: 1 }}>
                            <Grid container spacing={8}>
                                {dataSearch?.length > 0 ?
                                    <>
                                        {dataSearch.map((item) => {
                                            return (
                                                <Grid key={item.id} item xs={4} spacing={3}>
                                                    <Card maxHeight="345" style={{
                                                        padding: 1,
                                                        boxShadow: item.created_at >= timeNow ? colorNew : '0 5px 20px -5px rgba(0,0,0,0.3)',
                                                        "&:hover": {
                                                            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
                                                        },
                                                    }}>
                                                        <div onClick={() => handleShow(item)}>
                                                            <CardMedia
                                                                style={{ height: 100, paddingTop: '10%', }}
                                                                image={item.avatar}
                                                                title="image"
                                                            />
                                                        </div>
                                                        <CardHeader
                                                            avatar={
                                                                <Avatar aria-label="recipe" backgroundColor="red">
                                                                    T
                                                        </Avatar>
                                                            }
                                                            action={
                                                                <IconButton onClick={handleClick} aria-label="settings">
                                                                    <MoreVertIcon />
                                                                </IconButton>
                                                            }
                                                            title={item.title}
                                                            subheader={item.created_at}
                                                        />
                                                        <Menu
                                                            id="simple-menu"
                                                            anchorEl={anchorEl}
                                                            keepMounted
                                                            open={Boolean(anchorEl)}
                                                            onClose={handleClose}
                                                        >
                                                            <div onClick={() => handleUpdateProject(item)}>
                                                                <MenuItem >Update</MenuItem>
                                                            </div>
                                                            <div onClick={() => handleDeleteProject(item)}>
                                                                <MenuItem >Delete</MenuItem>
                                                            </div>
                                                        </Menu>
                                                        <div onClick={() => handleShow(item)}>
                                                            <CardContent>
                                                                <Typography variant="body2" color="textSecondary" component="p">
                                                                    {item.desc}
                                                                </Typography>
                                                            </CardContent>
                                                            <CardActions disableSpacing>
                                                                <Button style={{ height: 15, fontSize: 10 }} variant="contained">{item.bahasas[0].name}</Button>
                                                                <div style={{
                                                                    flex: 1,
                                                                    textAlign: 'right',
                                                                }}>
                                                                    <p style={{ fontSize: 12, fontWeight: 'bold' }}>Dilihat: {item.see ? item.see : '0'}</p>
                                                                </div>
                                                            </CardActions>
                                                        </div>
                                                    </Card>
                                                </Grid>
                                            )
                                        })}
                                    </>
                                    :
                                    (
                                        <>
                                            {data.map((item) => {
                                                return (
                                                    <Grid key={item.id} item xs={4} spacing={3}>
                                                        <Card maxHeight="345" style={{
                                                            padding: 1,
                                                            boxShadow: item.created_at >= timeNow ? colorNew : '0 5px 20px -5px rgba(0,0,0,0.3)',
                                                            "&:hover": {
                                                                boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
                                                            },
                                                        }}>
                                                            <div onClick={() => handleShow(item)}>
                                                                <CardMedia
                                                                    style={{ height: 100, paddingTop: '10%', }}
                                                                    image={item.avatar}
                                                                    title="image"
                                                                />
                                                            </div>
                                                            <CardHeader
                                                                avatar={
                                                                    <Avatar aria-label="recipe" backgroundColor="red">
                                                                        T
                                                        </Avatar>
                                                                }
                                                                action={
                                                                    <IconButton onClick={handleClick} aria-label="settings">
                                                                        <MoreVertIcon />
                                                                    </IconButton>
                                                                }
                                                                title={item.title}
                                                                subheader={item.created_at}
                                                            />
                                                            <Menu
                                                                id="simple-menu"
                                                                anchorEl={anchorEl}
                                                                keepMounted
                                                                open={Boolean(anchorEl)}
                                                                onClose={handleClose}
                                                            >
                                                                <div onClick={() => handleUpdateProject(item)}>
                                                                    <MenuItem >Update</MenuItem>
                                                                </div>
                                                                <div onClick={() => handleDeleteProject(item)}>
                                                                    <MenuItem >Delete</MenuItem>
                                                                </div>
                                                            </Menu>
                                                            <div onClick={() => handleShow(item)}>
                                                                <CardContent>
                                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                                        {item.desc}
                                                                    </Typography>
                                                                </CardContent>
                                                                <CardActions disableSpacing>
                                                                    <Button style={{ height: 15, fontSize: 10 }} variant="contained">{item.bahasas[0].name}</Button>
                                                                    <div style={{
                                                                        flex: 1,
                                                                        textAlign: 'right',
                                                                    }}>
                                                                        <p style={{ fontSize: 12, fontWeight: 'bold' }}>Dilihat: {item.see ? item.see : '0'}</p>
                                                                    </div>
                                                                </CardActions>
                                                            </div>
                                                        </Card>
                                                    </Grid>
                                                )
                                            })}
                                        </>
                                    )
                                }

                            </Grid>
                        </div>
                    </>
                </Container>
            ) : <Load />
            }
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                open={openModal}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <div style={{
                        backgroundColor: 'white',
                        height: '75%',
                        width: '50vh',
                        elevation: 30
                    }}>
                        <p style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold', marginTop: 10 }}>Form Add Project</p>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 12 }}>
                            <form name="itemAdd" onSubmit={handleAddProject} style={{ width: '40vh' }} noValidate autoComplete="off">
                                <div>
                                    <TextField
                                        style={{ width: '40vh' }}
                                        id="outlined-basic"
                                        label="Link"
                                        variant="outlined"
                                        name="link"
                                        value={link}
                                        onChange={(e) => setLink(e.target.value)}
                                    />
                                </div>
                                <div style={{ marginTop: 12 }}>
                                    <TextField
                                        style={{ width: '40vh' }}
                                        id="outlined-basic"
                                        label="Title / Judul"
                                        variant="outlined"
                                        name="title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <div style={{ marginTop: 12 }}>
                                    <TextField
                                        style={{ width: '40vh' }}
                                        id="outlined-multiline-static"
                                        label="Description"
                                        multiline
                                        rows={4}
                                        variant="outlined"
                                        name="desc"
                                        onChange={(d) => setDesc(d.target.value)}
                                    />
                                </div>
                                <div style={{ marginTop: 12 }}>
                                    <TextField
                                        type="file"
                                        style={{ width: '40vh' }}
                                        id="outlined-basic"
                                        variant="outlined"
                                        name="avatar"
                                        onChange={(a) => handleImage(a)}
                                    />
                                </div>
                                <div style={{ marginTop: 12 }}>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">Pilih Bahasa</FormLabel>
                                        <FormGroup aria-label="position" row>
                                            <FormControlLabel
                                                value={1}
                                                control={<Checkbox color="primary" />}
                                                label="Php"
                                                labelPlacement="end"
                                                onChange={(a) => setBahasa_id(a.target.value)}
                                            />
                                            <FormControlLabel
                                                value={2}
                                                control={<Checkbox color="primary" />}
                                                label="Javascript"
                                                labelPlacement="end"
                                                onChange={(a) => setBahasa_id(a.target.value)}
                                            />
                                            <FormControlLabel
                                                value={3}
                                                control={<Checkbox color="primary" />}
                                                label="dll"
                                                labelPlacement="end"
                                                onChange={(a) => setBahasa_id(a.target.value)}
                                            />
                                        </FormGroup>
                                    </FormControl>
                                </div>
                                <div
                                    style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
                                    <Button disabled={loading} variant="outlined" color="primary" onClick={handleAddProject}>
                                        Simpan
                        </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Fade>
            </Modal>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                open={openModalUpdate}
                onClose={handleCloseModalUpdate}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                {dataUpdate ? (
                    <>
                        <Fade in={openModalUpdate}>
                            <div style={{
                                backgroundColor: 'white',
                                height: '60vh',
                                width: '50vh',
                                elevation: 30
                            }}>
                                <p style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold', marginTop: 5 }}>Form Update Project</p>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 12 }}>
                                    <form name="itemAdd" onSubmit={handleUpdateProject(dataUpdate)} style={{ width: '40vh' }} noValidate autoComplete="off">
                                        <div>
                                            <TextField
                                                style={{ width: '40vh' }}
                                                id="outlined-basic"
                                                label="Title / Judul"
                                                variant="outlined"
                                                name="title"
                                                value={dataUpdate.title}
                                                onChange={(e) => setTitle(e.target.value)}
                                            />
                                        </div>
                                        <div style={{ marginTop: 12 }}>
                                            <TextField
                                                style={{ width: '40vh' }}
                                                id="outlined-multiline-static"
                                                label="Description"
                                                multiline
                                                rows={4}
                                                variant="outlined"
                                                name="desc"
                                                value={dataUpdate.desc}
                                                onChange={(d) => setDesc(d.target.value)}
                                            />
                                        </div>
                                        <div style={{ marginTop: 12 }}>
                                            <TextField
                                                type="file"
                                                style={{ width: '40vh' }}
                                                id="outlined-basic"
                                                variant="outlined"
                                                name="avatar"
                                                value={dataUpdate.avatar}
                                                onChange={(a) => handleImage(a)}
                                            />
                                        </div>
                                        <div style={{ marginTop: 12 }}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Pilih Bahasa</FormLabel>
                                                <FormGroup aria-label="position" row>
                                                    <FormControlLabel
                                                        value={bahasa_id}
                                                        control={<Checkbox color="primary" />}
                                                        label="Php"
                                                        labelPlacement="end"
                                                        onChange={(a) => setBahasa_id(a.target.value)}
                                                    />
                                                    <FormControlLabel
                                                        value={bahasa_id}
                                                        control={<Checkbox color="primary" />}
                                                        label="Javascript"
                                                        labelPlacement="end"
                                                        onChange={(a) => setBahasa_id(a.target.value)}
                                                    />
                                                    <FormControlLabel
                                                        value={bahasa_id}
                                                        control={<Checkbox color="primary" />}
                                                        label="dll"
                                                        labelPlacement="end"
                                                        onChange={(a) => setBahasa_id(a.target.value)}
                                                    />
                                                </FormGroup>
                                            </FormControl>
                                        </div>
                                        <div
                                            style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
                                            <Button variant="outlined" color="primary" onClick={handleUpdateProject}>
                                                Simpan
                                </Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Fade>
                    </>
                ) : null}
            </Modal>
        </div >

    )

}

export default Home