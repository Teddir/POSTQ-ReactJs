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
import MenuItem from '@material-ui/core/MenuItem';
// import { Link } from 'react-router-dom';
import Load from './landing';
import { addProject, deleteProject, getProject, updateProject } from '../../services/endpoint/project';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import Coba from '../../assets/image/1.png';

const handleDeleteProject = (item) => {
    deleteProject(item)
    .then((res) => {
        console.log(res)
    })
}

const Home = () => {
    const { project } = useSelector((state) => state)
    console.log(project);
    const [dataUpdate, setDataUpdate] = useState(null);
    const [title, setTitle] = useState(null);
    const [avatar, setAvatar] = useState('');
    const [desc, setDesc] = useState(null);
    const [bhs, setBhs] = useState(null);
    const [see, setSee] = useState(1);
    const [loading, setLoading] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [openModalUpdate, setOpenModalUpdate] = useState(false);
    const open = Boolean(anchorEl);

    const data = project.dataProject
    
    const getData = () => {
        getProject()
    }

    useEffect(() => {
        getData()
    },[]);

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

    const handleAddProject = () => {
        setLoading(true)    
        console.log('sasasa',title, desc, avatar)
        addProject(title, desc, null, bhs, avatar)
        .then((res)=> {
            console.log('ini res' ,res)
            setLoading(false)
        })
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
        <div >
            {project ? (
            <Container >
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop:10
                }}>
                    <p style={{
                        fontWeight: 'bold',
                        fontSize: 40,
                        marginBottom: 20,
                    }}>Mission From Mr Eka</p>
                </div>
                <Fab style={{
                    position: 'fixed',
                    bottom: 20,
                    right: 5,
                    float:'left'
                    
                }} color="secondary" aria-label="add" onClick={handleOpenModal}>
                    <AddIcon />
                </Fab>
                    <>
                    <div style={{flexGrow:1}}>
                    <Grid container spacing={3}>
                    {data.map((item) => {
                                return (
                                <Grid key={item.id} item xs={6} sm={3}>
                                    <Card maxHeight="345" style={{padding: 1}}>
                                    <CardMedia
                                        style={{height: 100, paddingTop: '10%' }}
                                        image={item.avatar}
                                        title="image"
                                    />
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
                                    <div onClick={handleUpdateProject(item)}>
                                        <MenuItem >Update</MenuItem>
                                    </div>
                                    {/* <div onChange={handleDeleteProject(item.id)}> */}
                                        <MenuItem >Delete</MenuItem>
                                    {/* </div> */}
                                    </Menu>
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {item.desc}
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <Button style={{height:15, fontSize:10}} variant="contained">css</Button>
                                        <div style={{
                                            flex:1,
                                            textAlign:'right',
                                        }}>
                                            <p style={{fontSize:12, fontWeight:'bold'}}>Dilihat: {see}</p>
                                        </div>
                                    </CardActions>
                                    </Card>
                                </Grid>
                                )
                            })}
                    </Grid>
                    </div>
                    </>
            </Container>
            ): <Load />}
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
                    height: '60vh',
                    width: '50vh',
                    elevation:30
                }}>
                    <p style={{display:'flex', justifyContent:'center', fontWeight:'bold', marginTop:5}}>Form Add Project</p>
                    <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', marginTop:12}}>
                    <form name="itemAdd" onSubmit={handleAddProject} style={{width: '40vh'}} noValidate autoComplete="off">
                    <div>
                        <TextField 
                        style={{width:'40vh'}} 
                        id="outlined-basic" 
                        label="Title / Judul" 
                        variant="outlined" 
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div style={{marginTop:12}}>
                        <TextField
                        style={{width: '40vh'}}
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        variant="outlined"
                        name="desc"
                        onChange={(d) => setDesc(d.target.value)}
                        />
                    </div>
                    <div style={{marginTop:12}}>
                        <TextField 
                        type="file" 
                        style={{width:'40vh'}} 
                        id="outlined-basic"  
                        variant="outlined" 
                        name="avatar"
                        onChange={(a) => handleImage(a)}
                        />
                    </div>
                    <div style={{marginTop:12}}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Pilih Bahasa</FormLabel>
                            <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value={bhs}
                                control={<Checkbox color="primary" />}
                                label="Php"
                                labelPlacement="end"
                                onChange={(a) => setBhs(a.target.value)}
                            />
                            <FormControlLabel
                                value={bhs}
                                control={<Checkbox color="primary" />}
                                label="Javascript"
                                labelPlacement="end"
                                onChange={(a) => setBhs(a.target.value)}
                            />
                            <FormControlLabel
                                value={bhs}
                                control={<Checkbox color="primary" />}
                                label="dll"
                                labelPlacement="end"
                                onChange={(a) => setBhs(a.target.value)}
                            />
                            </FormGroup>
                        </FormControl>
                    </div>
                    <div 
                    style={{display:'flex', justifyContent: 'center', marginTop: 10}}>
                        <Button variant="outlined" color="primary" onClick={handleAddProject}>
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
                            elevation:30
                        }}>
                            <p style={{display:'flex', justifyContent:'center', fontWeight:'bold', marginTop:5}}>Form Update Project</p>
                            <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', marginTop:12}}>
                            <form name="itemAdd" onSubmit={handleUpdateProject(dataUpdate)} style={{width: '40vh'}} noValidate autoComplete="off">
                            <div>
                                <TextField 
                                style={{width:'40vh'}} 
                                id="outlined-basic" 
                                label="Title / Judul" 
                                variant="outlined" 
                                name="title"
                                value={dataUpdate.title}
                                onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div style={{marginTop:12}}>
                                <TextField
                                style={{width: '40vh'}}
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
                            <div style={{marginTop:12}}>
                                <TextField 
                                type="file" 
                                style={{width:'40vh'}} 
                                id="outlined-basic"  
                                variant="outlined" 
                                name="avatar"
                                value={dataUpdate.avatar}
                                onChange={(a) => handleImage(a)}
                                />
                            </div>
                            <div style={{marginTop:12}}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Pilih Bahasa</FormLabel>
                                    <FormGroup aria-label="position" row>
                                    <FormControlLabel
                                        value={bhs}
                                        control={<Checkbox color="primary" />}
                                        label="Php"
                                        labelPlacement="end"
                                        onChange={(a) => setBhs(a.target.value)}
                                    />
                                    <FormControlLabel
                                        value={bhs}
                                        control={<Checkbox color="primary" />}
                                        label="Javascript"
                                        labelPlacement="end"
                                        onChange={(a) => setBhs(a.target.value)}
                                    />
                                    <FormControlLabel
                                        value={bhs}
                                        control={<Checkbox color="primary" />}
                                        label="dll"
                                        labelPlacement="end"
                                        onChange={(a) => setBhs(a.target.value)}
                                    />
                                    </FormGroup>
                                </FormControl>
                            </div>
                            <div 
                            style={{display:'flex', justifyContent: 'center', marginTop: 10}}>
                                <Button variant="outlined" color="primary" onClick={handleUpdateProject}>
                                Simpan
                                </Button>
                            </div>
                            </form>
                            </div>
                        </div>
                        </Fade>
                    </>
                ):null}
            </Modal>
        </div>
        
    )
}

export default Home