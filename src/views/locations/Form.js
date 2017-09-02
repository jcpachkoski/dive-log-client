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
  Col,
  Well
 } from 'react-bootstrap';
 import classNames from 'classnames';
 import validator from 'validator';

import { LOCATIONS_ROOT } from '../../constants';
 import ErrorList from '../components/ErrorList';

class LocationForm extends Component  {
  constructor() {
    super();
    this.state = {
      validation: {
        name: { isValid: true, message: '' },
        city: { isValid: true, message: '' },
        country: { isValid: true, message: '' },
        category: { isValid: true, message: '' },
        description: { isValid: true, message: '' }
      }
    };
  }

  componentWillMount() {
    this.state = {
      ...this.props.location
    };
  }

  componentWillReceiveProps() {
    this.setState({ submitted: false });
  }

  handleInputChange = event => {
    event.preventDefault();

    var state = this.state;
    state[event.target.name] = event.target.value;

    this.setState(state);
  }
    
  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ submitted: true });

    this.props.onSubmit({
      ...this.state
    });
  }

  formIsValid = () => {
    var state = this.state;

    return true;
  }

  resetValidationStates = () => {
    var validation = this.state.validation;

    Object.keys(validation).map(key => (
      validation[key] = { isValid: true, message: '' }
    ));
    this.setState({validation: validation});
  }

  render() {
    console.log(this.state)
    let title = '',
        backButtonUrl = '';

    if (this.state.id > 0) {
      title = 'Editing Location';
      backButtonUrl = `${LOCATIONS_ROOT}/${this.state.id}`;
    } else {
      title = 'New Location';
      backButtonUrl = `${LOCATIONS_ROOT}`;
    }

    return (
      <Grid>
        <Form onSubmit={this.handleFormSubmit}>
          <h2>{title}</h2>

          {this.props.errors &&
            <Row>
              <Col md={12}>
                <Well className='error'><ErrorList errors={this.props.errors}/></Well>
              </Col>
            </Row>
          }
          <Row>
            <Col md={3}>
              <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.name}
                  placeholder="location name"
                  name='name'
                  onChange={this.handleInputChange}
                />
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <ControlLabel>City</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.city}
                  placeholder="location city"
                  name='city'
                  onChange={this.handleInputChange}
                />
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <ControlLabel>Country</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.country}
                  placeholder="location country"
                  name='country'
                  onChange={this.handleInputChange}
                />
                <span className="help-block">{this.state.country.message}</span>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <ControlLabel>Category</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.category}
                  placeholder="type of dive (wall, reef, wreck, etc)"
                  name='category'
                  onChange={this.handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <FormGroup>
                <ControlLabel>Description</ControlLabel>
                <FormControl componentClass='textarea'
                  value={this.state.description} 
                  name='description' 
                  onChange={this.handleInputChange} />
              </FormGroup>
            </Col>
          </Row>

          <Link to={backButtonUrl}>
            <Button>Back</Button>
          </Link>
          <Button disabled={!!this.state.submitted} type='submit'>Save</Button>
        </Form>
      </Grid>
    );
  }
}

export default LocationForm