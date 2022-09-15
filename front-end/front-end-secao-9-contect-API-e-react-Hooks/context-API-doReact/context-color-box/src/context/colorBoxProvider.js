import React, { Component } from 'react'
import ColorBoxContext from "./colorBoxContext";

class ColorBoxProvider extends Component {
  state = {
    arrayOfColors: ['red', 'blue', 'DeepPink', 'green', 'indigo'],
  }

  render() {
    const { children } = this.props;
    const contextType = { ...this.state };

    return (
      <ColorBoxContext.Provider value={ contextType }>
        { children }
      </ColorBoxContext.Provider>
    )
  }
}

export default ColorBoxProvider;

//usar contextType para passar valores é considerado boa pratica