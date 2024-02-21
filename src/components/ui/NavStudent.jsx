import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu'; // Import MenuIcon
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { ListItemText } from '@material-ui/core';


const navItems = ['Home'];

const NavStudent = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    // Define handleDrawerToggle if needed
  };

  return (
    <div style={{ backgroundColor: '#1b093d', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      <div style={{marginLeft:'10px'}}>
      <Typography variant="h6">
        Sardar Patel Institute Of Technology
      </Typography>
      </div>
      {isSmallScreen ? (
        <MenuIcon style={{ cursor: 'pointer' }} onClick={handleDrawerToggle} />
      ) : (
        <List style={{ display: 'flex', flexDirection: 'row', margin: 0, padding: 0 }}>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton
                sx={{
                  '&:hover': { backgroundColor:'#1b093d' ,borderRadius:'5px'}, // Hover effect
                }}
                component={Link}
    to={item.toLowerCase() === 'home' ? '/homestudent' : `/${item.toLowerCase()}`} // Dynamically generate the route based on the item
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default NavStudent;
