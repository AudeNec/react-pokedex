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

  return (
    <section>
    {pokemonIndex > 0 ? (
      <button type="button" onClick={previous}>
        Précédent
      </button>
    ) : (
      <></>
    )}
    {pokemonIndex < pokemonList.length - 1 ? (
      <button type="button" onClick={next}>
        Suivant
      </button>
    ) : (
      <></>
    )}
  </section>
  );
}

export default NavBar;
