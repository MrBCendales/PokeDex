const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
//PORT
const PORT = 8080;

const pokeControler = require("./pokeModels/poke.controler");

app.get("/poke/:id", pokeControler.getBasicInfo);
app.get("/specialpoke/:id", pokeControler.getSpecialInfo);

/*app.get("/", async (req, res) => {
  const pokemonList = [];
  for (let i = 1; i <= 151; i++) {
    const pokemonInfo = {};
    const data = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${i}`
    );
    pokemonInfo["id"] = data.data.id;
    pokemonInfo["name"] = data.data.name;
    
    let descData = data.data.flavor_text_entries[11].flavor_text;
    
    pokemonInfo["description"] = descData.replace(/(\r\n|\n|\r)/gm, " ");

    const data2 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);

    const pokeType = data2.data.types[1] ? data2.data.types[1].type.name : "";
    pokemonInfo["type1"] = data2.data.types[0].type.name;
    pokemonInfo["type2"] = pokeType;
    pokemonInfo["height"] = data2.data.height;
    pokemonInfo["weight"] = data2.data.weight;
    pokemonInfo["sprite"] =
      data2.data.sprites.other["official-artwork"].front_default;
    pokemonInfo["spriteShiny"] =
      data2.data.sprites.other["official-artwork"].front_shiny;
    
    pokemonList.push(pokemonInfo);
  }

  res.status(200).send(pokemonList);
});*/

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
