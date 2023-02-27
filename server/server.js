const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());
//PORT
const PORT = 8080;
const pokemonList = [];

app.get("/", async (req, res) => {
  /*for (let i = 100; i <= 151; i++) {
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
  */
  console.log("Hello! ");

  res.status(200).send(pokemonList);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
