import React, { useEffect, useState } from "react";
import "../../Styles/pokemonCard.css";
import axios from "axios";

function FavPokemonCard({ favPokeId, favPokemonInfo, setFavPokemonInfo }) {
  const fetchPokeData = async (id) => {
    const pokeData = await axios.get(`http://127.0.0.1:8000/pokemondata/table`);
    console.log(pokeData);
    setFavPokemonInfo(pokeData.data[favPokeId - 1]);
  };

  useEffect(() => {
    fetchPokeData(favPokeId);
    console.log("PokeData ", favPokemonInfo);
  }, [favPokeId]);

  return (
    <div className="pokemonCard">
      <div className="topChart">
        <div className="leftTopChart">
          {favPokemonInfo ? (
            <>
              <img src={favPokemonInfo.sprite} width="300px" alt="pokemon" />
              <h2>No.{favPokemonInfo.id}</h2>
            </>
          ) : (
            <>""</>
          )}
        </div>
        <div className="rightTopChart">
          {favPokemonInfo ? (
            <>
              <h2 className="toUpper">{favPokemonInfo.pokemon_name}</h2>
              <h2 className="toUpper">{favPokemonInfo.type1}</h2>
              <h2>HT {favPokemonInfo.height / 10} m </h2>
              <h2>WT {favPokemonInfo.weight / 10} lb </h2>
            </>
          ) : (
            <>""</>
          )}
        </div>
      </div>
      <div className="bottomChart">
        {favPokemonInfo ? <h2>{favPokemonInfo.description}</h2> : <h2>""</h2>}
      </div>
    </div>
  );
}
export default FavPokemonCard;
