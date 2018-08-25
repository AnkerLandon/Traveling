import React, { Component } from 'react';

import GetMap from '../../Components/GetMap/GetMap';
import env from '../../env';

class Map extends Component {
   render() {
    return(
            <GetMap
                isMarkerShown
                googleMapURL={env.MAPURL}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
    );
   }
};
export default Map;