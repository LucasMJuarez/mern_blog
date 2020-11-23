import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
  
    },
  },
  paper: {
    padding: theme.spacing(2),
    border:"10px solid",
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '97%',
    margin: '15px 10px', 
    alignItems: "center",
  },
  buttonSubmit: {
    marginBottom: 20,
  },
}));