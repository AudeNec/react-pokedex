interface PokemonProps {
  name: string;
  imgSrc?: string;
}

function PokemonCard({ name, imgSrc }: PokemonProps) {
  const pokemon = { name, imgSrc };
  return (
    <figure>
      {pokemon.imgSrc ? (
        <img alt={pokemon.name} src={pokemon.imgSrc} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
