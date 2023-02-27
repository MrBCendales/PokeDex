/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("pokemoninfo", function (table) {
    table.integer("id").primary();
    table.string("pokemon_name", 32).notNullable().unique();
    table.string("description", 255);
    table.string("type1", 32).notNullable();
    table.string("type2", 32);
    table.integer("height").notNullable();
    table.integer("weight").notNullable();
    table.string("sprite", 255).notNullable();
    table.string("spriteShiny", 255).notNullable();
    table.boolean("favorite");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("pokemoninfo");
};
