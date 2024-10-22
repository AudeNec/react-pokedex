interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
  const next = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  const previous = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  return (
    <section>
      <button type="button" onClick={previous}>
        Previous
      </button>
      <button type="button" onClick={next}>
        Next
      </button>
    </section>
  );
}

export default NavBar;
