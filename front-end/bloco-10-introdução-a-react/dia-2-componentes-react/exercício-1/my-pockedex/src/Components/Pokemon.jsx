import React from "react";
import PropTypes from "react";

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className="pokemon-Card">
        <img src={ image } alt="" /><br />
        <div className="infos-container">
          <h4>{ name }</h4><br />
          <span><strong>Type:</strong> { type }</span><br />
          <span><strong>Weigth:</strong> { averageWeight.value }{ averageWeight.measurementUnit }</span><br />
        </div>
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
/*   averageWeight: PropTypes.shape({
    value: PropTypes.number,
    measurementUnit: PropTypes.string,
  }) */
}

export default Pokemon;