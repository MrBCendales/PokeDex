//This file speaks with the db
const knex = require("../knex");

const DATABASE_TABLE = "pokemoninfo";

module.exports = {
  DATABASE_TABLE,
  getBasicPoke(id) {
    return knex
      .select({
        id: "id",
        pokemon_name: "pokemon_name",
        description: "description",
        type1: "type1",
        height: "height",
        weight: "weight",
        sprite: "sprite",
      })
      .from(DATABASE_TABLE)
      .where("id", id);
  },
  getSpecialPoke(id) {
    return knex
      .select({
        id: "id",
        pokemon_name: "pokemon_name",
        description: "description",
        type1: "type1",
        type2: "type2",
        height: "height",
        weight: "weight",
        sprite: "sprite",
        spriteShiny: "spriteShiny",
      })
      .from(DATABASE_TABLE)
      .where("id", id);
  },
};
