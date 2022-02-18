import React from 'react';
import PropType from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    console.log(headline);
    return <h2>{headline}</h2>;
  }
}

Title.propTypes = {
  headline: PropType.string.isRequired,
};
export default Title;
