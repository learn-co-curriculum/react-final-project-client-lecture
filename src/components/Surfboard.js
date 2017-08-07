import React from 'react';
import { connect } from 'react-redux';

const Surfboard = ({ surfboard }) => {
  return (
    <div>
      {surfboard ?
        <div>
          <h3>{surfboard.name}</h3>
          <p>Price: ${surfboard.price}</p>
          <img className="SurfboardImage" src={surfboard.img_url} alt={surfboard.name} />
          <p>Length: {surfboard.length} inches</p>
        </div>
        :
        <div>
          ...loading 
        </div>
      }
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    surfboard: state.surfboards.find(board => board.id == ownProps.match.params.surfboardId)
  }
}

export default connect(mapStateToProps)(Surfboard);