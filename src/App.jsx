import { useState, useEffect } from "react";
import { Pokemons } from "./Pokemons.jsx";
import { Content } from "./content.jsx";
import "./App.css";

function App() {
  const [allPokemons, setAll12Pokemons] = useState(``);

  useEffect(() => {
    getPokemons();
  }, []);

  async function getPokemons() {
    const allPokemonsArray = [];

    const response = await Promise.all([
      fetch(`https://pokeapi.co/api/v2/pokemon/blastoise`),
      fetch(`https://pokeapi.co/api/v2/pokemon/golduck`),
      fetch(`https://pokeapi.co/api/v2/pokemon/poliwrath`),
      fetch(`https://pokeapi.co/api/v2/pokemon/slowbro`),
      fetch(`https://pokeapi.co/api/v2/pokemon/dewgong`),
      fetch(`https://pokeapi.co/api/v2/pokemon/cloyster`),
      fetch(`https://pokeapi.co/api/v2/pokemon/kingler`),
      fetch(`https://pokeapi.co/api/v2/pokemon/seadra`),
      fetch(`https://pokeapi.co/api/v2/pokemon/starmie`),
      fetch(`https://pokeapi.co/api/v2/pokemon/gyarados`),
      fetch(`https://pokeapi.co/api/v2/pokemon/lapras`),
      fetch(`https://pokeapi.co/api/v2/pokemon/vaporeon`),
      fetch(`https://pokeapi.co/api/v2/pokemon/seaking`),
      fetch(`https://pokeapi.co/api/v2/pokemon/tentacruel`),
    ]);

    for (let i = 0; i < 14; i++) {
      const pokemonData = await response[i].json();
      allPokemonsArray.push(pokemonData);
    }
    // getPokemonList(allPokemons);
    setAll12Pokemons(allPokemonsArray);
  }

  return <Content allPokemons={allPokemons} setAll12Pokemons={setAll12Pokemons} />;
}

export default App;
