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
    if (pokemonIndex < pokemonList.length - 1)
      setPokemonIndex(pokemonIndex + 1);
    else alert("Plus de Pokemon :(");
  };
  const previous = () => {
    if (pokemonIndex > 0) setPokemonIndex(pokemonIndex - 1);
    else alert("Plus de Pokemon :(");
  };

  if (pokemonIndex === 0) {
    return (
      <section>
        <button type="button" onClick={next}>
          Next
        </button>
      </section>
    );
  }

  else if (pokemonIndex === pokemonList.length - 1) {
    return (
      <section>
        <button type="button" onClick={previous}>
          Previous
        </button>
      </section>
    );
  }

  else return (
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
