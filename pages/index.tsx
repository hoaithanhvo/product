import Slider from "react-slick";
import Link from "next/link";
import { Inter } from "next/font/google";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import styles from "./Index.module.scss";
import SliderPicture from "@/components/SliderPicture/slider";
import Body from "../components/Body/index";
export default function Home() {
  // const [pokemon, setPokemon] = useState<
  //   { name: string; url: string }[] | null
  // >(null);
  // const [searchInput, setSearchInput] = useState("");

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  //     const data = await response.json();
  //     console.log(data);

  //     setPokemon(data.results);
  //   }
  //   fetchData();
  // }, []);

  // const search_pokemon = () => {
  //   let input = document.getElementById("searchbar") as HTMLInputElement;
  //   let searchInput = input.value.toLowerCase();
  //   console.log(searchInput);

  //   let x = document.getElementsByClassName(
  //     "card"
  //   ) as HTMLCollectionOf<HTMLElement>;

  //   for (let i = 0; i < x.length; i++) {
  //     if (!x[i].innerHTML.toLowerCase().includes(searchInput)) {
  //       x[i].style.display = "none";
  //     } else if (searchInput == null) {
  //       console.log("rông");
  //       const element = <h1>Hello, world</h1>;
  //       ReactDOM.render(element, document.getElementById("root"));
  //     } else {
  //       x[i].style.display = "list-item";
  //     }
  //   }
  // };

  // if (!pokemon) {
  //   return <div>Loading...</div>;
  // }

  // const filteredPokemon =
  //   searchInput === ""
  //     ? pokemon
  //     : pokemon.filter((p) => p.name.toLowerCase().includes(searchInput));

  return (
    <div className={styles.main}>
      <div id="root"></div>
      <SliderPicture />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <div className={styles.pokemon}>
        <div>
          <h1>Pokemon List</h1>
          <div className={styles.pokemon_input}>
            <input
              type="text"
              value={searchInput}
              style={{ width: "500px", height: "30px", borderRadius: "10px" }}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search Pokemon"
            />
            <button onClick={search_pokemon}>Search</button>
          </div>
          <ul className={styles.pokemon_icon}>
            {filteredPokemon.map((p) => (
              <li key={p.name} className={`${styles.pokemon_li} card`}>
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
                <h6>thêm vào giỏ hàng </h6>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
      <Body />
    </div>
  );
}
