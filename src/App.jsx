import { useState, useEffect } from "react";
import { Pokemons } from "./Pokemons.jsx";
import { Content } from "./content.jsx";
import "./App.css";

function App() {
  const [allPokemons, setAll12Pokemons] = useState(``);
  const [error, setError] = useState(``);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemons();
  }, []);

  async function getPokemons() {
    const allPokemonsArray = [];
    try {
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
        if (!response[i].ok) {
          throw new Error(`HTTP error: Status ${fetchPokemon.status}`);
        }
        const pokemonData = await response[i].json();
        allPokemonsArray.push(pokemonData);
      }
      // getPokemonList(allPokemons);
      setAll12Pokemons(allPokemonsArray);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return <Content allPokemons={allPokemons} setAll12Pokemons={setAll12Pokemons} error={error} loading={loading} />;
}

export default App;
