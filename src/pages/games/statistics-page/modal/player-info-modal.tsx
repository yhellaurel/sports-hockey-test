import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  height: '80%',
  width: '95%',
  borderRadius: '5px',
  overflow: "auto",
};

const style1 = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    height: '60%',
    width: '85%',
    borderRadius: '5px',
    overflow: "auto",
  };

interface TeamInfoModalInterface {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode
    nested?: boolean
}

export default function PlayerInfoModal(props: TeamInfoModalInterface) {
    const {open, setOpen, children, nested} = props;
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={nested? style1 :style}>
                {children}
            </Box>
        </Modal>
        </div>
    );
}