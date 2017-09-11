import React from 'react';

class Header extends React.Component {
  render() {
    return(
      <h1
        style={{
          backgroundColor:'#FAD331',
          fontFamily:'Arial,Roboto,Helvetica,sans-serif',
          color: '#FFFFFF',
          textAlign: 'center',
          margin: '0',
          padding: '40'
        }}>
        Welcome to Your <span style={{color: '#FF0000'}}>Shell</span> Data
      </h1>
    );
  }
}
export default Header;
