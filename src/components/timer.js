import React from 'react';
import '../App.css';
import { Grid } from '@material-ui/core';

const Timer = (props) => {
    var times = props.eventDay
    return (
        <Grid container justify="center">
            {
                times.map((time, index) => (
                    <div key={index} className="timer-card">      
                        <p>{time.time}</p>
                        <label>{time.text}</label>
                    </div>
                ))
            }
        </Grid>
      );
  }


export default Timer;
