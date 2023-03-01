import React from "react";
import { Link } from "react-router-dom";
import "../Styles/firstPage.css";

function FirstPage() {
  return (
    <div className="firstPage">
      <Link
        to="/Pokedex"
        style={{ textDecoration: "none" }}
        state={"From FirstPage"}
      >
        <h1>PRESS START</h1>
      </Link>
    </div>
  );
}

export default FirstPage;
