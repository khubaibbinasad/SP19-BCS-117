
import { makeStyles } from '@material-ui/core/styles';
import { fontSize } from '@mui/material/node_modules/@mui/system';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop:'6rem',
    
    width:'76%',
    paddingLeft:'20%'
  },
  fileInput: {
    width: '70%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  homeheader:{
      textAlign:'center'
  },
 


}));


