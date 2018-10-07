import React from 'react';
import '../styles/PokeCard.css';

class PokeCard extends React.Component {
  render() {
    return (
      <li className="pokemon__list-item">
        <div className="pokemon__card">
          <div className="pokemon__item">
            <img className='pokemon__item-pic' src={this.props.item.sprites.front_default} alt='Pokemon' />
            <p className="pokemon__item-id"> ID/{this.props.item.id}</p>
            </div>
            <div className ="pokemon__info">
            <h4 className="pokemon__info-name" >{this.props.item.name} </h4>
            <ul className="pokemon__info-skills">
              {this.props.item.types
                .map(skill => {
                  return (
                    <li className="pokemon__info-skill">
                      {skill.type.name}
                    </li>
                  )
                })}
            </ul>
            </div>
        </div>
      </li >
    );
  }
}

export default PokeCard;