import React from 'react';
import { AppBar, Toolbar,  Grid } from '@material-ui/core';
import '../App.css';
import { Copyright, Facebook, Favorite, Email } from '@material-ui/icons';


const Contact = (props) => {
  var contact = props.contact
  return (
    <div>
      <AppBar position="static" className="footer">
        <Toolbar>
          <Grid container justify="center" spacing={3}>
            <Grid item > Made with <Favorite color="secondary"/> by s.Privat </Grid>
            <Grid item > <Copyright/> M.K.S.D. {new Date().getFullYear()} </Grid>
            <Grid item > Follow us on <a href={contact.facebook}><Facebook/></a>   </Grid>
            <Grid item > {contact.email} <a href={'mailto:'+contact.email}><Email/></a>   </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Contact;