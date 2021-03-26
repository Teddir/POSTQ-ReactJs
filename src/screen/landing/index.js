import React, { useState, useEffect} from 'react'
import { useSelector} from 'react-redux';
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
import ShareIcon from '@material-ui/icons/Share';
// import Coba from '../../assets/image/1.png';
import { getProject } from '../../services/endpoint/project';

export default function Index({navigation}) {
    const { project } = useSelector((state) => state);
    console.log(project);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
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
    //         setData(res.data);
    //     })
    //     .catch((err) => err.message)
    //     .finally(() => {
    //         setLoading(false);
    //     });
    // },[])

    const getData = () => {
        getProject()
    }

    useEffect(() => {
        const unsub = navigation.addListener('focus', () => {
        })
        getData()
        return unsub
    },[navigation])
    

    return (
        <div >
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
                {data ? (
                    <>
                    {data.map((item) => {
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
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title={item.title}
                                    subheader={item.created_at}
                                    />
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
                                            <FavoriteIcon />
                                            </IconButton>
                                            <IconButton aria-label="share">
                                            <ShareIcon />
                                            </IconButton>
                                        <div style={{marginLeft: 60}}>
                                        <Button  variant="outlined" color="primary">
                                        Bise di Cek 
                                        </Button>
                                        </div>
                                        
                                    </CardActions>
                                    </Card>
                                </Grid>

                            </Grid>
                        </div>
                        )
                    })}
                    </>
                ):null}
            </Container>
        </div>
        
    )
}
