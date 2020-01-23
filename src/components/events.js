import React from 'react';
import '../App.css';
import { Container, Grid, Card, CardContent, Fab } from '@material-ui/core';
import { Link } from "react-router-dom";


const Events = (props) => {
  var d = props.events
  return (
    <Container maxWidth="md">
       <h1>Veranstaltungen</h1>
       <Grid container spacing={2} justify="center">
            { d.map((event, index) => (
                 <Grid item xs={12} sm={4} key={index}>
                      <Card className={'event-card-'+index}>
                          <CardContent>
                              <h2>{event.title}</h2>
                              {event.list.map((l,i) => (
                                  <p key={i}>{l}</p>
                              ))}
                          </CardContent>
                      </Card>
                 </Grid>
            ))}
            <Fab variant="extended" className="action-button">
                <Link className="participate" to={'/Reservierung'}>NatÜrlich mache ich mit! ich reserviere</Link>
            </Fab>
       </Grid>
    </Container>
  );
}

export default Events;
