import React from "react";
import { useNavigate } from "react-router-dom";

function FirstPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/Pokedex");
  };
  return (
    <div>
      <h4 onClick={() => handleLogin}>PRESS START</h4>
    </div>
  );
}

export default FirstPage;
