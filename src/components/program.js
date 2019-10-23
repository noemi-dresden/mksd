import React from 'react';
import '../App.css';
import { Grid, Container } from '@material-ui/core';



const Program = (props) => {
    var d = props.program
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
          {
            d.map((data, index) => (
              <Grid item md={6} xs={12} key={index}>
                  <h1>{data.title}</h1>
                  {
                    data.list.map((e, i) => (
                      <div className="program" key={i}>
                        <h4>{e.time}</h4><span>{e.event}</span>
                      </div>
                    ))
                  }
              </Grid>
            ))
          }
      </Grid>
    </Container>
  );
}

export default Program;