import React from 'react';
import '../styles/Search.css';

class Search extends React.Component {
  render() {
    return (
      <div className="pokemon__search">
         <input className="pokemon__search-filter" type="text" placeholder="Search Pokemon by name"
          onChange={this.props.mypoke} />
      </div>
    );
  }
}

export default Search;
