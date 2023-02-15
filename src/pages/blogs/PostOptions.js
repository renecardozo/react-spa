import {
  Menu,
  MenuItem,
} from '@mui/material';

import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CreatePostFormDialog from './CreatePost';
import ConfirmDialog from '../../components/dialogs/ConfirmDialog';

const ITEM_HEIGHT = 48;



function PostOptions() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [post, setPost] = useState('');
  const navigate = useNavigate();
  
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleViewPost = (e) => {
    console.log('View full post');
    setAnchorEl(null);
    navigate(`/view-post/idPost`);
  }
  const handleEditPost = (e) => {
    console.log('Edit post');
    setOpenEditDialog(true);
    setAnchorEl(null);
  }
  const onResponseEditPost = (response) => {
    setOpenEditDialog(false);
    if (response == null) {
      console.log('User cancel to delete the post');
    } else {
      console.log('User edited the post');
      setPost(response);
    }
  }

  const handleDeletePost = (e) => {
    console.log('Delete Post')
    setOpenDeleteDialog(true);
    setAnchorEl(null);
  }
  const onResponseDeletedPost = (response) => {
    setOpenDeleteDialog(false);
    if (response == null) {
      console.log('User not deleted the post');
    } else {
      console.log('User deleted the post');
    }
  }  
  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
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
      {openEditDialog && <CreatePostFormDialog isOpen={openEditDialog} responseHandlerDialog={onResponseEditPost}/>}
      {openDeleteDialog && <ConfirmDialog isOpen={openDeleteDialog} responseHandlerDialog={onResponseDeletedPost}/>}
    </div>
  );
}

export default PostOptions;