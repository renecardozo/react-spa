import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import axios from 'axios';
import { useAppContext } from '../../context/Hooks';
import { addNewPost, editPost } from '../../state/actions';


function CreatePostFormDialog({
  isOpen,
  responseHandlerDialog,
  editMode=false,
  postToEdit={title: '', text: '', author: ''}}) {

  const [post, setPost] = useState(postToEdit);
  const [open, setOpen] = useState(isOpen);
  const {dispatch} = useAppContext();

  const handleCancel = () => {
    responseHandlerDialog(null);
    setOpen(false);
  };

  const createNewPost = async () => {
    try {
      const dataPost = {
        text: post.text,
        title: post.title,
        author: post.author,
        createdAt: new Date().toLocaleString()
      }
      const {data} = await axios.post('http://localhost:3200/posts', dataPost);
      dispatch(addNewPost(data));
      responseHandlerDialog();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  const updatePost = async () => {
    try {
      const dataToUpdate = {
        text: post.text,
        title: post.title,
        author: post.author,
        updatedAt: new Date().toLocaleString()
      }
      await axios.put(`http://localhost:3200/posts/${postToEdit.id}`, dataToUpdate);
      dispatch(editPost(post));
      responseHandlerDialog();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleCreate = async () => {
    if (!editMode) {
      createNewPost();
    }
      updatePost();
  };
  
  return (
    <div>
      <Dialog open={open} onClose={handleCancel}>
        <DialogContent>
          <DialogContentText>
            Share to us any thoughts that you want!
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='post-title'
            label='Post Author'
            type='text'
            fullWidth
            variant='standard'
            value={post.author}
            onChange={(e) => setPost(prevState => {
              return {
                ...prevState,
                author: e.target.value
              };
            })}
          />
          <TextField
            autoFocus
            margin='dense'
            id='post-title'
            label='Post Title'
            type='text'
            fullWidth
            variant='standard'
            value={post.title}
            onChange={(e) => setPost(prevState => {
              return {
                ...prevState,
                title: e.target.value
              };
            })}
          />
          <TextField
            autoFocus
            margin='dense'
            id='post-text'
            label='Post Content'
            type='text'
            fullWidth
            variant='standard'
            rows={6}
            multiline
            value={post.text}
            onChange={(e) => setPost(prevState => {
              return {
                ...prevState,
                text: e.target.value
              }
            })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleCreate}>{editMode ? 'Update' : 'Create'}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreatePostFormDialog;