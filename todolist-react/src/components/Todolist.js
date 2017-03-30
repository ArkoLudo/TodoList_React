import React, { Component } from 'react';

import './Todolist.css';
import Navbar from './navbar/Navbar';
import Timeline from './timeline/Timeline';

class Todolist extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Timeline />
      </div>
    );
  }
}

export default Todolist;
