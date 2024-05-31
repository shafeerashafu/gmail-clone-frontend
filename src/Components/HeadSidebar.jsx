import React from 'react';
import { Popover, List, ListItem, ListItemText } from '@mui/material';

const HeadSidebar = ({ anchorEl, handleClose , handleLogout }) => {
    const open = Boolean(anchorEl);
    const id = open ? 'profile-popover' : undefined;

    const onLogoutClick = () => {
        handleLogout();
        handleClose();
      };
    
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
    <List>
        <ListItem button>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button onClick={onLogoutClick}>
          <ListItemText primary="Logout" />
        </ListItem>
        {/* Add more items as needed */}
      </List>
    </Popover>
   
  );
};

export default HeadSidebar;
