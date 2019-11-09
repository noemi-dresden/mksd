import React from 'react';
import '../App.css';
import { Grid, Container } from '@material-ui/core';
import AboutPic from "../images/logo.jpeg";


const About = (props) => {
    var d = props.about
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item md={8}>
          <div className="about">
            <h1>
            {d.title}
            </h1>
            <h3>{d.subtitle}</h3>
            <p>{d.introduction}</p>
            <p>{d.body}</p>
            <Grid container >
            <Grid item md={6}>
              <h2>ZIELE</h2>
              {
                d.target.map((t, index) => 
                  <p key={index}>{t}</p>
                )
              }
            </Grid>
            <Grid item md={6}>
            <h2>MADAGASSISCHE KULTUR</h2>
              {
                d.cultur.map((t, index) => 
                  <p key={index}>{t}</p>
                )
              }
            </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item md={2}>
        <img src={AboutPic} width="300" height="300" alt="about" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;