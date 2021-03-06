import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';
import LocationListContainer, {} from './containers/LocationListContainer';
import ForecastExtended from './components/ForecastExtended/index';

const cities = [
  'Malaga,es',
  'Buenos Aires,ar',
  'Madrid,es'
];

class App extends Component {

  constructor() {
    super();
    this.state = { city: null };
  }
  render() {
    return (
      <div className="App">
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <AppBar position='static'>
                <Toolbar>
                  <IconButton color='inherit' aria-label='Menu'>
                    <MenuIcon />
                  </IconButton>
                  <Typography variant='title' color='inherit'>
                    Weather App
                  </Typography>
                </Toolbar>
              </AppBar>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={6}>
              <LocationListContainer cities={cities}/>
            </Col>
            <Col xs={12} sm={12} md={6} >
              <Paper elevation={4}>
                <div className='detail'>
                  {
                    this.state.city === null ? 
                      <h1>No se seleccionó ciudad</h1>
                      : <ForecastExtended city={this.state.city}/>
                  }
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
        {/* */}
      </div>
    );
  }
}

export default App;