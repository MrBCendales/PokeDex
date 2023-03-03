import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import "../Styles/ScrollBar.css";
import { ScrollBarData } from "./ScrollBarData";

function ScrollBar({ setPokeId }) {
  return (
    <div className="scrollbar">
      <Scrollbars style={{ width: 400, height: 680 }}>
        <ul className="scrollbarList">
          {ScrollBarData.map((value, key) => {
            return (
              <li
                key={key}
                className="pokeRow pixel-borders pixel-borders--custom"
                id={window.location.pathname === value.link ? "active" : ""}
                onClick={() => setPokeId(value.id)}
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

export default ScrollBar;
