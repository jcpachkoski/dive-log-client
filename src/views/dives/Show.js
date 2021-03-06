import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Row, Col } from 'react-bootstrap';

import { DIVES_ROOT } from '../../constants';

const DiveShow = ({ 
  dive,
  location,
  onDelete
}) => {

  if (dive && location) {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <h3>{location.name} - {location.city}, {location.country}</h3>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <p>on {dive.date} at {dive.time}</p>
          </Col>
        </Row>
        <br/>

        <Row>
          <Col md={2} mdOffset={1}><p>Duration: {dive.duration}</p></Col>
          <Col md={2}><p>Ballast: {dive.ballast}</p></Col>
          <Col md={2}><p>Maximum Depth: {dive.max_depth}</p></Col>
          <Col md={2}><p>Starting Pressure: {dive.starting_pressure}</p></Col>
          <Col md={2}><p>Final Pressure: {dive.final_pressure}</p></Col>
        </Row>
        <br/>

        {dive.comments &&
          <Row>
            <Col md={12}>
              <h4>Comments</h4>
              <p>{dive.comments}</p>
            </Col>
          </Row>
        }
        <br/>
        
        <Link to={`${DIVES_ROOT}`}>
          <Button>Back</Button>
        </Link>
        <Link to={`${DIVES_ROOT}/${dive.id}/edit`}>
          <Button>Edit</Button>
        </Link>
        <Button bsStyle='danger' onClick={() => onDelete(dive.id)}>Delete</Button>
      </Grid>
    )
  } else return (<div></div>)
}

export default DiveShow