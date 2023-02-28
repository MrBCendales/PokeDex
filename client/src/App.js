import "./App.css";
import {
  BrowserRouter,
  BrowserRouter as Routes,
  Route,
} from "react-router-dom";

import Pokedex from "./Components/Pokedex";
import FirstPage from "./Components/FirstPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/FirstPage" component={FirstPage} />
        <Route exact path="/Pokedex" component={Pokedex} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
