import React, { Component } from 'react';

// import classes from './Layout.css';
import Map from '../Map/Map';

class layout extends Component {

  render() {
    return (
        <div>
            <h1> HEADER </h1>
            <div> BODY </div>
            <Map />  
            <footer> FOOTER </footer>
        </div> 
    );
  }
}

export default layout;