import React from 'react';
import '../App.css';
import { lighten, withStyles } from '@material-ui/core/styles';
import { Grid, GridList, GridListTile, Container, Card, Button, TableBody, Typography, TableCell, Paper, TableContainer, Table, TableRow, LinearProgress, CardContent } from '@material-ui/core';
import { coronaImages } from './corona.images.js';


const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten('#ff6c5c', 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#ff6c5c',
  },
})(LinearProgress);

const Corona = (props) => {
  var data = props.data

  return (
    <Grid>
      <div className="corona-header">
      <h2>{data.title}</h2>
      <h1>{data.subtitle}</h1>
      <h1>{data.moto}</h1>
        <Button variant="contained" color="secondary" className="book-button">
        <a className="participate" target="_blank" href="https://www.paypal.com/pools/c/8nOeLsRZyz">ich bin dabei! ich spendiere</a>
        </Button>
      </div>
      <Container className="corona">
        <h1>Vielen Lieben Dank an alle, die sich schon beteiligt haben</h1>
        <h2>So weit haben wir zusammen folgendes Geschaft</h2>
        {data.done.map((done, index) => (
          <Container key={index}>
            <p>Datum: {done.date}</p>
            <p>Gesammeltes Geld: {done.sum}</p>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableBody>
                  {done.materials.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell scope="row">
                        {row.number} isa
                      </TableCell>
                      <TableCell>
                        <BorderLinearProgress
                            variant="determinate"
                            color="secondary"
                            value={(row.number * 100)/ data.goal}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
                  <p>Tanjona manaraka: {data.goal} isa</p>
          </Container>
        ))}
      </Container>
      <Container className="corona">
          <h1>Transparenz ist uns wichtig</h1>
          {
            data.qAnda.map((qa, i) => (
              <div key={i}>
              <Card >
                <CardContent>
                <Typography variant="h5" component="h2">
                    {qa.question}
                </Typography>
                <Typography color="textSecondary">
                  {qa.answer}
                </Typography>
                </CardContent>
              </Card><br />
              </div>
            ))
          }
          <h3>Hast du noch mehr Fragen? PN uns bitte direct auf unsere Facebook Seite oder schreibe uns eine Email</h3>
      </Container>
      <Container>
        <h1>Helfen macht glücklich</h1>
   
    
        <GridList cellHeight={160} cols={3}>
          { coronaImages.map((image, key)  => (
            <GridListTile key={key} cols={1}>
              <img src={image.src} alt="From assos Neny" />
            </GridListTile>
          ))}
        </GridList>
    
      </Container>
    </Grid>
  );
}



export default Corona;