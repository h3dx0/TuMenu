require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import MenuHeader from './MenuHeader';
import PlatoList from './PlatoList';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      platos: [],
    };
    this.getPlatos();
  }
//esta es la funcion que me devuelve los platos para el home
  getPlatos(){
    var platos = [
        { title: 'Ceviche de res', description: 'Esto es un plato muy buenoooo',price: 120.00},
        { title: 'Hamburguesa', description: 'Esto es un plato muy de comida chatarra',price: 50.00},
        { title: 'Pizza Champiñon', description: 'Esta es la pizza mas mala de todas',price: 150.00},
    ]
    this.setState({platos:platos});
  }

  render() {
    return (
      <div>
        <MenuHeader />
          <PlatoList platos={this.state.platos} />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
