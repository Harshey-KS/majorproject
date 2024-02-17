// import React from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

// const drawerWidth = 240;
// const navItems = ['Home', 'Dashboard'];

// function Nav(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//     return(
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', display:"flex" }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         Sardar Patel Institute Of Technology
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton
//               sx={{ textAlign: 'center', display:"flex" }}
//               component={Link}
//               to={`/${item.toLowerCase()}`} // Dynamically generate the route based on the item
//             >
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>)
// }

// Nav.propTypes = {
//   window: PropTypes.func,
// };

// export default Nav;



import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240;
const navItems = ['Home', 'Dashboard'];

// function Nav(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   return (
//     <Box
//       onClick={handleDrawerToggle}
//       sx={{
//         display: 'flex',
//         justifyContent: 'space-between', // Horizontally align items
//         alignItems: 'center', // Vertically align items
//         backgroundColor: '#4666ff', // Set background color
//         color: 'white', // Set text color
//       }}
//     >
//       <Typography variant="h6" sx={{ my: 2 , ml:5}}>
//         Sardar Patel Institute Of Technology
//       </Typography>
//       <List sx={{ display: 'flex', flexDirection: 'row', marginRight:'10px'}}>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton
//               sx={{
//                 '&:hover': { backgroundColor:'#4666ff' ,borderRadius:'5px'}, // Hover effect
//               }}
//               component={Link}
//               to={`/${item.toLowerCase()}`} // Dynamically generate the route based on the item
//             >
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );
// }

// Nav.propTypes = {
//   window: PropTypes.func,
// };

// export default Nav;

function Nav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        display: 'flex',
        justifyContent: 'space-between', // Horizontally align items
        alignItems: 'center', // Vertically align items
        backgroundColor: '#4666ff', // Set background color
        color: 'white', // Set text color
      }}
    >
      <Typography variant="h6" sx={{ my: 2 , ml:5}}>
        Sardar Patel Institute Of Technology
      </Typography>
      <List sx={{ display: 'flex', flexDirection: 'row', margin: 0, padding: 0 }}>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                '&:hover': { backgroundColor:'#4666ff' ,borderRadius:'5px'}, // Hover effect
              }}
              component={Link}
              to={`/${item.toLowerCase()}`} // Dynamically generate the route based on the item
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
Nav.propTypes = {
 window: PropTypes.func,
 };
  
export default Nav;