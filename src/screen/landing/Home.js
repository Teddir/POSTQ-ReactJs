import React, { useState } from 'react'
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
// import { Link } from 'react-router-dom';
import Load from './landing';
import { addProject } from '../../services/endpoint/project';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
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
        console.log('sasasa',title, desc, avatar[0].name)
        addProject(title, avatar[0], desc, null)
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
                    marginTop:10
                }}>
                    <p style={{
                        fontWeight: 'bold',
                        fontSize: 40,
                        marginBottom: 20,
                    }}>Mission From Mr Eka</p>
                </div>
                <Fab style={{
                    position: 'absolute',
                    bottom: 10,
                    right: 20,
                    float:'left'
                    
                }} color="secondary" aria-label="add" onClick={handleOpenModal}>
                    <AddIcon />
                </Fab>
                    <>
                    <div style={{flexGrow:1}}>
                    <Grid container spacing={3}>
                    {project.dataProject.map((item) => {
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
                                    title={item.title}
                                    subheader={item.created_at}
                                    />
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
                                            <p style={{fontSize:12, fontWeight:'bold'}}>Dilihat: 1</p>
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
                        onChange={(a) => setAvatar(a.target.files)}
                        />
                    </div>
                    <div style={{marginTop:12}}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Pilih Bahasa</FormLabel>
                            <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value="php"
                                control={<Checkbox color="primary" />}
                                label="Php"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="javascript"
                                control={<Checkbox color="primary" />}
                                label="Javascript"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="dll"
                                control={<Checkbox color="primary" />}
                                label="dll"
                                labelPlacement="end"
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
        </div>
        
    )
}

export default Home