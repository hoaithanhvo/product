import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import { Inter } from "next/font/google";
import React, { useState, useEffect } from "react";
// import { renderToString } from "react-dom/server";
import ReactDOM from "react-dom";

import Header from "../components/Header/Header";
import styles from "./Index.module.scss";

export default function Home() {
  const [pokemon, setPokemon] = useState<
    { name: string; url: string }[] | null
  >(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await response.json();
      console.log(data);

      setPokemon(data.results);
    }
    fetchData();
  }, []);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.main}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className={styles.pokemon}>
        <div>
          <h1>Pokemon List</h1>
          <ul className={styles.pokemon_icon}>
            {pokemon.map((p) => (
              <li key={p.name} className={styles.pokemon_li}>
                <Image
                  className={styles.image}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    p.url.split("/")[6]
                  }.png`}
                  alt={p.name}
                  width={96}
                  height={96}
                />
                {p.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
