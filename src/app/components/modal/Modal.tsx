
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal'; 
import {ReactElement, ReactNode} from "react"

type MyModalProps = {
    isOpen?: boolean;
    onClose: () => void;
    children: ReactElement | ReactElement[];
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MyModal({isOpen = false, onClose, children}: MyModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal    
        open={open}
        onClose={handleClose}
      >
        {Array.isArray(children) ? <>{children}</> : children}
        </Modal>
    </div>
  );
}
