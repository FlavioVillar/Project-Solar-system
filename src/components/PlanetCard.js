import React from 'react';
import PropType from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    // ! Refatorar - colocar os 2 na mesma props.
    const { planetName } = this.props;
    const { planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        <p data-testid="planet-name">{planetName}</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropType.string.isRequired,
};

PlanetCard.propTypes = {
  planetImage: PropType.string.isRequired,
};

export default PlanetCard;
