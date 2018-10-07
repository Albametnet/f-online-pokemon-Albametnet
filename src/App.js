import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.filterName = this.filterName.bind(this);
    this.state = {
      pokemons: [],
      name: ''
    }
  }

  componentDidMount() {
    const pokeArray = [];
    for (let i = 1; i <= 25; i++) {
      fetch('https://pokeapi.co/api/v2/pokemon/' + i + '/')
        .then(response => {
          return response.json();
        })

        .then(info => {
          pokeArray.push(info)
          this.setState({ pokemons: [...pokeArray] });
          console.log(this.state.pokemons);
        })
    }
  }
  filterName(e) {
    const mypokemon = e.currentTarget.value.toLowerCase();
    this.setState({
      name: mypokemon
    });
  }

  render() {
    return (
      <div className="App">
        <input className="filter__input" type="text" placeholder="Search Pokemon by name"
          onChange={this.filterName} />
        <ul className="pokemon__list">
          {this.state.pokemons
            .sort((a, b) => a.id - b.id)
            .filter(item => {
              return item.name.toLowerCase().includes(this.state.name);
            })
            .map(item => {
              return (
                <div>
                  <li className="pokemon__list-item">
                    <div className="pokemon__texts">
                      <img className='pokemon__list-pic' src={item.sprites.front_default} alt='Pokemon' />
                      <h3 className="pokemon__list-id"> ID/{item.id}</h3>
                      <h2 className="pokemon__list-name" >{item.name} </h2>
                      <ul className="skills">
                        {item.types
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
              )
            })}
        </ul>
      </div>
    );
  }
}

export default App;
