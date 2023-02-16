import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  CardMedia } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect, useState} from 'react';
import axios from 'axios';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
function ViewPost() {

  // STATES
  const {id} = useParams();
  const [post, setPost] = useState({});

  // INNER FUNCS
  const getPost = async () => {
    const {data} = await axios.get(`http://localhost:3200/posts/${id}`);
    setPost(data);
  }

  // HOOKS
  useEffect(() => {
    getPost();
  }, []);

  return (
    <Grid container spacing={2} sx={{marginTop: '10%'}}>
       <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.author}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.text}
            </Typography>
          </CardContent>
          <CardActions sx={{
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'space-between'
          }}>
            <ThumbUpIcon />
            <ThumbDownAltIcon />
          </CardActions>
        </Card>
       </Grid>
    </Grid>
  );
}

export default ViewPost;