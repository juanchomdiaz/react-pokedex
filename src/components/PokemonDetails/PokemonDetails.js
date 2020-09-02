import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';

const PokemonDetails = ({history, match}) => {
    return ( 
        <Fragment>
        <h1>{match.params.name}</h1> 
        <Button onClick={() => history.goBack()}>Go back</Button>
        </Fragment>

    );
}
 
export default PokemonDetails;