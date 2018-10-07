import React, { Component } from 'react';
import Search from './Search';
import PokeList from './PokeList';
import Header from './Header';
import Footer from './Footer';
import '../styles/App.css';

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
        <Header />
        <Search
          mypoke={this.filterName} />
        <PokeList 
        pokemons= {this.state.pokemons} 
        name= {this.state.name}/>
        <Footer />
      </div>
    );
  }
}

export default App;
