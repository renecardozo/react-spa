import {
  Menu,
  MenuItem,
  Alert,
  Snackbar
} from '@mui/material';

import {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CreatePostFormDialog from './CreatePost';
import ConfirmDialog from '../../components/dialogs/ConfirmDialog';
import axios from 'axios';
import { useAppContext } from '../../context/Hooks';
import { deletePost, editPost } from '../../state/actions';

const ITEM_HEIGHT = 48;



function PostOptions(props) {
  // STATES
  const [anchorEl, setAnchorEl] = useState(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [post, setPost] = useState(props.post);
  const [openNotification, setOpenNotification] = useState(false);
  const [messageNotification, setMessageNotification] = useState({});
  const { dispatch } = useAppContext();
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  // INNER FUNCS
  const deletePostFunc = async (id) => {
    try {
      const {data} = await axios.delete(`http://localhost:3200/posts/${id}`);
      console.log('post deleted', data);
      setMessageNotification({
        severity: 'success',
        message: 'Post delete successfully!'
      });
      dispatch(deletePost(id))
    } catch (error) {
      setMessageNotification({
        severity: 'error',
        message: 'Something goes wrong trying to delete the post!'
      })
    }
    
  }

  // HOOKS

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleViewPost = (e) => {
    setAnchorEl(null);
    navigate(`/view-post/${post.id}`);
  }
  const handleEditPost = (e) => {
    console.log('Edit post');
    setOpenEditDialog(true);
    setAnchorEl(null);
  }
  const onResponseEditPost = (response) => {
    if (response !== null) {
      setPost(response);
      console.log('User edit the post');
    }
    setOpenEditDialog(false);
  }

  const handleDeletePost = (e) => {
    setOpenDeleteDialog(true);
    setAnchorEl(null);
  }

  const onResponseDeletedPost = (response) => {
    if (response !== null) {
      console.log('User deleted the post');
      deletePostFunc(post.id)
    }
    setOpenDeleteDialog(false);
  }
  return (
    <div>
      <IconButton
        aria-label='more'
        id='long-button'
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id='long-menu'
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem
          key='View'
          onClick={handleViewPost}
        >
          View
        </MenuItem>
        <MenuItem
          key='Edit'
          onClick={handleEditPost}
        >
          Edit
        </MenuItem>
        <MenuItem
          key='Delete'
          onClick={handleDeletePost}
        >
          Delete
        </MenuItem>
      </Menu>
      {openEditDialog && <CreatePostFormDialog isOpen={openEditDialog} responseHandlerDialog={onResponseEditPost} editMode={true} postToEdit={post}/>}
      {openDeleteDialog && <ConfirmDialog isOpen={openDeleteDialog} responseHandlerDialog={onResponseDeletedPost}/>}
      <Snackbar open={openNotification} autoHideDuration={5000} onClose={() => setOpenNotification(false)}>
        <Alert severity={messageNotification.severity}>{messageNotification.message}</Alert>
      </Snackbar>
    </div>
  );
}

export default PostOptions;