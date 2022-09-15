import React from 'react';
import ColorBoxContext from '../context/colorBoxContext';
import '../styles/box.css';

class ColorBox extends React.Component {
  state = {
    currColor: 'white',
    currIndex: 0,
  }

  changeColor = () => {
    const { arrayOfColors } = this.context;
    const { currIndex } = this.state;

    if(currIndex <= arrayOfColors.length - 1) {
      this.setState((prevState) => ({
        currColor: arrayOfColors[currIndex],
        currIndex: prevState.currIndex + 1,
      }))        
    } else {
        this.setState({
            currColor: 'white',
            currIndex: 0,
         }) 
    }
       
  }
  render() {
    const { currColor } = this.state;
    console.log(currColor);
    return(
      <button
        type="button"
        className="box"
        style={ { backgroundColor: currColor } }
        onClick={ this.changeColor }
      >
        Click me to change my color!
      </button>
    )
  }
}

ColorBox.contextType = ColorBoxContext;

export default ColorBox;