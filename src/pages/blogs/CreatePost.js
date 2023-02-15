import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';


function CreatePostFormDialog({isOpen, responseHandlerDialog}) {
  const [postText, setPostText] = useState('');
  const [open, setOpen] = useState(isOpen);

  const handleCancel = () => {
    responseHandlerDialog(null);
    setOpen(false);
  };

  const handleCreate = () => {
    responseHandlerDialog(postText);
    setOpen(false);
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
            id='post-create'
            label='Post Creation'
            type='text'
            fullWidth
            variant='standard'
            rows={6}
            multiline
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleCreate}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreatePostFormDialog;