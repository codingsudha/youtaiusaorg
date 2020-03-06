import React, { useState } from 'react';
import { 
  Container, 
  CssBaseline, 
  Typography,
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardContent
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SignUpForm from './SignUpForm'
import { MuiThemeProvider } from "@material-ui/core/styles";
import appearance from '../services/appearance';
import InformationCards from './InformationCards';


// const theme = {
//   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
// };

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

  return (
  <MuiThemeProvider theme={appearance.defaultTheme}>
    <Container component="main" root>
      <AppBar root/*className={classes.toolbar}*/position="static">
      <Toolbar>
          <Typography variant="h5" color="headingText">
            Youth AI USA
          </Typography>
      </Toolbar>
     
      </AppBar>
      <Container>
        <img src='YouthAIUSALogo.png' alt='youthai'></img>
      </Container>
      <CssBaseline />
      <Container>
      <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography color="primary" variant="h5">
            Our mission is to contribute in learning and sharing knowledge in AI space 
            and be involved in helping global problems implementing AI.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      </Grid>
      </Container>
      <InformationCards/>
      <br></br>
      <SignUpForm/>
      <br></br>
      <Container>
          <iframe title="youthAIIntro"
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/V7UXuCsZymA" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
      </Container>
    </Container>
    </MuiThemeProvider>
    
      

    
  );
}

export default App;
