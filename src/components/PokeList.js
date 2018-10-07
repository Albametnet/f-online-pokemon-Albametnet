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
              // <div>
              //   <li className="pokemon__list-item">
              //     <div className="pokemon__texts">
              //       <img className='pokemon__list-pic' src={item.sprites.front_default} alt='Pokemon' />
              //       <h3 className="pokemon__list-id"> ID/{item.id}</h3>
              //       <h2 className="pokemon__list-name" >{item.name} </h2>
              //       <ul className="skills">
              //         {item.types
              //           .map(skill => {
              //             return (
              //               <li className="pokeSkill">
              //                 {skill.type.name}
              //               </li>
              //             )
              //           })}
              //       </ul>
              //     </div>
              //   </li>
              // </div>
            )
          })}
      </ul>
    );
  }
}

export default PokeList;
