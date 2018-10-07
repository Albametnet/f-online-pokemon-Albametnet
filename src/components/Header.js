import React from 'react';
import '../styles/Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="pokemon__header">
        <div className="left__triangle"></div>
        <div className="right__triangle"></div>
      </div>
    );
  }
}

export default Header;