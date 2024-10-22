interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

function NavBar() {
  return (
    <section>
      <button type="button">Précédent</button>
      <button type="button">Suivant</button>
    </section>
  );
}

/* <button type="button" onClick={previous}>
<button type="button" onClick={next}> */
