import { useEffect } from "react";

export function Pokemons({ getPokemonList }) {
  async function getPokemons() {
    const allPokemons = [];

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
    ]);

    for (let i = 0; i < 12; i++) {
      const pokemonData = await response[i].json();
      allPokemons.push(pokemonData);
    }
    getPokemonList(allPokemons);
  }

  useEffect(() => {
    console.log(`HOLA`);
    getPokemons();
  }, []);
}
