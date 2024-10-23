import "./App.css";
import { useEffect, useState } from "react";

import PokemonCard from "./components/PokemonCard.tsx";
import NavBar from "./components/NavBar.tsx";

function App() {
  useEffect(() => {
    alert("Hello Pokemon trainer :) ");
  }, []);

  const pokemonList = [
    {
      name: "Bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "Charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "Squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "Pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "Mew",
    },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0);

  if (pokemonIndex === 3) alert("pika pikachu !!!");

  return (
    <section>
      <NavBar setPokemonIndex={setPokemonIndex} pokemonList={pokemonList} />
      <PokemonCard
        name={pokemonList[pokemonIndex].name}
        imgSrc={pokemonList[pokemonIndex].imgSrc}
      />
    </section>
  );
}

export default App;
