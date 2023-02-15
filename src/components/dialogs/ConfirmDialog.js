import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useState } from 'react';


function ConfirmDialog({responseHandlerDialog, isOpen}) {
  const [open, setOpen] = useState(isOpen);

  const handleNo = () => {
    responseHandlerDialog(null);
    setOpen(false);
  };

  const handleYes = () => {
    responseHandlerDialog('YES');
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        onClose={handleNo}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleNo}>No</Button>
          <Button onClick={handleYes}>Yes</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ConfirmDialog;