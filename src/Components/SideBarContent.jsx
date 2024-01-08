import React,{useState} from 'react';
import { Button, List, ListItem, Box, styled } from '@mui/material';
import { CreateOutlined } from '@mui/icons-material';
import { SIDEBAR_DATA } from '../Config/Sidebar.Config.js';
import ComposeMail from './ComposeMail.jsx';
import { useParams, NavLink } from 'react-router-dom';
import { Routes } from '../Routes/Routes.js';

const Container = styled(Box)({
    padding: 8,
    '& > ul' : {
        padding: `10px 0 0 5px`,
        fontSize: 14,
        fontweight: 500,
        cursor: `pointer`,
        '& > a':{
            textDecoration:'none',
            color:'inherit'
        }
    },
        '& > ul > a > li > svg': {
            marginRight: 20
        }

    }
)


const ComposeButton = styled(Button)`
    background: #c2e7ff;
    color: #001d35;
    border-radius: 16px;
    padding: 15px;
    min-width: 140px;
    text-transform: none;
`;


const SidebarContent = () => {
    // eslint-disable-next-line
 
  const [openDialog,setOpenDialog] =useState(false);
  const {type} = useParams();

  const onComposeClick = () => {
    setOpenDialog(true);
  }

  return (
    <>
    <Container>
        <ComposeButton onClick={() => onComposeClick()}><CreateOutlined style={{ marginRight: 10 }} />Compose
        </ComposeButton>
        <List>
                {
                    SIDEBAR_DATA.map(data => (
                        <NavLink key={data.name} to={`${Routes.mails.path}/${data.name}`}>
                            <ListItem style={ type === data.name.toLowerCase() ? {
                                backgroundColor: '#d3e3fd',
                                borderRadius: '0 16px 16px 0'
                            } : {}}>
                                <data.icon fontSize="small" />{data.title}
                            </ListItem>
                        </NavLink>
                        // <ListItem key={data.name}>
                        //     <data.icon fontSize="small"/>{data.title}
                        // </ListItem>
                    ))
                }
        </List>
        <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </Container>
    </>
  )
}

export default SidebarContent;