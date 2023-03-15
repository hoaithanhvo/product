import React, { useEffect, useState } from "react";
import Image from "next/image";

interface IPokemon {
  id: string;
  url: string;
}

function Menu() {
  const [state, setState] = useState<IPokemon[]>([]);
  // const [details, setDetails] = useState<IPokemonDetails | null>(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((data) => {
        setState(data.results);
      });
  }, []);

  return (
    <div>
      <ul>
        {state.map((item) => (
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              item.url.split("/")[6]
            }.png`}
            alt={item.id}
            width={96}
            height={96}
          />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
