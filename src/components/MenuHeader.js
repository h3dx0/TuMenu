import React from 'react';
//let yeomanImage = require('../images/yeoman.png');

class MenuHeader extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'MenuHeader';
  }
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <p>Tu Menu </p>
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Reserva</a>
            </li>
            <li>
              <a href="#">Carrito</a>
            </li>
          </ul>
        </div>
      </nav>
      );
  }
}

export default MenuHeader;
