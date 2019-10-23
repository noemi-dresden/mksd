import React from 'react';
import '../App.css';
import { Grid, Container } from '@material-ui/core';


const Home = (props) => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div>
            <h1>Spielhalle</h1>
            <iframe className="map" title="Spielhalle" src="https://maps.google.com/maps?q=Halle%201%20%7C%20SportCampus%20Am%20Moritzwinkel%206%2030167%20Hannover&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
            <p>Halle 1 | SportCampus Am Moritzwinkel 6 30167, Hannover</p>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div>
            <h1>Party</h1>
            <iframe className="map" title="party" src="https://maps.google.com/maps?q=Robert-Koch-Platz%2010%2030115%2C%20Hannover&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
            <p>Robert-Koch-Platz 10 30115, Hannover</p>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;