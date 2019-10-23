import React from 'react';
import './App.css';
import { data } from './components/data';
import { List, ListItem, Drawer,  Button, Fab } from '@material-ui/core';
import { MenuOpenOutlined } from '@material-ui/icons';
import  Home  from './components/home';
import Timer from './components/timer';
import Events from './components/events';
import About from './components/about';
import Book from './components/book';
import Program from './components/program';
import Contact from './components/contact';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

ReactGA.initialize("UA-150550246-1")
ReactGA.pageview(window.location.pathname);

class App extends React.Component {
  state = {
    top: false,
    eventDay: "",
    eventTimer: []
  }

  componentDidMount(){
    this.setState({eventDay: '0'+new Date(data.eventDay).getDate() + '.0' +
    (new Date(data.eventDay).getMonth() + 1) + '.' + new Date(data.eventDay).getFullYear()
    })

    setInterval(() => {
      this.setState({eventTimer: this.calculateTime(data.eventDay)})
    },1000)
  }

  calculateTime = (eventDay) => {
    var d = new Date(eventDay).getTime();
    var today = new Date().getTime();
  
    var distance = d - today;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var times = [
      {"time": days, "text":"Tage"},
      {"time": hours, "text":"Stunden"},
      {"time": minutes, "text":"Minuten"},
      {"time": seconds, "text":"Sekunden"}
    ]
    return times;
  }

  toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({top: open})
  };

  fullList = ( side, d) => {
    return (
      <div
        role="presentation"
        onClick={this.toggleDrawer(side, false)}
        onKeyDown={this.toggleDrawer(side, false)}
      >
        <List>
          { d.menu.map((text, index) => (
            <ListItem button key={index}>
              <Link className="link" to={'/'+text}>{text.toUpperCase()}</Link>
            </ListItem>
          ))}
        </List>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Router>
        <header className="App-header">
          <div className="header-menu">
           <Button onClick={this.toggleDrawer('top', true)}><MenuOpenOutlined className="menu-icon" fontSize="large"></MenuOpenOutlined></Button>
           <span className="organisation">{data.oragnisation}</span>
           <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
            {this.fullList('top', data)}
            </Drawer>
          </div>
        </header>
       
      <Switch>
            <Route exact path="/">
              <div className="header-content">
                <h1>{data.title}</h1>
                <h1>{data.subtitle}</h1>
                <Fab variant="extended" aria-label="delete" className="fab">{this.state.eventDay} {data.eventCity}</Fab>
                <Timer eventDay={this.state.eventTimer} />
                <Button variant="contained" color="secondary" className="book-button">
                 <Link className="participate" to={'/Reservierung'}>NatÜrlich mache ich mit! ich reserviere</Link>
                </Button>
              </div>
              <Events events = {data.events} />
              <Home />
            </Route>
            <Route exact path="/home">
              <div className="header-content">
                <h1>{data.title}</h1>
                <h1>{data.subtitle}</h1>
                <Fab variant="extended" aria-label="delete" className="fab">{this.state.eventDay} {data.eventCity}</Fab>
                <Timer eventDay={this.state.eventTimer} />
                <Button variant="contained" color="secondary" className="book-button">
                 <Link className="participate" to={'/Reservierung'}>NatÜrlich mache ich mit! ich reserviere</Link>
                </Button>
              </div>
              <Events events = {data.events} />
              <Home />
            </Route>
            <Route path="/Reservierung">
              <Book tickets={data.tickets} ads={data.ads}/>
            </Route>
            <Route path="/about">
              <About about={data.about} />
            </Route>
            <Route path="/program">
              <Program program={data.program} />
            </Route>
        </Switch>
        </Router>
        <Contact contact={data.contact} /> 
      </div>
    );
  }
}
export default App;
