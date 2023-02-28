import React from "react";
import { useState } from "react";
import axios from "axios";

function Pokedex() {
  const [pokemonInfo, setPokemonInfo] = useState("");

  const fetchPokeData = async (id) => {
    const pokeData = await axios.get(`http://localhost:8080/specialpoke/${id}`);
    setPokemonInfo(pokeData.data[0]);
  };

  const handleClick = () => {
    fetchPokeData(3);
  };
  return (
    <>
      <button onClick={handleClick}></button>
    </>
  );
}

export default Pokedex;
