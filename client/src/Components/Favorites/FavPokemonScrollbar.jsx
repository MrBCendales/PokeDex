import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import "../../Styles/ScrollBar.css";

function FavPokemonScrollbar({ setFavPokeId }) {
  const ScrollBarData = {};
  return (
    <div className="scrollbar">
      <Scrollbars
        className="scrollbarGeneral"
        style={{ width: 400, height: 610 }}
      >
        <ul className="scrollbarList">
          {ScrollBarData.map((value, key) => {
            return (
              <li
                key={key}
                className="pokeRow pixel-borders pixel-borders--custom"
                id={window.location.pathname === value.link ? "active" : ""}
                onClick={() => setFavPokeId(value.id)}
              >
                <div className="scrollId">{value.id}</div>
                <div className="scrollName">{value.name}</div>
              </li>
            );
          })}
        </ul>
      </Scrollbars>
    </div>
  );
}

export default FavPokemonScrollbar;
