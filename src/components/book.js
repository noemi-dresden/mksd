import React from 'react';
import '../App.css';
import { Grid, Container, Card, CardContent, Fab } from '@material-ui/core';

class Book extends React.Component {

  state = {
    formular: ""
  }

  book = (name) => {
    if(name === "Gast") {
      this.setState({formular:"Gast"})
    }
    if(name === "Team") {
      this.setState({formular:"Team"})
    }
  }

  render() {
    var d = this.props.tickets
    var ads = this.props.ads
    return (
      <Container maxWidth="md">
      <h1>Reservierung & Anmeldung</h1>
      <Grid container spacing={2} justify="center">
      {
               d.map((ticket, index) => (
                  <Grid item xs={12} sm={4}  key={index}>
                       <Card className="ticketCard">
                          <CardContent>
                              <h1>{ticket.name}</h1>
                              <h2>Sport: {ticket.price.sport} Euro/ {ticket.unit}</h2>
                              <h2>Party: {ticket.price.party} Euro/ {ticket.unit}</h2>
                              <h2>Sport + Party: {ticket.price.sportParty} Euro</h2>
                              <Fab variant="extended" className="action-button" onClick={() => this.book(ticket.name)}>
                                  {ticket.action}
                              </Fab>
                          </CardContent>
                      </Card>
                  </Grid>
               ))
           }
      </Grid>
      <Grid container spacing={2} justify="center">
          { 
            this.state.formular === "Team" ? 
            (
              <Grid item>
                <iframe title="team" className="book-formular" src="https://docs.google.com/forms/d/e/1FAIpQLSdCxwY8KoszI1_SL2Xm8otgY1Ej6WIRqJhnneccOc4GZL-tTQ/viewform?embedded=true">Wird geladen…</iframe>
              </Grid>
            )
            :
            (this.state.formular === "Gast" ?
              (
                <Grid item>
                  <iframe title="gast" className="book-formular" src="https://docs.google.com/forms/d/e/1FAIpQLSfQw9d5YpguwhasUCSawD6kuITTyuQg3vjzXy-C2P2mXQEWGg/viewform?embedded=true">Wird geladen…</iframe>  
                </Grid>
              )
              :
              (<div className="ads">
                <h2>{ads.title}</h2>
                <h3>{ads.introduction}</h3>
                <p>{ads.body}</p>
              </div>))
          }
      </Grid>
      </Container>
    );
  }
}


export default Book;