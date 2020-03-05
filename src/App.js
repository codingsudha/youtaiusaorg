import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  Container, 
  Button,
  TextField, 
  CssBaseline, 
  Grid,
  FormControlLabel,
  Checkbox,
  Avatar, 
  Typography,
  IconButton,
  Toolbar
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import MenuIcon from '@material-ui/icons/Menu';

import { makeStyles } from '@material-ui/core/styles';

const theme = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};

const url = 'https://3orbtht4dd.execute-api.us-east-1.amazonaws.com/beta/contact-us'
// const url = 'https://q8z4bzrtf7.execute-api.us-east-1.amazonaws.com/default/YouthAIContact'
const exampleUrl = 'https://api.nasa.gov/planetary/apod?api_key=zeMbZcZfM3qsLcLVfc0wN5bLHjDWyZKAO1bvEU7u'


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  media: {
    height: 140,
  },
  video:{
    position: "relative",
    paddingBottom: "56.25%" /* 16:9 */,
    paddingTop: 25,
    height: 0
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: 'orange',
    align: 'center'
  }
}));

function App() {
  const classes = useStyles();
  const [formState, setFormState] = useState(
    {
      firstName:'',
      lastName: '',
      email: ''
    }
  );
  
  const handleClick = (event) => {
    event.preventDefault()
    const data = {
          "form" : formState
        };
    console.log('reached here', data)

    fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  };

  return (
    <Container component="main" maxWidth="xs">
      <Toolbar className={classes.toolbar}>
      <Typography component="h1" variant="h5" style={{color:'white'}}>
          Youth AI USA
        </Typography>
      </Toolbar>
      <CssBaseline />

      <div>
        <img src='YouthAIUSALogo.png' alt='youthai'></img>
      </div>

      <div className={classes.paper}>
        <Typography component="article" variant="caption">
          Our mission is to contribute in learning and sharing knowledge in AI space 
          and be involved in helping global problems implementing AI.
        </Typography>
        
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up for courses
        </Typography>
      <form className={classes.form} noValidate autoComplete="off">
        <div>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={event => setFormState({
                  firstName: event.target.value,
                  lastName: formState.lastName,
                  email: formState.email
                })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={event => setFormState({
                  firstName: formState.firstName,
                  lastName: event.target.value,
                  email: formState.email
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={event => setFormState({
                  firstName: formState.firstName,
                  lastName: formState.lastName,
                  email: event.target.value
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClick}
          >
            Sign Up
          </Button>
        </div>
      </form>

      </div>
      <div>
          <iframe title="youthAIIntro"
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/V7UXuCsZymA" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
        </div>
    </Container>
    
      

    
  );
}

export default App;
