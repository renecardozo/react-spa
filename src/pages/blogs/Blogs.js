import {
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

import PostOptions from './PostOptions';
import CreatePostFormDialog from './CreatePost';

function Blogs() {
  const [isOpen, setIsOpen] = useState(false);
  const [post, setPost] = useState('');
  
  const openCreatePostDialog = () => {
    setIsOpen(true);
  }
  const responseHandlerDialog = (response) => {
    setIsOpen(false);
    setPost(response);
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
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary='Title - Post'
              secondary={
                <Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Name - Ali Connors
                  </Typography>
                  {` — I'll be in your neighborhood doing errands this…`}
                </Fragment>
              }
            />
            <PostOptions />
          </ListItem>
          <Divider variant="inset" component='li' />
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