import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import FavPokemonScrollbar from "../Components/Favorites/FavPokemonScrollbar";
import FavPokemonCard from "../Components/Favorites/FavPokemonCard";
import Emptywindow from "../Components/Favorites/Emptywindow";

function Favorites() {
  const [showInfo, setShowInfo] = useState(false);
  const [favPokeId, setFavPokeId] = useState(0);
  const [favPokemonInfo, setFavPokemonInfo] = useState({});
  return (
    <div className="favContainer">
      <Sidebar />
      {showInfo === false ? (
        <>
          <Emptywindow />
        </>
      ) : (
        <>
          <FavPokemonScrollbar setFavPokeId={setFavPokeId} />
          <FavPokemonCard
            favPokeId={favPokeId}
            favPokemonInfo={favPokemonInfo}
            setFavPokemonInfo={setFavPokemonInfo}
          />
        </>
      )}
    </div>
  );
}

export default Favorites;
