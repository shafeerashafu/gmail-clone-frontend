
import { ListItem, Checkbox, Typography, Box, styled } from "@mui/material";
import { StarBorder,Star} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../Routes/Routes';
import useAPI from '../Hooks/useAPI.jsx';
import { API_URL } from '../Services/API_URL.js';


const Wrapper = styled(ListItem)`
    padding: 0 0 0 10px;
    background: #f2f6fc;
    cursor: pointer;
    display: flex;
    alignItems: center;
    & > div {
        display: flex;
        width: 100%
    }
    & > div > p {
        font-size: 14px;
    }
`;

const Indicator = styled(Typography)`
    font-size: 12px !important;
    background: #ddd;
    color: #222;
    border-radius: 4px;
    margin-right: 6px;
    padding: 0 4px;
`;

const Date = styled(Typography)({
    marginLeft: 'auto',
    marginRight: 20,
    fontSize: 12,
    color: '#5F6368'
})

const ListMail = ({email,selectedMails,setRefreshScreen,setselectedMails}) => {
  const navigate=useNavigate();

 

  const toggleStarredMailService = useAPI(API_URL.toggleStarredMails);
  const toggleStarredMail = () => {
    toggleStarredMailService.call({ id: email._id, value: !email.starred });
    setRefreshScreen(prevState => !prevState);
  }

  const handleChange = () => {
    if (selectedMails.includes(email._id)) {
        setselectedMails(prevState => prevState.filter(id => id !== email._id));
        
    } else {
        setselectedMails(prevState => [...prevState, email._id]);
        
    }
}




  return (
    <Wrapper>
        <Checkbox 
                size="small" 
                checked={selectedMails.includes(email._id)}
                onChange={() => handleChange()} 
        />
        {
            email.starred ? 
            <Star fontSize="small" style={{ marginRight: 10 , color: '#FFF200'}} onClick={() => toggleStarredMail()} />
            : 
            <StarBorder fontSize="small" style={{ marginRight: 10 }} onClick={()=>toggleStarredMail()}/> 
        }
        
        <Box onClick={()=>navigate(Routes.view.path, { state: { email: email }})}>
            <Typography style={{ width: 200,overflow: 'hidden' }}>To:{email.to.split('@')[0]}</Typography>
            <Indicator>Inbox</Indicator>
            <Typography>{email.subject} {email.body && '-'} {email.body}</Typography>
            <Date>
                {(new window.Date(email.date)).getDate()}&nbsp;
                {(new window.Date(email.date)).toLocaleString('default', { month: 'long' })}
            </Date>
        </Box>
    </Wrapper>
  )
}

export default ListMail;
