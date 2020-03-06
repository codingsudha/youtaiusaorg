import React, { useState } from 'react';
import logo from '../logo.svg';

import { 
  Container, 
  Button,
  TextField, 
  Grid,
  FormControlLabel,
  FormGroup,
  Checkbox, 
  Typography,
  FormControl,
  RadioGroup,
  Radio,
  FormLabel,
  Box
} from '@material-ui/core';

import CircularProgress from '@material-ui/core/CircularProgress';

// import { makeStyles } from '@material-ui/core/styles';

const url = 'https://3orbtht4dd.execute-api.us-east-1.amazonaws.com/beta/contact-us'

// const useStyles = makeStyles(theme => ({
//     paper: {
//       marginTop: theme.spacing(8),
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//     avatar: {
//       margin: theme.spacing(1),
//       backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//       width: '100%', // Fix IE 11 issue.
//       marginTop: theme.spacing(3),
//     },
//     submit: {
//       margin: theme.spacing(3, 0, 2),
//     },
//     media: {
//       height: 140,
//     },
//     video:{
//       position: "relative",
//       paddingBottom: "56.25%" /* 16:9 */,
//       paddingTop: 25,
//       height: 0
//     },
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//     },
//     toolbar: {
//       backgroundColor: 'orange',
//       align: 'center'
//     }
//   }));


export default function SignUpForm () {
  const [formState, setFormState] = useState(
    {
      firstName:'',
      lastName: '',
      email: '',
      grade: '5-8',
      volunteer: false,
      schoolDistrict: ''
    }
  );
  const [submission, setSubmissionState] = useState('notSubmitted');
  // const classes = useStyles();
  const submissionMessage = (submission === 'success') 
    ? 'Successfully Submitted'
    : 'Submission Failed Try again'
  const handleClick = (event) => {
    event.preventDefault()
    setSubmissionState('submitted')
    
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formState)
    }).then(() => {
      setSubmissionState('success')
      return setFormState({
        firstName:'',
        lastName: '',
        email: '',
        grade: '5-8',
        volunteer: false,
        schoolDistrict: ''
      })
    })
    .catch((err) => {
      console.log(err);
      setSubmissionState('error')
    })
  };

  const changeEvent = (event) => {
    const { name, value } = event.target;
    const newState = { ...formState, [name]: value }
    setFormState(newState)
  }

  const changeEventCheckbox = (event) => {
    const { name, checked } = event.target;
    const newState = { ...formState, [name]: checked }
    setFormState(newState)
  };
  
  return (submission === 'notSubmitted' || submission === 'error' || submission === 'submitted') ?
    (<Container>
        {(submission === 'submitted') ? <CircularProgress/> : <div></div>}
        <Typography component="h1" variant="h5" color="secondary">
            Register Now For Classes
        </Typography>
        <br></br>
        <form /*className={classes.form}*/ noValidate autoComplete="off">
        <div>
        {(submission === 'error') ? (<Typography color="error">Error....Please resubmit</Typography>) : <div></div>}
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
              onChange={changeEvent}
              value={formState.firstName}
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
              onChange={changeEvent}
              value={formState.lastName}
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
              onChange={changeEvent}
              value = {formState.email}
              />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Grade</FormLabel>
              <RadioGroup aria-label="grade" name="grade" value={formState.grade} onChange={changeEvent}>
                <FormControlLabel value="5-8" control={<Radio />} label="5-8" />
                <FormControlLabel value="8-12" control={<Radio />} label="8-12" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormGroup row>
            <FormControlLabel
                control={
                  <Checkbox checked={formState.volunteer} onChange={changeEventCheckbox} name="volunteer"/>
                }
                label="Want to volunteer"/>
              </FormGroup>
          </Grid>
          <Grid item xs={12} sm={6}>
              <TextField
              variant="outlined"
              fullWidth
              id="schoolDistrict"
              label="School District"
              name="schoolDistrict"
              onChange={changeEvent}
              value={formState.schoolDistrict}
              />
          </Grid>
        </Grid>
        <br></br>
        <Button
        type="submit"
        variant="contained"
        color="primary"
        // className={classes.submit}
        onClick={handleClick}
        >
        Sign Up
        </Button>
        </div>
        </form>
    </Container>) : 
    (<Container>
      <Typography color="success">Submission is successful. We will send email link with payment information.</Typography>
    </Container>)
    
}