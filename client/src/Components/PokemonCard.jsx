import React, { useEffect, useState } from "react";
import "../Styles/pokemonCard.css";
import axios from "axios";

function PokemonCard({ pokeId, pokemonInfo, setPokemonInfo }) {
  const fetchPokeData = async (id) => {
    const pokeData = await axios.get(`http://localhost:8080/poke/${id}`);
    setPokemonInfo(pokeData.data[0]);
  };

  useEffect(() => {
    fetchPokeData(pokeId);
  }, [pokeId]);

  return (
    <div className="pokemonCard">
      <div className="topChart">
        <div className="leftTopChart">
          {pokemonInfo ? (
            <img src={pokemonInfo.sprite} width="300" alt="pokemon" />
          ) : (
            ""
          )}
          {pokemonInfo ? <h1>No.{pokemonInfo.id}</h1> : ""}
        </div>
        <div className="rightTopChart">
          {pokemonInfo ? <h1>{pokemonInfo.pokemon_name}</h1> : ""}
          {pokemonInfo ? <h1>{pokemonInfo.type1}</h1> : ""}
          {pokemonInfo ? <h2>HT {pokemonInfo.height / 10} m </h2> : ""}
          {pokemonInfo ? <h2>WT {pokemonInfo.weight / 10} lb </h2> : ""}
        </div>
      </div>
      <div className="bottomChart">
        {pokemonInfo ? <h2>{pokemonInfo.description}</h2> : ""}
      </div>
    </div>
  );
}

export default PokemonCard;
