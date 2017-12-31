import React, {Component} from 'react';
import Spinner from './Spinner';
import axios from "axios";
import SidebarMenu from "./SidebarMenu";
import {Col, Grid, Row} from 'react-bootstrap';

import './css/connections.css';

class Connections extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      connections: []
    }
  }

  render() {
    return this.renderLayout(this.renderLoadingErrorOrContent());
  }

  renderLayout(element) {
    return <div className='connections-component'>
      <SidebarMenu/>
      {element}
    </div>
  }

  renderLoadingErrorOrContent() {
    let element = null;
    if (this.state.loading === true)
      element = <Spinner/>;
    else if (this.state.error)
      element = <pre className="error">{this.state.error.toString()}</pre>;
    else
      element = this.renderConnections();
    return element;
  }

  renderConnections() {
    return <div>
      <Row>
        <Col md={12}>
          <h1>Live Connections</h1>
        </Col>
      </Row>

      <div className='main'>
        <p>Connections active in the last 5 minutes.</p>
        <table>
        {
          this.state.connections.map((value, index) => {
            return <tr>
                <td key={index}>{value.host.name}</td>
                <td>{value.ip.value}</td>
              </tr>;
          })
        }
        </table>
      </div>
    </div>
  }

  componentDidMount() {
    this.fetchConnections();
  }

  fetchConnections() {
    axios.get('/connections')
        .then(response => {
          this.setState({
            loading: false,
            error: null,
            connections: response.data
          })
        })
        .catch(error => {
          this.setState({
            loading: false,
            error: error
          })
        });
  }

}

export default Connections;
