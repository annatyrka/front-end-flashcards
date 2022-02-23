import {Button} from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomizedButton = styled(Button)(({ theme }) => ({
    width: '150px',
    padding: '7.5px',
    fontSize: '1rem',
    backgroundColor: theme.palette.secondary.main,
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
  [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
    fontSize: '0.75rem',
  }
}) ); 



export default CustomizedButton;