import React, { useState } from 'react';
import { AppBar, Toolbar, Box, InputBase, styled, IconButton } from '@mui/material';
import { Menu as MenuIcon, Tune, HelpOutlineOutlined, SettingsOutlined, 
    AppsOutlined, AccountCircleOutlined, Search } from '@mui/icons-material';
import { gmailLogo } from '../Constant/Constant.js';
import HeadSidebar from './HeadSidebar.jsx';
import { logoutUser } from '../Services/crudApi.js';
import { useNavigate } from 'react-router-dom'; 
const StyledAppBar = styled(AppBar)`
    background: #f5F5F5;
    box-shadow: none;
`;

const SearchWrapper = styled(Box)`
    background: #EAF1FB;
    margin-left: 80px;
    border-radius: 8px;
    min-width: 690px;
    max-width: 720px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    & > div {
        width: 100%
    }
`;

const OptionsWrapper = styled(Box)`
width: 100%;
display: flex;
justify-content: flex-end;
align-items: center; /* Ensure all items are aligned centrally */
& > *:not(:last-child) {
    margin-right: 20px; /* Add space between icons except for the last icon */
}
`;

const Header = ({ toggleDrawer }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      const data = await logoutUser();
      if (data.code) {
        localStorage.removeItem("isAuthenticated"); // Clear authentication token
        navigate("/login"); // Navigate to the login page
        
      } else {
        // Stay on the same page
      }
    } catch (error) {
      
    }
  };

  return (
    <>
      <StyledAppBar position="static">
        <Toolbar>
          <MenuIcon color="action" onClick={toggleDrawer} />
          <img src={gmailLogo} alt="logo" style={{ width: 110, marginLeft: 15 }} />
          <SearchWrapper>
            <Search color="action" />
            <InputBase />
            <Tune color="action" />
          </SearchWrapper>

          <OptionsWrapper>
            <HelpOutlineOutlined color="action" />
            <SettingsOutlined color="action" />
            <AppsOutlined color="action" />
            <IconButton onClick={handlePopoverOpen}>
              <AccountCircleOutlined color="action" />
            </IconButton>
          </OptionsWrapper>
        </Toolbar>
      </StyledAppBar>
      <HeadSidebar anchorEl={anchorEl} handleClose={handlePopoverClose} handleLogout={handleLogout} />
    </>
  );
};

export default Header;
