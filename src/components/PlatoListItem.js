import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class PlatoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'PlatoListItem';
    }
    render() {
        return (
            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <img src={yeomanImage} alt="..."></img>
                  <div className="caption">
                    <h3>Thumbnail label</h3>
                    <p>...</p>
                    <p><a href="#" className="btn btn-primary" role="button">Button</a>
                     <a href="#" className="btn btn-default" role="button">Button</a></p>
                  </div>
                </div>
              </div>
          );
    }
}

export default PlatoListItem;
