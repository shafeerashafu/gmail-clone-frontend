/* eslint-disable */
import {useEffect,useState} from 'react';
import { useOutletContext,useParams } from 'react-router-dom';
import useAPI from '../Hooks/useAPI.jsx';
import { API_URL } from '../Services/API_URL.js';
import { Box, List, Checkbox } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import ListMail from './ListMail.jsx';
import { EMPTY_TABS } from '../Constant/Constant.js';
import NoMails from './Common/NoMails.jsx';

const Mails = () => {
  const [refreshScreen, setRefreshScreen] = useState(false);
  const [selectedMails, setSelectedMails] = useState([]);

  const {openDrawer} = useOutletContext();
  const {type} = useParams();

  const getMailsService=useAPI(API_URL.getMailFromType);
  const moveMailsToBinService = useAPI(API_URL.moveMailsToBin);
  const deleteMailsService = useAPI(API_URL.deleteMails);

  useEffect(()=>{
    getMailsService.call({},type);
  },[type,refreshScreen])

  const selectAllMails = (e) => {
    if (e.target.checked) {
        const emails = getMailsService?.response?.map(email => email._id);
        setSelectedMails(emails);
    } else {
        setSelectedMails([]);
    }
  }

  const deleteSelectedMails = () => {
    if (type === 'bin') {
        deleteMailsService.call(selectedMails);
    } else {
        moveMailsToBinService.call(selectedMails);
    }
    setRefreshScreen(prevState => !prevState);
  }


  return (
    <Box style={openDrawer ? { marginLeft: 250, width: '100%' } : { width: '100%' } }>
            <Box style={{ padding: '20px 10px 0 10px', display: 'flex', alignItems: 'center' }}>
                <Checkbox size="small" onChange={(e) => selectAllMails(e)} />
                <DeleteOutline style={{ marginRight: 10 }} onClick={(e) => deleteSelectedMails(e)} />
            </Box>
            <List>
                {
                    getMailsService?.response?.map(email => (
                        <ListMail 
                            email={email} 
                            key={email.id}
                            setRefreshScreen={setRefreshScreen} 
                            selectedMails={selectedMails}
                            setselectedMails={setSelectedMails}
                        />
                    ))
                }
            </List>
            {
                getMailsService?.response?.length === 0 &&
                    <NoMails message={EMPTY_TABS[type]} />
            }
        </Box>
  )
}

export default Mails;