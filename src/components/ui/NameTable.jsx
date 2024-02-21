import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import BLineChart from './BLineChart';

const NameTable = () => {
  const [selectedName, setSelectedName] = React.useState(null);

  const items = [
    { avatar: '/static/images/avatar/1.jpg', primary: 'HARSHEY KAUR', secondary: 'Attention: 93%' },
    { avatar: '/static/images/avatar/2.jpg', primary: 'RAHUL DUA', secondary: 'Attention: 96%' },
    { avatar: '/static/images/avatar/3.jpg', primary: 'RAJAS BAADKAR', secondary: 'Attention: 82%' },
    { avatar: '/static/images/avatar/4.jpg', primary: 'KABIR MEHRA', secondary: 'Attention: 54%' },
    { avatar: '/static/images/avatar/2.jpg', primary: 'RISHABH MALIK', secondary: 'Attention: 86%' },
    { avatar: '/static/images/avatar/3.jpg', primary: 'SHRUTI PATIL', secondary: 'Attention: 88%' },
    { avatar: '/static/images/avatar/4.jpg', primary: 'ALIA GUPTA', secondary: 'Attention: 55%' },
    { avatar: '/static/images/avatar/4.jpg', primary: 'KABIR MEHRA', secondary: 'Attention: 54%' },
    { avatar: '/static/images/avatar/2.jpg', primary: 'RISHABH MALIK', secondary: 'Attention: 86%' },
    { avatar: '/static/images/avatar/3.jpg', primary: 'SHRUTI PATIL', secondary: 'Attention: 88%' },
    { avatar: '/static/images/avatar/4.jpg', primary: 'ALIA GUPTA', secondary: 'Attention: 55%' },
    { avatar: '/static/images/avatar/4.jpg', primary: 'KABIR MEHRA', secondary: 'Attention: 54%' },
    
  ];

  const handleNameClick = (name) => {
    setSelectedName(name);
  };

  const handleCloseModal = () => {
    setSelectedName(null);
  };

  return (
    <div className='bg-blue-100' style={{ width: '18%', height: '90%', position: 'absolute', right: '0',top:'15' ,overflowY: 'auto'}}>
      <List sx={{ width: '100%', maxWidth: 350, borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px' }}>
        {items.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>
            <ListItemAvatar>
              <Avatar alt={`Avatar n°${index + 1}`} src={item.avatar} />
            </ListItemAvatar>
            <ListItemText 
              primary={
                <Button onClick={() => handleNameClick(item.primary)}>
                  {item.primary}
                </Button>
              } 
              secondary={item.secondary} 
            />
          </ListItem>
        ))}
      </List>
      <Modal
        open={Boolean(selectedName)}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'gray',
          border: '2px solid #000',
          borderRadius:"20px",
          boxShadow: 24,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <h2 id="modal-modal-title" align="center" style={{ color:'white'}}>ATTENTION CHART FOR {selectedName}</h2>
          <BLineChart/>
          <Button onClick={handleCloseModal}style={{ marginTop: '16px' , color:'white'}}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default NameTable;
