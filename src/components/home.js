import React from 'react';
import '../App.css';
import { Grid, Container} from '@material-ui/core';



const Home = (props) => {
  let data = props.data
  return (
    <div>
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
            <iframe className="map" title="party"src="https://maps.google.com/maps?q=Elements%20Hannover%20Marienstra%C3%9Fe%2096%2030171%20Hannover&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
            <p>Elements Hannover, Marienstraße 96, 30171 Hannover</p>
          </div>
        </Grid>
      </Grid>
    </Container>
    <Container maxWidth="md">
    <div>
        <h1>KOOPERATION</h1>
        <Grid container spacing={2}>
          {
            data.map((d,i) => (
              <Grid item xs={12} md={3}>
                 <a className="cooperation" href={d.web} target="_target">{d.title}</a>
              </Grid>
            ))
          }
        </Grid>
      </div>
    </Container>
    </div>
  );
}

export default Home;

