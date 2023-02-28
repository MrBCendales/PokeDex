//Controler should take care of asyncronous functions
const pokeModel = require("./poke.model");

module.exports = {
  async getBasicInfo(req, res) {
    const id = JSON.parse(req.params.id);
    const pokemon_name = await pokeModel.getBasicPoke(id);
    res.status(200).send(pokemon_name);
  },
  async getSpecialInfo(req, res) {
    const id = JSON.parse(req.params.id);
    const pokemon_name = await pokeModel.getSpecialPoke(id);
    res.status(200).send(pokemon_name);
  },
};
