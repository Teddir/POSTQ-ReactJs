import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Button, Container } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
// import { Link } from 'react-router-dom';
import Load from './landing';
import { addProject } from '../../services/endpoint/project';
// import Coba from '../../assets/image/1.png';

const Home = () => {
    const { project } = useSelector((state) => state)
    const [title, setTitle] = useState(null);
    const [avatar, setAvatar] = useState(null);
    const [desc, setDesc] = useState(null);
    const [loading, setLoading] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const open = Boolean(anchorEl);

    const handleOpenModal = () => {
        setOpenModal(true);
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

    const handleAddProject = () => {
        setLoading(true)
        addProject(title, avatar, desc, null)
        .then((res)=> {
            console.log(res)
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
                    marginTop: 50
                }}>
                    <p style={{
                        fontWeight: 'bold',
                        fontSize: 40,
                        marginBottom: 20,
                    }}>Mission From Mr Eka</p>
                </div>
                    <>
                    {project.dataProject.map((item) => {
                        return (
                            <div key={item.id} style={{
                                flexGrow: 1,
                            }}>
                            <Grid container spacing={3}>

                                <Grid item xs={3}>
                                    <Card maxHeight="345" style={{padding: 1}}>
                                    <CardHeader 
                                    avatar={
                                        <Avatar aria-label="recipe" backgroundColor="red">
                                        T
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton 
                                        aria-label="more"
                                        aria-controls="long-menu"
                                        aria-haspopup="true"
                                        onClick={handleClick}>
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title={item.title}
                                    subheader={item.created_at}
                                    />
                                    <Menu
                                    id="long-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={open}
                                    onClose={handleClose}
                                    >
                                        {/* <Link to="/AddProject"> */}
                                            <MenuItem  onClick={handleOpenModal}>
                                            Add Project
                                            </MenuItem>
                                        {/* </Link> */}
                                    </Menu>
                                    <CardMedia
                                        style={{height: 100, paddingTop: '10%' }}
                                        image={item.avatar}
                                        title="image"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {item.desc}
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="add to favorites">
                                        <FavoriteIcon color="action"/>
                                        </IconButton>
                                        <Button style={{height:15, fontSize:10}} variant="contained">css</Button>
                                    </CardActions>
                                    </Card>
                                </Grid>

                            </Grid>
                        </div>
                        )
                    })}
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
                    height: '50vh',
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
                        onChange={(e) => setTitle(e)}
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
                        onChange={(d) => setDesc(d)}
                        />
                    </div>
                    <div style={{marginTop:12}}>
                        <TextField 
                        type="file" 
                        style={{width:'40vh'}} 
                        id="outlined-basic"  
                        variant="outlined" 
                        name="avatar"
                        onChange={(a) => setAvatar(a)}
                        />
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
        </div>
        
    )
}

export default Home