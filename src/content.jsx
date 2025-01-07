import { useState } from "react";
import PropTypes from "prop-types";

export function Content({ allPokemons, setAll12Pokemons, error, loading }) {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedPokemonsArray, setClickedPokemonsArray] = useState([]);

  if (score > bestScore) {
    setBestScore(score);
  }

  function scorePlusOne() {
    setScore((score) => score + 1);
  }
  function clickedPokemons(e) {
    if (clickedPokemonsArray.includes(e.currentTarget.id)) {
      setScore(0);
      setClickedPokemonsArray([]);
      return;
    }
    setClickedPokemonsArray([...clickedPokemonsArray, e.currentTarget.id]);
  }
  function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    setAll12Pokemons(array);
  }
  function multipleFunctions(e) {
    scorePlusOne();
    clickedPokemons(e);
    shuffle(allPokemons);
  }
  if (error) {
    return <div className="loading">Couldn't fetch API</div>;
  }
  if (loading) {
    return <div className="loading">Loading . . .</div>;
  }

  return (
    <div className="container">
      <div className="flex">
        <div>
          <h1 className="h1style">Test your memory!</h1>
          <h2 className="h2style">Don't click a pokemon more than once</h2>
        </div>
        <div>
          <p>Score: {score}</p>
          <p>Best Score: {bestScore}</p>
        </div>
      </div>
      <div className="grid">
        <div className="card" id={allPokemons[0].name} onClick={multipleFunctions}>
          <img src={allPokemons[0].sprites.front_default} alt="" className="image" />
          <h3 className="h3style">{allPokemons[0].name}</h3>
        </div>
        <div className="card" id={allPokemons[1].name} onClick={multipleFunctions}>
          <img src={allPokemons[1].sprites.front_default} alt="" className="image" />
          <h3 className="h3style">{allPokemons[1].name}</h3>
        </div>
        <div className="card" id={allPokemons[2].name} onClick={multipleFunctions}>
          <img src={allPokemons[2].sprites.front_default} alt="" className="image" />
          <h3 className="h3style">{allPokemons[2].name}</h3>
        </div>
        <div className="card" id={allPokemons[3].name} onClick={multipleFunctions}>
          <img src={allPokemons[3].sprites.front_default} alt="" className="image" />
          <h3 className="h3style">{allPokemons[3].name}</h3>
        </div>
        <div className="card" id={allPokemons[4].name} onClick={multipleFunctions}>
          <img src={allPokemons[4].sprites.front_default} alt="" className="image" />
          <h3 className="h3style">{allPokemons[4].name}</h3>
        </div>
        <div className="card" id={allPokemons[5].name} onClick={multipleFunctions}>
          <img src={allPokemons[5].sprites.front_default} alt="" className="image" />
          <h3 className="h3style">{allPokemons[5].name}</h3>
        </div>
        <div className="card" id={allPokemons[6].name} onClick={multipleFunctions}>
          <img src={allPokemons[6].sprites.front_default} alt="" className="image" />
          <h3 className="h3style">{allPokemons[6].name}</h3>
        </div>
        <div className="card" id={allPokemons[7].name} onClick={multipleFunctions}>
          <img src={allPokemons[7].sprites.front_default} alt="" className="image" />
          <h3 className="h3style">{allPokemons[7].name}</h3>
        </div>
        <div className="card" id={allPokemons[8].name} onClick={multipleFunctions}>
          <img src={allPokemons[8].sprites.front_default} alt="" className="image" />
          <h3 className="h3style">{allPokemons[8].name}</h3>
        </div>
        <div className="card" id={allPokemons[9].name} onClick={multipleFunctions}>
          <img src={allPokemons[9].sprites.front_default} alt="" className="image" />
          <h3 className="h3style">{allPokemons[9].name}</h3>
        </div>
        <div className="card" id={allPokemons[10].name} onClick={multipleFunctions}>
          <img src={allPokemons[10].sprites.front_default} alt="" className="image" />
          <h3 className="h3style">{allPokemons[10].name}</h3>
        </div>
        <div className="card" id={allPokemons[11].name} onClick={multipleFunctions}>
          <img src={allPokemons[11].sprites.front_default} alt="" className="image" />
          <h3 className="h3style">{allPokemons[11].name}</h3>
        </div>
        <div className="card" id={allPokemons[12].name} onClick={multipleFunctions}>
          <img src={allPokemons[12].sprites.front_default} alt="" className="image" />
          <h3 className="h3style">{allPokemons[12].name}</h3>
        </div>
        <div className="card" id={allPokemons[13].name} onClick={multipleFunctions}>
          <img src={allPokemons[13].sprites.front_default} alt="" className="image" />
          <h3 className="h3style">{allPokemons[13].name}</h3>
        </div>
      </div>
    </div>
  );
}

Content.propTypes = {
  allPokemons: PropTypes.array,
};
