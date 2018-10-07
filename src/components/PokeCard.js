import React from 'react';
import '../styles/PokeCard.css';

class PokeCard extends React.Component {
  render() {
    return (
      <div className="pokemon__card">
        <li className="pokemon__list-item">
          <div className="pokemon__texts">
            <img className='pokemon__list-pic' src={this.props.item.sprites.front_default} alt='Pokemon' />
            <h3 className="pokemon__list-id"> ID/{this.props.item.id}</h3>
            <h2 className="pokemon__list-name" >{this.props.item.name} </h2>
            <ul className="skills">
              {this.props.item.types
                .map(skill => {
                  return (
                    <li className="pokeSkill">
                      {skill.type.name}
                    </li>
                  )
                })}
            </ul>
          </div>
        </li>
      </div>
    );
  }
}

export default PokeCard;