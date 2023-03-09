import React, { useEffect, useState } from "react";
import "../Styles/pokemonCard.css";
import axios from "axios";

function PokemonCard({ pokeId, pokemonInfo, setPokemonInfo }) {
  const initialInfo = {
    id: "1",
    pokemon_name: "bulbasaur",
    description:
      "For some time after its birth, it\ngrows by gaining nourishment from\nthe seed on its back.",
    type1: "grass",
    type2: "poison",
    height: 7,
    weight: 69,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    spriteShiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png",
  };

  const fetchPokeData = async (id) => {
    const pokeData = await axios.get(`http://127.0.0.1:8000/pokemondata/table`);
    console.log(pokeData);
    setPokemonInfo(pokeData.data[pokeId - 1]);
  };

  useEffect(() => {
    fetchPokeData(pokeId);
    console.log("PokeData ", pokemonInfo);
  }, [pokeId]);

  return (
    <div className="pokemonCard">
      <div className="topChart">
        <div className="leftTopChart">
          {pokemonInfo ? (
            <>
              <img src={pokemonInfo.sprite} width="300px" alt="pokemon" />
              <h2>No.{pokemonInfo.id}</h2>
            </>
          ) : (
            <>
              <img src={initialInfo.sprite} width="300px" alt="pokemon" />
              <h2>No.{initialInfo.id}</h2>
            </>
          )}
        </div>
        <div className="rightTopChart">
          {pokemonInfo ? (
            <>
              <h2 className="toUpper">{pokemonInfo.pokemon_name}</h2>
              <h2 className="toUpper">{pokemonInfo.type1}</h2>
              <h2>HT {pokemonInfo.height / 10} m </h2>
              <h2>WT {pokemonInfo.weight / 10} lb </h2>
            </>
          ) : (
            <>
              <h2 className="toUpper">{initialInfo.pokemon_name}</h2>
              <h2>{initialInfo.type1}</h2>
              <h2>HT {initialInfo.height / 10} m </h2>
              <h2>WT {initialInfo.weight / 10} lb </h2>
            </>
          )}
        </div>
        <div className="StarTopChart">
          {pokemonInfo ? (
            <>
              <button>Fav</button>
            </>
          ) : (
            <>
              <button>Fav</button>
            </>
          )}
        </div>
      </div>
      <div className="bottomChart">
        {pokemonInfo ? (
          <h2>{pokemonInfo.description}</h2>
        ) : (
          <h2>{initialInfo.description}</h2>
        )}
      </div>
    </div>
  );
}

export default PokemonCard;
