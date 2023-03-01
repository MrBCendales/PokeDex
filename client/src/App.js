import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Pokedex from "./Pages/Pokedex";
import FirstPage from "./Pages/FirstPage";
import Favorites from "./Pages/Favorites";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route exact path="/" element={<FirstPage />} />
            <Route exact path="/Pokedex" element={<Pokedex />} />
            <Route exact path="/Favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
