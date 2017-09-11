import React from 'react';

class Header extends React.Component {
  render() {
    return(
      <p
        style={{
          backgroundColor:'#FAD331',
          fontFamily:'Arial,Roboto,Helvetica,sans-serif',
          color: '#FFFFFF',
          margin: '0',
          padding: '40',
          fontSize: '30px'
        }}>
        Welcome to Your <span style={{color: '#FF0000'}}>Shell</span> Data
      </p>
    );
  }
}
export default Header;
