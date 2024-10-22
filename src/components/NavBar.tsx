interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

// interface changePokemonProps {
//   i: number;
// }

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
  return (
    <nav>
      {pokemonList.map((pokemon, index) => (
        <button
          key={pokemon.name}
          type="button"
          onClick={() => {
            setPokemonIndex(index);
          }}
        >
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
