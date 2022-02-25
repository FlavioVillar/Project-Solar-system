import React from 'react';
import PropType from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <div className="container-img">
          <div>
            <img
              className={ `img ${planetName}` }
              src={ planetImage }
              alt={ `Planeta ${planetName}` }
            />
          </div>
        </div>
        <div className="container-name-planet">
          <p data-testid="planet-name">{planetName}</p>
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropType.string.isRequired,
  planetImage: PropType.string.isRequired,
};

export default PlanetCard;
