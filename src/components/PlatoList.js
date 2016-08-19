import React from 'react';
import PlatoListItem from './PlatoListItem';

class PlatoList extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'PlatoList';
    }
    render() {
        return (
            <div>
              <PlatoListItem />
            </div>
          );
    }
}

export default PlatoList;
