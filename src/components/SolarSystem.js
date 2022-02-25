import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="container-geral-planetas">
        <div className="container-Title-Planetas">
          <Title headline="Planetas" />
        </div>
        <div className="intro-wrap">
          <div className="intro-background" />
          <div className="intro-solar-system">
            <div data-testid="solar-system">
              <div className="container-planetas">
                {planets.map((element) => (
                  <PlanetCard
                    key={ element.name }
                    planetName={ element.name }
                    planetImage={ element.image }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SolarSystem;
