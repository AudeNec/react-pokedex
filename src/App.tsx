import "./App.css";
import { useState } from "react";

import PokemonCard from "./components/PokemonCard.tsx";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0);
  const next = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  const previous = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  if (pokemonIndex === 0) {
    return (
      <section>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        <button type="button" onClick={next}>
          Suivant
        </button>
      </section>
    );
  } else if (pokemonIndex === pokemonList.length - 1) {
    return (
      <section>
        <button type="button" onClick={previous}>
          Précédent
        </button>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </section>
    );
  } else
    return (
      <section>
        <button type="button" onClick={previous}>
          Précédent
        </button>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        <button type="button" onClick={next}>
          Suivant
        </button>
      </section>
    );
}

export default App;
