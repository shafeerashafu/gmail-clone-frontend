import {useState,Suspense} from 'react'
import Header from '../Components/Header.jsx';
import SideBar from '../Components/SideBar.jsx';
import { Box, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';
import SuspenseLoader from '../Components/Common/SuspenseLoader.jsx';



const Wrapper = styled(Box)`
    display: flex;
`;

const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  const toggleDrawer = () => {
    setOpenDrawer(prevState => !prevState);
  }

  return (
    <>
    <Header toggleDrawer={toggleDrawer}/>
    <Wrapper>
       <SideBar toggleDrawer={toggleDrawer} openDrawer={openDrawer} />
       <Suspense fallback={SuspenseLoader}>
          <Outlet context={{openDrawer}}/>
       </Suspense>
    </Wrapper>
    
    </>
  )
}

export default Main;