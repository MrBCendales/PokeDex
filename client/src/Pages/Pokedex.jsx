import React from "react";
import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import ScrollBar from "../Components/ScrollBar";
import PokemonCard from "../Components/PokemonCard";
import "../App.css";

function Pokedex() {
  const [pokeId, setPokeId] = useState(0);
  const [pokemonInfo, setPokemonInfo] = useState({
    id: 0,
  });

  return (
    <div className="container">
      <Sidebar />
      <ScrollBar setPokeId={setPokeId} />
      <PokemonCard
        pokeId={pokeId}
        pokemonInfo={pokemonInfo}
        setPokemonInfo={setPokemonInfo}
      />
    </div>
  );
}

export default Pokedex;
