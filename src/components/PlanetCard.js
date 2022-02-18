import React from 'react';
import PropType from 'prop-types';
import planets from '../data/planets';

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
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
