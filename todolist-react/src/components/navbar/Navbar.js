import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <h1>Todolist</h1>
        <nav>
          <ul>
            <li><a href="#">Accueil</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
