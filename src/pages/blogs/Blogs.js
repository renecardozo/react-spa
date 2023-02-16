import {
  useEffect,
  useState,
  Fragment
} from 'react';

import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Button} from '@mui/material';
  import axios from 'axios';

import PostOptions from './PostOptions';
import CreatePostFormDialog from './CreatePost';
import { useAppContext } from '../../context/Hooks';
import { getSuccessGettingAllPost } from '../../state/actions';

function Blogs() {

  // STATES
  const [isOpen, setIsOpen] = useState(false);
  const {state: {postList}, dispatch} = useAppContext();
  console.log(postList);
  // HOOKS
  useEffect(() => {
    const getPosts = async () => {
      const {data} = await axios.get('http://localhost:3200/posts');
      dispatch(getSuccessGettingAllPost(data))
     }
    getPosts();
    console.log('Use Effect from Blogs page?')
  }, []);

  const openCreatePostDialog = () => {
    setIsOpen(true);
  }
  const responseHandlerDialog = () => {
    setIsOpen(false);
  }

  return (
    <Grid container spacing={2} sx={{ marginTop: '10%' }}>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography gutterBottom variant='h5' component='div'>
          LEST SEE THE POSTS!
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <List
          sx={{ width: '100%', maxWidth: '60%', bgcolor: 'background.paper' }}
        >
          {Array.isArray(postList) && postList.map(post => (
            <div key={post.id}>
              <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                  <Avatar alt='Avatart' src='/static/images/avatar/1.jpg' />
                </ListItemAvatar>
                <ListItemText
                  primary={post.title || 'Empty'}
                  secondary={
                    <Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component='span'
                        variant='body2'
                        color='text.primary'
                      >
                        {post.author}
                      </Typography>
                      - {post.text}
                    </Fragment>
                  }
                />
                <PostOptions post={post}/>
              </ListItem>
              <Divider variant='inset' component='li'/>
            </div>
          ))
          }
        </List>
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant='contained' onClick={openCreatePostDialog}>Add a Post</Button>
      </Grid>
      {isOpen && <CreatePostFormDialog isOpen={isOpen} responseHandlerDialog={responseHandlerDialog}/>}
    </Grid>
  );
}

export default Blogs;