import {Button, listItemSecondaryActionClasses} from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomizedButton = styled(Button)(({ theme }) => ({
    width: '150px',
    padding: '7.5px',
    fontSize: '1rem',
    backgroundColor: theme.palette.secondary.main,
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
}) ); 



export default CustomizedButton;