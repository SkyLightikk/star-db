import React from 'react';
import { PlanetList, PlanetDetails } from '../sw-components';
import Row from "../row/row";
import {withRouter} from "react-router-dom";

const PlanetsPage = ({history, match}) => {

    return(
      <Row 
        left={<PlanetList onItemSelected={id => history.push(id)}/>}
        right={<PlanetDetails itemId={match.params.id} />}/>
    );
};

export default withRouter(PlanetsPage);
