import React from 'react';
import PokeCard from './PokeCard';
import '../styles/PokeList.css';


class PokeList extends React.Component {
  render() {
    return (
      <ul className="pokemon__list">
        {this.props.pokemons
          .sort((a, b) => a.id - b.id)
          .filter(item => {
            return item.name.toLowerCase().includes(this.props.name);
          })
          .map(item => {
            return (
              <PokeCard item ={item}/>
            )
          })}
      </ul>
    );
  }
}

export default PokeList;
