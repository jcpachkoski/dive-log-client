import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid } from 'react-bootstrap';

import { DIVES_ROOT } from '../../constants';
import DiveListItem from './DiveListItem';

const DiveList = ({
  dives
}) => {
  const renderDives = dives.map(dive => (
    <Link key={dive.id} to={`${DIVES_ROOT}/${dive.id}`}>
      <DiveListItem key={dive.id} dive={dive}/>
    </Link>
  ));

  return (
    <Grid>
      <h1>Your Dives</h1>

      {renderDives}

      <Link to={`${DIVES_ROOT}/new`}>
        <Button>New</Button>
      </Link>
      
    </Grid>
  );
}

export default DiveList