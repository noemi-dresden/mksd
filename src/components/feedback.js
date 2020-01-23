import React from 'react';
import '../App.css';
import { Container, Grid, Dialog, Slide, Toolbar, Button, AppBar} from '@material-ui/core';
import FacebookEmoji from 'react-facebook-emoji';
import ReactGA from 'react-ga';

const sendFeedback = (action) => {
    console.log("User click on", action)
    ReactGA.event({
     category: 'Feedback',
     action: action ,
     transport: 'beacon'
   });
};

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Feedback = () => {
    const [open, setOpen] = React.useState(false);
    let emotions = ["like","love","wow","yay","angry", "haha"];
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
  return (
    <Container maxWidth="sm">
        <h1>Wie findest du die gesamte Veranstaltung?</h1>

        <Grid container justify="center" spacing={6}>
            {
                emotions.map((e,i) => (
                    <Grid item xs={4} sm={4} key={i}>
                        <br/><br/><br/><br/>
                        <div onClick={() => {sendFeedback(e); handleClickOpen()}}>
                            <FacebookEmoji type={e} />
                        </div>
                        <br/><br/><br/>
                    </Grid>
                ))
            }            
        </Grid>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className="feedback">
          <Toolbar>
            <Button autoFocus color="inherit" onClick={handleClose}>
              CLOSE FEEFBACK
            </Button>
          </Toolbar>
        </AppBar>
            <div> <br/><br/><br/><br/>
                <Grid container justify="center" >
                Alefanay ny <FacebookEmoji type={'love'} /><FacebookEmoji type={'love'} /><FacebookEmoji type={'love'} /> ho anao.
                <h3>Danke, dass du dabei warst.</h3>
                </Grid>
            
            </div>
            <iframe title="feedback" className="book-formular" src="https://docs.google.com/forms/d/e/1FAIpQLSfM_pvvfjdRTgghl1wl8wBTWIhi-Y_Okhz8oHmV9JgypDMi6w/viewform?embedded=true" >Loading…</iframe>
        </Dialog>
    </Container>
  );
}

export default Feedback;