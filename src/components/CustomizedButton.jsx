import {Button} from '@mui/material';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const CustomizedButton = styled(Button)(({ theme }) => ({
    width: '150px',
    padding: '7.5px',
    fontSize: '1rem',
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}) ); 



export default CustomizedButton;