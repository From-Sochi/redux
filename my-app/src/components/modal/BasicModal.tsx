import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextareaAutosize from '@mui/material/TextareaAutosize';

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

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [imageUrl, setImageUrl] = React.useState('');
    const [description, setDescription] = React.useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleClose();
    };

    return (
        <div>
            <Button onClick={handleOpen} color='inherit'>
                ADD CARD
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box sx={style}>
                    <Typography id='modal-modal-title' variant='h6' component='h2'>
                        Add New Card
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            required
                            fullWidth
                            label='Title*'
                            variant='outlined'
                            margin='normal'
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <TextField
                            required
                            fullWidth
                            label='Price*'
                            variant='outlined'
                            margin='normal'
                            type='number'
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                        <TextField
                            required
                            fullWidth
                            label='Image URL*'
                            variant='outlined'
                            margin='normal'
                            value={imageUrl}
                            onChange={e => setImageUrl(e.target.value)}
                        />
                        <TextareaAutosize
                            minRows={3}
                            placeholder='Please enter card description'
                            style={{ width: '100%', marginTop: '16px', padding: '8px' }}
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                        <Button type='submit' variant='contained' color='primary' sx={{ marginTop: '16px' }}>
                            ADD
                        </Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
