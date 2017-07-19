import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
  Button,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Grid,
  Row,
  Col
 } from 'react-bootstrap';


class DiveForm extends Component  {

  componentWillMount() {
    this.state = {
      ...this.props.dive,
      locations: this.props.locations
    }
  }

  handleLocationChange = (event) => {
    event.preventDefault();
    this.setState({
      location_id: event.target.value,
      location: this.props.locations.find(location => location.id === +event.target.value)
    });
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
    
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      ...this.state,
    });
  }

  render() {
    return (
      <Grid>
        <Form onSubmit={this.handleFormSubmit}>
          {this.props.dive.id===0 ? <h1>Editing Dive</h1> : <h1>New Dive</h1>}

          <Row>
            <Col md={6}>
              <FormGroup>
                <ControlLabel>Date</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Date of dive"
                  name='datetime'
                  onChange={this.handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <ControlLabel>Location</ControlLabel>
                <FormControl componentClass='select'
                  value={this.state.location_id} name='location' onChange={this.handleLocationChange}>
                  {this.props.locations && this.props.locations.map(location => (
                    <option value={location.id} key={location.id}>{location.name}</option>)
                  )}
                </FormControl>
              </FormGroup>
            </Col>
            <br/>
          </Row>

          <Row>
            <Col md={3}>
              <FormGroup>
                <ControlLabel>Ballast</ControlLabel>
                <FormControl 
                  type='text' 
                  value={this.state.ballast} 
                  name='ballast' 
                  onChange={this.handleInputChange} />
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <ControlLabel>Maximum Depth</ControlLabel>
                <FormControl 
                  type='text' 
                  value={this.state.max_depth} 
                  name='max_depth' 
                  onChange={this.handleInputChange} />
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <ControlLabel>Starting Pressure</ControlLabel>
                <FormControl 
                  type='text' 
                  value={this.state.starting_pressure} 
                  name='starting_pressure' 
                  onChange={this.handleInputChange} />
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <ControlLabel>Final Pressure</ControlLabel>
                <FormControl 
                  type='text' 
                  value={this.state.final_pressure} 
                  name='final_pressure' 
                  onChange={this.handleInputChange} />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <FormGroup>
                <ControlLabel>Comments</ControlLabel>
                <FormControl componentClass='textarea'
                  value={this.state.comments} 
                  name='comments' 
                  onChange={this.handleInputChange} />
              </FormGroup>
            </Col>
          </Row>

          <Link to={'/dives'}>
            <Button>Back</Button>
          </Link>
          <Button type='submit'>Save</Button>
        </Form>
      </Grid>
    );
  }
}

export default DiveForm