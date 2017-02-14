import React from 'react';
import ReactDOM from 'react-dom';
import Temperature from './Temperature';
import Band from './Band';
import { Jumbotron, Grid, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <div>
    <Band />
    <Jumbotron>
      <Grid>
        <Col md="3">
          <p className="lead">Current Temperature</p>
          <Temperature />
        </Col>
        <Col md="9">
          <p className="lead">Last 24 Hours</p>
          <div className="row" id="chart-img"></div>
        </Col>
      </Grid>
    </Jumbotron>
  </div>,

  document.getElementById('root')
);
