/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("pokemoninfo").del();
  await knex("pokemoninfo").insert([
    {
      id: 1,
      pokemon_name: "bulbasaur",
      description:
        "For some time after its birth, it grows by gaining nourishment from the seed on its back.",
      type1: "grass",
      type2: "poison",
      height: 7,
      weight: 69,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png",
    },
    {
      id: 2,
      pokemon_name: "ivysaur",
      description:
        "When the bud on its back starts swelling, a sweet aroma wafts to indicate the flower’s coming bloom.",
      type1: "grass",
      type2: "poison",
      height: 10,
      weight: 130,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/2.png",
    },
    {
      id: 3,
      pokemon_name: "venusaur",
      description:
        "After a rainy day, the flower on its back smells stronger. The scent attracts other Pokémon.",
      type1: "grass",
      type2: "poison",
      height: 20,
      weight: 1000,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/3.png",
    },
    {
      id: 4,
      pokemon_name: "charmander",
      description:
        "The fire on the tip of its tail is a measure of its life. If healthy, its tail burns intensely.",
      type1: "fire",
      type2: "",
      height: 6,
      weight: 85,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/4.png",
    },
    {
      id: 5,
      pokemon_name: "charmeleon",
      description:
        "In the rocky mountains where CHARMELEON live, their fiery tails shine at night like stars.",
      type1: "fire",
      type2: "",
      height: 11,
      weight: 190,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/5.png",
    },
    {
      id: 6,
      pokemon_name: "charizard",
      description:
        "It is said that CHARIZARD’s fire burns hotter if it has experienced harsh battles.",
      type1: "fire",
      type2: "flying",
      height: 17,
      weight: 905,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/6.png",
    },
    {
      id: 7,
      pokemon_name: "squirtle",
      description:
        "It shelters itself in its shell, then strikes back with spouts of water at every opportunity.",
      type1: "water",
      type2: "",
      height: 5,
      weight: 90,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/7.png",
    },
    {
      id: 8,
      pokemon_name: "wartortle",
      description:
        "It is said to live 10,000 years. Its furry tail is popular as a symbol of longevity.",
      type1: "water",
      type2: "",
      height: 10,
      weight: 225,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/8.png",
    },
    {
      id: 9,
      pokemon_name: "blastoise",
      description:
        "The jets of water it spouts from the rocket cannons on its shell can punch through thick steel.",
      type1: "water",
      type2: "",
      height: 16,
      weight: 855,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/9.png",
    },
    {
      id: 10,
      pokemon_name: "caterpie",
      description:
        "It is covered with a green skin. When it grows, it sheds the skin, covers itself with silk, and becomes a cocoon.",
      type1: "bug",
      type2: "",
      height: 3,
      weight: 29,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10.png",
    },
    {
      id: 11,
      pokemon_name: "metapod",
      description:
        "A steel-hard shell protects its tender body. It quietly endures hardships while awaiting evolution.",
      type1: "bug",
      type2: "",
      height: 7,
      weight: 99,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/11.png",
    },
    {
      id: 12,
      pokemon_name: "butterfree",
      description:
        "It loves the honey of flowers and can locate flower patches that have even tiny amounts of pollen.",
      type1: "bug",
      type2: "flying",
      height: 11,
      weight: 320,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/12.png",
    },
    {
      id: 13,
      pokemon_name: "weedle",
      description:
        "It eats its weight in leaves every day. It fends off attackers with the needle on its head.",
      type1: "bug",
      type2: "poison",
      height: 3,
      weight: 32,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/13.png",
    },
    {
      id: 14,
      pokemon_name: "kakuna",
      description:
        "While awaiting evolution, it hides from predators under leaves and in nooks of branches.",
      type1: "bug",
      type2: "poison",
      height: 6,
      weight: 100,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/14.png",
    },
    {
      id: 15,
      pokemon_name: "beedrill",
      description:
        "It flies at high speed and attacks using  the large venomous stingers on its forelegs and tail.",
      type1: "bug",
      type2: "poison",
      height: 10,
      weight: 295,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/15.png",
    },
    {
      id: 16,
      pokemon_name: "pidgey",
      description:
        "It is docile and prefers to avoid conflict. If disturbed, however, it can ferociously strike back.",
      type1: "normal",
      type2: "flying",
      height: 3,
      weight: 18,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/16.png",
    },
    {
      id: 17,
      pokemon_name: "pidgeotto",
      description:
        "It flies over its wide territory in search of prey, downing it with its highly developed claws.",
      type1: "normal",
      type2: "flying",
      height: 11,
      weight: 300,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/17.png",
    },
    {
      id: 18,
      pokemon_name: "pidgeot",
      description:
        "By flapping its wings with all its might, PIDGEOT can make a gust of wind capable of bending tall trees.",
      type1: "normal",
      type2: "flying",
      height: 15,
      weight: 395,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/18.png",
    },
    {
      id: 19,
      pokemon_name: "rattata",
      description:
        "Bites anything when it attacks. Small and very quick, it is a common sight in many places.",
      type1: "normal",
      type2: "",
      height: 3,
      weight: 35,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/19.png",
    },
    {
      id: 20,
      pokemon_name: "raticate",
      description:
        "It uses its whiskers to maintain its balance. It apparently slows down if they are cut off.",
      type1: "normal",
      type2: "",
      height: 7,
      weight: 185,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/20.png",
    },
    {
      id: 21,
      pokemon_name: "spearow",
      description:
        "Eats bugs in grassy areas. It has to flap its short wings at high speed to stay airborne.",
      type1: "normal",
      type2: "flying",
      height: 3,
      weight: 20,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/21.png",
    },
    {
      id: 22,
      pokemon_name: "fearow",
      description:
        "It has the stamina to fly all day on its broad wings. It fights by using its sharp beak.",
      type1: "normal",
      type2: "flying",
      height: 12,
      weight: 380,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/22.png",
    },
    {
      id: 23,
      pokemon_name: "ekans",
      description:
        "It sneaks through grass without making a sound and strikes unsuspecting prey from behind.",
      type1: "poison",
      type2: "",
      height: 20,
      weight: 69,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/23.png",
    },
    {
      id: 24,
      pokemon_name: "arbok",
      description:
        "The pattern on its belly is for intimidation. It constricts foes while they are frozen in fear.",
      type1: "poison",
      type2: "",
      height: 35,
      weight: 650,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/24.png",
    },
    {
      id: 25,
      pokemon_name: "pikachu",
      description:
        "It lives in forests with others. It stores electricity in the pouches on its cheeks.",
      type1: "electric",
      type2: "",
      height: 4,
      weight: 60,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/25.png",
    },
    {
      id: 26,
      pokemon_name: "raichu",
      description:
        "Its long tail serves as a ground to protect itself from its own high-voltage power.",
      type1: "electric",
      type2: "",
      height: 8,
      weight: 300,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/26.png",
    },
    {
      id: 27,
      pokemon_name: "sandshrew",
      description:
        "To protect itself from attackers, it curls up into a ball. It lives in arid regions with minimal rainfall.",
      type1: "ground",
      type2: "",
      height: 6,
      weight: 120,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/27.png",
    },
    {
      id: 28,
      pokemon_name: "sandslash",
      description:
        "It curls up, then rolls into foes with its back. Its sharp spines inflict severe damage.",
      type1: "ground",
      type2: "",
      height: 10,
      weight: 295,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/28.png",
    },
    {
      id: 29,
      pokemon_name: "nidoran-f",
      description:
        "While it does not prefer to fight, even one drop of the poison it secretes from barbs can be fatal.",
      type1: "poison",
      type2: "",
      height: 4,
      weight: 70,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/29.png",
    },
    {
      id: 30,
      pokemon_name: "nidorina",
      description:
        "When it senses danger, it raises all the barbs on its body. These barbs grow slower than NIDORINO’s.",
      type1: "poison",
      type2: "",
      height: 8,
      weight: 200,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/30.png",
    },
    {
      id: 31,
      pokemon_name: "nidoqueen",
      description:
        "Its entire body is armored with hard scales. It will protect the young in its burrow with its life.",
      type1: "poison",
      type2: "ground",
      height: 13,
      weight: 600,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/31.png",
    },
    {
      id: 32,
      pokemon_name: "nidoran-m",
      description:
        "It scans its surroundings by raising its ears out of the grass. Its toxic horn is for protection.",
      type1: "poison",
      type2: "",
      height: 5,
      weight: 90,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/32.png",
    },
    {
      id: 33,
      pokemon_name: "nidorino",
      description:
        "It is easily angered. By swinging its well- developed horn wildly, it can even punch through diamond.",
      type1: "poison",
      type2: "",
      height: 9,
      weight: 195,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/33.png",
    },
    {
      id: 34,
      pokemon_name: "nidoking",
      description:
        "One swing of its mighty tail can snap a telephone pole as if it were a matchstick.",
      type1: "poison",
      type2: "ground",
      height: 14,
      weight: 620,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/34.png",
    },
    {
      id: 35,
      pokemon_name: "clefairy",
      description:
        "Thought to live with others on quiet mountains, it is popular for its adorable nature.",
      type1: "fairy",
      type2: "",
      height: 6,
      weight: 75,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/35.png",
    },
    {
      id: 36,
      pokemon_name: "clefable",
      description:
        "Rarely seen by people, it is said to be drawn by the full moon to play at deserted lakes.",
      type1: "fairy",
      type2: "",
      height: 13,
      weight: 400,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/36.png",
    },
    {
      id: 37,
      pokemon_name: "vulpix",
      description:
        "It controls balls of fire. As it grows, its six tails split from their tips to make more tails.",
      type1: "fire",
      type2: "",
      height: 6,
      weight: 99,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/37.png",
    },
    {
      id: 38,
      pokemon_name: "ninetales",
      description:
        "Its nine tails are said to be imbued with a mystic power. It can live for a thousand years.",
      type1: "fire",
      type2: "",
      height: 11,
      weight: 199,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/38.png",
    },
    {
      id: 39,
      pokemon_name: "jigglypuff",
      description:
        "When it wavers its big, round eyes, it begins singing a lullaby that makes everyone drowsy.",
      type1: "normal",
      type2: "fairy",
      height: 5,
      weight: 55,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/39.png",
    },
    {
      id: 40,
      pokemon_name: "wigglytuff",
      description:
        "Its fine fur feels sublime to the touch. It can expand its body by inhaling air.",
      type1: "normal",
      type2: "fairy",
      height: 10,
      weight: 120,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/40.png",
    },
    {
      id: 41,
      pokemon_name: "zubat",
      description:
        "It has no eyes. Instead, it relies on its ultrasonic cries for echo location to flit about in darkness.",
      type1: "poison",
      type2: "flying",
      height: 8,
      weight: 75,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/41.png",
    },
    {
      id: 42,
      pokemon_name: "golbat",
      description:
        "It loves the blood of humans and Pokémon. It flies around at night in search of neck veins.",
      type1: "poison",
      type2: "flying",
      height: 16,
      weight: 550,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/42.png",
    },
    {
      id: 43,
      pokemon_name: "oddish",
      description:
        "It often plants its root feet in the ground during the day and sows seeds as it walks about at night.",
      type1: "grass",
      type2: "poison",
      height: 5,
      weight: 54,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/43.png",
    },
    {
      id: 44,
      pokemon_name: "gloom",
      description:
        "The honey it drools from its mouth smells so atrocious, it can curl noses more than a mile away.",
      type1: "grass",
      type2: "poison",
      height: 8,
      weight: 86,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/44.png",
    },
    {
      id: 45,
      pokemon_name: "vileplume",
      description:
        "Its petals are the largest in the world. It fiendishly scatters allergy-causing pollen from its petals.",
      type1: "grass",
      type2: "poison",
      height: 12,
      weight: 186,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/45.png",
    },
    {
      id: 46,
      pokemon_name: "paras",
      description:
        "Mushrooms pokemon_named tochukaso grow on its back. They grow along with the host PARAS.",
      type1: "bug",
      type2: "grass",
      height: 3,
      weight: 54,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/46.png",
    },
    {
      id: 47,
      pokemon_name: "parasect",
      description:
        "A mushroom grown larger than the host’s body controls PARASECT. It scatters poisonous spores.",
      type1: "bug",
      type2: "grass",
      height: 10,
      weight: 295,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/47.png",
    },
    {
      id: 48,
      pokemon_name: "venonat",
      description:
        "Its big eyes are actually clusters of tiny eyes. At night, its kind is drawn by light.",
      type1: "bug",
      type2: "poison",
      height: 10,
      weight: 300,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/48.png",
    },
    {
      id: 49,
      pokemon_name: "venomoth",
      description:
        "It flutters its wings to scatter dustlike scales. The scales leach toxins if they contact skin.",
      type1: "bug",
      type2: "poison",
      height: 15,
      weight: 125,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/49.png",
    },
    {
      id: 50,
      pokemon_name: "diglett",
      description:
        "Lives about one yard underground where it feeds on plant roots. It sometimes appears aboveground.",
      type1: "ground",
      type2: "",
      height: 2,
      weight: 8,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/50.png",
    },
    {
      id: 51,
      pokemon_name: "dugtrio",
      description:
        "Its three heads move alternately, driving it through tough soil to depths of over 60 miles.",
      type1: "ground",
      type2: "",
      height: 7,
      weight: 333,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/51.png",
    },
    {
      id: 52,
      pokemon_name: "meowth",
      description:
        "Adores round objects. It wanders the streets on a nightly basis to look for dropped loose change.",
      type1: "normal",
      type2: "",
      height: 4,
      weight: 42,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/52.png",
    },
    {
      id: 53,
      pokemon_name: "persian",
      description:
        "A very haughty Pokémon. Among fans, the size of the jewel in its forehead is a topic of much talk.",
      type1: "normal",
      type2: "",
      height: 10,
      weight: 320,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/53.png",
    },
    {
      id: 54,
      pokemon_name: "psyduck",
      description:
        "If its usual headache worsens, it starts exhibiting odd powers. It can’t remember doing so, however.",
      type1: "water",
      type2: "",
      height: 8,
      weight: 196,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/54.png",
    },
    {
      id: 55,
      pokemon_name: "golduck",
      description:
        "Often seen swimming elegantly by lakeshores. It is often mistaken for the Japanese monster Kappa.",
      type1: "water",
      type2: "",
      height: 17,
      weight: 766,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/55.png",
    },
    {
      id: 56,
      pokemon_name: "mankey",
      description:
        "It lives in treetop colonies. If one becomes enraged, the whole colony rampages for no reason.",
      type1: "fighting",
      type2: "",
      height: 5,
      weight: 280,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/56.png",
    },
    {
      id: 57,
      pokemon_name: "primeape",
      description:
        "It grows angry if you see its eyes and gets angrier if you run. If you beat it, it gets even madder.",
      type1: "fighting",
      type2: "",
      height: 10,
      weight: 320,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/57.png",
    },
    {
      id: 58,
      pokemon_name: "growlithe",
      description:
        "A Pokémon with a loyal nature. It will remain motionless until it is given an order by its Trainer.",
      type1: "fire",
      type2: "",
      height: 7,
      weight: 190,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/58.png",
    },
    {
      id: 59,
      pokemon_name: "arcanine",
      description:
        "Its proud and regal appearance has captured the hearts of people since long ago.",
      type1: "fire",
      type2: "",
      height: 19,
      weight: 1550,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/59.png",
    },
    {
      id: 60,
      pokemon_name: "poliwag",
      description:
        "Its skin is so thin, its internal organs are visible. It has trouble walking on its newly grown feet.",
      type1: "water",
      type2: "",
      height: 6,
      weight: 124,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/60.png",
    },
    {
      id: 61,
      pokemon_name: "poliwhirl",
      description:
        "The spiral pattern on its belly subtly undulates. Staring at it gradually causes drowsiness.",
      type1: "water",
      type2: "",
      height: 10,
      weight: 200,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/61.png",
    },
    {
      id: 62,
      pokemon_name: "poliwrath",
      description:
        "With its extremely tough muscles, it can keep swimming in the Pacific Ocean without resting.",
      type1: "water",
      type2: "fighting",
      height: 13,
      weight: 540,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/62.png",
    },
    {
      id: 63,
      pokemon_name: "abra",
      description:
        "It sleeps for 18 hours a day. Even when awake, it teleports itself while remaining seated.",
      type1: "psychic",
      type2: "",
      height: 9,
      weight: 195,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/63.png",
    },
    {
      id: 64,
      pokemon_name: "kadabra",
      description:
        "It emits special alpha waves from its body that induce headaches just by being close.",
      type1: "psychic",
      type2: "",
      height: 13,
      weight: 565,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/64.png",
    },
    {
      id: 65,
      pokemon_name: "alakazam",
      description:
        "Its superb memory lets it recall everything it has experienced from birth. Its IQ exceeds 5,000.",
      type1: "psychic",
      type2: "",
      height: 15,
      weight: 480,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/65.png",
    },
    {
      id: 66,
      pokemon_name: "machop",
      description:
        "Loves to build its muscles. It trains in all styles of martial arts to become even stronger.",
      type1: "fighting",
      type2: "",
      height: 8,
      weight: 195,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/66.png",
    },
    {
      id: 67,
      pokemon_name: "machoke",
      description:
        "MACHOKE’s boundless power is very dangerous, so it wears a belt that suppresses its energy.",
      type1: "fighting",
      type2: "",
      height: 15,
      weight: 705,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/67.png",
    },
    {
      id: 68,
      pokemon_name: "machamp",
      description:
        "It punches with its four arms at blinding speed. It can launch 1,000 punches in two seconds.",
      type1: "fighting",
      type2: "",
      height: 16,
      weight: 1300,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/68.png",
    },
    {
      id: 69,
      pokemon_name: "bellsprout",
      description:
        "It prefers hot and humid environments. It is quick at capturing prey with its vines.",
      type1: "grass",
      type2: "poison",
      height: 7,
      weight: 40,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/69.png",
    },
    {
      id: 70,
      pokemon_name: "weepinbell",
      description:
        "A Pokémon that appears to be a plant. It captures unwary prey by dousing them with a toxic powder.",
      type1: "grass",
      type2: "poison",
      height: 10,
      weight: 64,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/70.png",
    },
    {
      id: 71,
      pokemon_name: "victreebel",
      description:
        "Lures prey into its mouth with a honeylike aroma. The helpless prey is melted with a dissolving fluid.",
      type1: "grass",
      type2: "poison",
      height: 17,
      weight: 155,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/71.png",
    },
    {
      id: 72,
      pokemon_name: "tentacool",
      description:
        "Its body is virtually composed of water. It shoots strange beams from its crystal-like eyes.",
      type1: "water",
      type2: "poison",
      height: 9,
      weight: 455,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/72.png",
    },
    {
      id: 73,
      pokemon_name: "tentacruel",
      description:
        "With 80 tentacles for ensnaring victims, it prevents escape until the prey is weakened by poison.",
      type1: "water",
      type2: "poison",
      height: 16,
      weight: 550,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/73.png",
    },
    {
      id: 74,
      pokemon_name: "geodude",
      description:
        "Many live on mountain trails and remain half buried while keeping an eye on climbers.",
      type1: "rock",
      type2: "ground",
      height: 4,
      weight: 200,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/74.png",
    },
    {
      id: 75,
      pokemon_name: "graveler",
      description:
        "Rolls down slopes to move. It rolls over any obstacle without slowing or changing its direction.",
      type1: "rock",
      type2: "ground",
      height: 10,
      weight: 1050,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/75.png",
    },
    {
      id: 76,
      pokemon_name: "golem",
      description:
        "It sheds its hide once a year. Its boulderlike body is so tough, even dynamite can’t harm it.",
      type1: "rock",
      type2: "ground",
      height: 14,
      weight: 3000,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/76.png",
    },
    {
      id: 77,
      pokemon_name: "ponyta",
      description:
        "About an hour after birth, its fiery mane and tail grow out, giving it an impressive appearance.",
      type1: "fire",
      type2: "",
      height: 10,
      weight: 300,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/77.png",
    },
    {
      id: 78,
      pokemon_name: "rapidash",
      description:
        "Very competitive, this POKéMON will chase anything that moves fast in the hopes of racing it.",
      type1: "fire",
      type2: "",
      height: 17,
      weight: 950,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/78.png",
    },
    {
      id: 79,
      pokemon_name: "slowpoke",
      description:
        "It is always vacantly lost in thought, but no one knows what it is thinking about. It is good at fishing with its tail.",
      type1: "water",
      type2: "psychic",
      height: 12,
      weight: 360,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/79.png",
    },
    {
      id: 80,
      pokemon_name: "slowbro",
      description:
        "Though usually dim witted, it seems to become inspired if the SHELLDER on its tail bites down.",
      type1: "water",
      type2: "psychic",
      height: 16,
      weight: 785,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/80.png",
    },
    {
      id: 81,
      pokemon_name: "magnemite",
      description:
        "The units at its sides generate electromagnetic waves that keep it airborne. It feeds on electricity.",
      type1: "electric",
      type2: "steel",
      height: 3,
      weight: 60,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/81.png",
    },
    {
      id: 82,
      pokemon_name: "magneton",
      description:
        "It is actually three MAGNEMITE linked by magnetism. A group can set off a magnetic storm.",
      type1: "electric",
      type2: "steel",
      height: 10,
      weight: 600,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/82.png",
    },
    {
      id: 83,
      pokemon_name: "farfetchd",
      description:
        "It can’t live without the stalk it holds. That’s why it defends the stalk from attackers with its life.",
      type1: "normal",
      type2: "flying",
      height: 8,
      weight: 150,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/83.png",
    },
    {
      id: 84,
      pokemon_name: "doduo",
      description:
        "The brains in its two heads appear to communicate emotions to each other with a telepathic power.",
      type1: "normal",
      type2: "flying",
      height: 14,
      weight: 392,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/84.png",
    },
    {
      id: 85,
      pokemon_name: "dodrio",
      description:
        "Uses its three brains to execute complex plans. While two heads sleep, one head is said to stay awake.",
      type1: "normal",
      type2: "flying",
      height: 18,
      weight: 852,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/85.png",
    },
    {
      id: 86,
      pokemon_name: "seel",
      description:
        "A Pokémon that lives on icebergs. It swims in the sea using the point on its head to break up ice.",
      type1: "water",
      type2: "",
      height: 11,
      weight: 900,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/86.png",
    },
    {
      id: 87,
      pokemon_name: "dewgong",
      description:
        "In snow, the pure white coat covering its body obscures it from predators.",
      type1: "water",
      type2: "ice",
      height: 17,
      weight: 1200,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/87.png",
    },
    {
      id: 88,
      pokemon_name: "grimer",
      description:
        "It was born when sludge in a dirty stream was exposed to the moon’s X-rays. It appears among filth.",
      type1: "poison",
      type2: "",
      height: 9,
      weight: 300,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/88.png",
    },
    {
      id: 89,
      pokemon_name: "muk",
      description:
        "A toxic fluid seeps from its body. The fluid instantly kills plants and trees on contact.",
      type1: "poison",
      type2: "",
      height: 12,
      weight: 300,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/89.png",
    },
    {
      id: 90,
      pokemon_name: "shellder",
      description:
        "It swims backward by opening and closing its two shells. Its large tongue is always kept hanging out.",
      type1: "water",
      type2: "",
      height: 3,
      weight: 40,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/90.png",
    },
    {
      id: 91,
      pokemon_name: "cloyster",
      description:
        "It fights by keeping its shell tightly shut for protection and by shooting spikes to repel foes.",
      type1: "water",
      type2: "ice",
      height: 15,
      weight: 1325,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/91.png",
    },
    {
      id: 92,
      pokemon_name: "gastly",
      description:
        "This Pokémon’s body is 95% made up of gases, which are blown away by strong gusts of wind.",
      type1: "ghost",
      type2: "poison",
      height: 13,
      weight: 1,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/92.png",
    },
    {
      id: 93,
      pokemon_name: "haunter",
      description:
        "It can slip through any obstacle. It lurks inside walls to keep an eye on its foes.",
      type1: "ghost",
      type2: "poison",
      height: 16,
      weight: 1,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/93.png",
    },
    {
      id: 94,
      pokemon_name: "gengar",
      description:
        "It hides in shadows. It is said that if GENGAR is hiding, it cools the area by nearly 10 degrees F.",
      type1: "ghost",
      type2: "poison",
      height: 15,
      weight: 405,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/94.png",
    },
    {
      id: 95,
      pokemon_name: "onix",
      description:
        "When it travels underground, it causes rumbling and tremors. It can move at 50 mph.",
      type1: "rock",
      type2: "ground",
      height: 88,
      weight: 2100,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/95.png",
    },
    {
      id: 96,
      pokemon_name: "drowzee",
      description:
        "It can tell what people are dreaming by sniffing with its big nose. It loves fun dreams.",
      type1: "psychic",
      type2: "",
      height: 10,
      weight: 324,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/96.png",
    },
    {
      id: 97,
      pokemon_name: "hypno",
      description:
        "Seeing its swinging pendulum can induce sleep in three seconds, even in someone who just woke up.",
      type1: "psychic",
      type2: "",
      height: 16,
      weight: 756,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/97.png",
    },
    {
      id: 98,
      pokemon_name: "krabby",
      description:
        "It lives in burrows dug on sandy beaches. Its pincers fully grow back if they are broken in battle.",
      type1: "water",
      type2: "",
      height: 4,
      weight: 65,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/98.png",
    },
    {
      id: 99,
      pokemon_name: "kingler",
      description:
        "The larger pincer has 10,000- horsepower strength. However, it is so heavy, it is difficult to aim.",
      type1: "water",
      type2: "",
      height: 13,
      weight: 600,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/99.png",
    },
    {
      id: 100,
      pokemon_name: "voltorb",
      description:
        "It looks just like a Poké Ball. It is dangerous because it may electrocute or explode on touch.",
      type1: "electric",
      type2: "",
      height: 5,
      weight: 104,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/100.png",
    },
    {
      id: 101,
      pokemon_name: "electrode",
      description:
        "It is known to drift on winds if it is bloated to bursting with stored electricity.",
      type1: "electric",
      type2: "",
      height: 12,
      weight: 666,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/101.png",
    },
    {
      id: 102,
      pokemon_name: "exeggcute",
      description:
        "Its six eggs converse using telepathy. They can quickly gather if they become separated.",
      type1: "grass",
      type2: "psychic",
      height: 4,
      weight: 25,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/102.png",
    },
    {
      id: 103,
      pokemon_name: "exeggutor",
      description:
        "It is called “The Walking Jungle.” If a head grows too big, it falls off and becomes an EXEGGCUTE.",
      type1: "grass",
      type2: "psychic",
      height: 20,
      weight: 1200,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/103.png",
    },
    {
      id: 104,
      pokemon_name: "cubone",
      description:
        "When it thinks of its dead mother, it cries. Its crying makes the skull it wears rattle hollowly.",
      type1: "ground",
      type2: "",
      height: 4,
      weight: 65,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/104.png",
    },
    {
      id: 105,
      pokemon_name: "marowak",
      description:
        "The bone it holds is its key weapon. It throws the bone skillfully like a boomerang to KO targets.",
      type1: "ground",
      type2: "",
      height: 10,
      weight: 450,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/105.png",
    },
    {
      id: 106,
      pokemon_name: "hitmonlee",
      description:
        "Its legs can stretch double. First-time foes are startled by its extensible reach.",
      type1: "fighting",
      type2: "",
      height: 15,
      weight: 498,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/106.png",
    },
    {
      id: 107,
      pokemon_name: "hitmonchan",
      description:
        "The arm-twisting punches it throws pulverize even concrete. It rests after three minutes of fighting.",
      type1: "fighting",
      type2: "",
      height: 14,
      weight: 502,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/107.png",
    },
    {
      id: 108,
      pokemon_name: "lickitung",
      description:
        "Instead of hands, it uses its tongue, which is twice its height. Its sticky saliva grips anything.",
      type1: "normal",
      type2: "",
      height: 12,
      weight: 655,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/108.png",
    },
    {
      id: 109,
      pokemon_name: "koffing",
      description:
        "Lighter-than-air gases in its body keep it aloft. The gases not only smell, they are also explosive.",
      type1: "poison",
      type2: "",
      height: 6,
      weight: 10,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/109.png",
    },
    {
      id: 110,
      pokemon_name: "weezing",
      description:
        "It grows by feeding on gases released by garbage. Though very rare, triplets have been found.",
      type1: "poison",
      type2: "",
      height: 12,
      weight: 95,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/110.png",
    },
    {
      id: 111,
      pokemon_name: "rhyhorn",
      description:
        "Its body is clad in a thick hide, and its tackles topple buildings. Unfortunately, it is not smart.",
      type1: "ground",
      type2: "rock",
      height: 10,
      weight: 1150,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/111.png",
    },
    {
      id: 112,
      pokemon_name: "rhydon",
      description:
        "Its brain developed after it stood up on its hind legs. Its drill horn bores tunnels through solid rock.",
      type1: "ground",
      type2: "rock",
      height: 19,
      weight: 1200,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/112.png",
    },
    {
      id: 113,
      pokemon_name: "chansey",
      description:
        "It is said to deliver happiness. Being compassionate, it shares its eggs with injured people.",
      type1: "normal",
      type2: "",
      height: 11,
      weight: 346,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/113.png",
    },
    {
      id: 114,
      pokemon_name: "tangela",
      description:
        "It is shrouded by blue vines. No one has seen the face hidden behind this growth of vines.",
      type1: "grass",
      type2: "",
      height: 10,
      weight: 350,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/114.png",
    },
    {
      id: 115,
      pokemon_name: "kangaskhan",
      description:
        "It raises its offspring in its belly pouch. It lets the baby out to play only when it feels safe.",
      type1: "normal",
      type2: "",
      height: 22,
      weight: 800,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/115.png",
    },
    {
      id: 116,
      pokemon_name: "horsea",
      description:
        "It makes its nest in the shade of corals. If it senses danger, it spits murky ink and flees.",
      type1: "water",
      type2: "",
      height: 4,
      weight: 80,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/116.png",
    },
    {
      id: 117,
      pokemon_name: "seadra",
      description:
        "Its spines provide protection. Its fins and bones are prized as traditional medicine ingredients.",
      type1: "water",
      type2: "",
      height: 12,
      weight: 250,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/117.png",
    },
    {
      id: 118,
      pokemon_name: "goldeen",
      description:
        "It swims elegantly by flittering its tail fin as if it were a dress. It has the look of a queen.",
      type1: "water",
      type2: "",
      height: 6,
      weight: 150,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/118.png",
    },
    {
      id: 119,
      pokemon_name: "seaking",
      description:
        "It makes its nest by hollowing out boulders in streams with its horn. It defends its eggs with its life.",
      type1: "water",
      type2: "",
      height: 13,
      weight: 390,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/119.png",
    },
    {
      id: 120,
      pokemon_name: "staryu",
      description:
        "An enigmatic POKéMON that can effortlessly regenerate any appendage it loses in battle.",
      type1: "water",
      type2: "",
      height: 8,
      weight: 345,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/120.png",
    },
    {
      id: 121,
      pokemon_name: "starmie",
      description:
        "At the center of its body is a red core, which sends mysterious radio signals into the night sky.",
      type1: "water",
      type2: "psychic",
      height: 11,
      weight: 800,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/121.png",
    },
    {
      id: 122,
      pokemon_name: "mr-mime",
      description:
        "It is a pantomime expert that can create invisible but solid walls using miming gestures.",
      type1: "psychic",
      type2: "fairy",
      height: 13,
      weight: 545,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/122.png",
    },
    {
      id: 123,
      pokemon_name: "scyther",
      description:
        "With ninja-like agility and speed, it can create the illusion that there is more than one of itself.",
      type1: "bug",
      type2: "flying",
      height: 15,
      weight: 560,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/123.png",
    },
    {
      id: 124,
      pokemon_name: "jynx",
      description:
        "Its cries sound like human speech. However, it is impossible to tell what it is trying to say.",
      type1: "ice",
      type2: "psychic",
      height: 14,
      weight: 406,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/124.png",
    },
    {
      id: 125,
      pokemon_name: "electabuzz",
      description:
        "Half of all blackouts occur when this Pokémon appears at power plants and eats electricity.",
      type1: "electric",
      type2: "",
      height: 11,
      weight: 300,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/125.png",
    },
    {
      id: 126,
      pokemon_name: "magmar",
      description:
        "Born in the spout of a volcano, its body is covered by flames that shimmer like the sun.",
      type1: "fire",
      type2: "",
      height: 13,
      weight: 445,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/126.png",
    },
    {
      id: 127,
      pokemon_name: "pinsir",
      description:
        "It grips prey with its pincers until the prey is torn in half. What it can’t tear, it tosses far.",
      type1: "bug",
      type2: "",
      height: 15,
      weight: 550,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/127.png",
    },
    {
      id: 128,
      pokemon_name: "tauros",
      description:
        "Once it takes aim at its foe, it makes a headlong charge. It is famous for its violent nature.",
      type1: "normal",
      type2: "",
      height: 14,
      weight: 884,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/128.png",
    },
    {
      id: 129,
      pokemon_name: "magikarp",
      description:
        "It is said to be the world’s weakest Pokémon. No one knows why it has managed to survive.",
      type1: "water",
      type2: "",
      height: 9,
      weight: 100,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/129.png",
    },
    {
      id: 130,
      pokemon_name: "gyarados",
      description:
        "It has an extremely aggressive nature. The HYPER BEAM it shoots from its mouth totally incinerates all targets.",
      type1: "water",
      type2: "flying",
      height: 65,
      weight: 2350,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/130.png",
    },
    {
      id: 131,
      pokemon_name: "lapras",
      description:
        "It loves crossing the sea with people and Pokémon on its back. It understands human speech.",
      type1: "water",
      type2: "ice",
      height: 25,
      weight: 2200,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/131.png",
    },
    {
      id: 132,
      pokemon_name: "ditto",
      description:
        "It has the ability to reconstitute its entire cellular structure to transform into whatever it sees.",
      type1: "normal",
      type2: "",
      height: 3,
      weight: 40,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/132.png",
    },
    {
      id: 133,
      pokemon_name: "eevee",
      description:
        "A rare Pokémon that adapts to harsh environments by taking on different evolutionary forms.",
      type1: "normal",
      type2: "",
      height: 3,
      weight: 65,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/133.png",
    },
    {
      id: 134,
      pokemon_name: "vaporeon",
      description:
        "It has evolved to be suitable for an aquatic life. It can invisibly melt away into water.",
      type1: "water",
      type2: "",
      height: 10,
      weight: 290,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/134.png",
    },
    {
      id: 135,
      pokemon_name: "jolteon",
      description:
        "It controls 10,000-volt power and can raise all the fur on its body as if it were sharp needles.",
      type1: "electric",
      type2: "",
      height: 8,
      weight: 245,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/135.png",
    },
    {
      id: 136,
      pokemon_name: "flareon",
      description:
        "It has a flame sac in its body. Its body temperature tops 1,650 degrees Fahrenheit before battle.",
      type1: "fire",
      type2: "",
      height: 9,
      weight: 250,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/136.png",
    },
    {
      id: 137,
      pokemon_name: "porygon",
      description:
        "A POKéMON that consists entirely of programming code. It is capable of moving freely in cyberspace.",
      type1: "normal",
      type2: "",
      height: 8,
      weight: 365,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/137.png",
    },
    {
      id: 138,
      pokemon_name: "omanyte",
      description:
        "A Pokémon that was resurrected from a fossil using modern science. It swam in ancient seas.",
      type1: "rock",
      type2: "water",
      height: 4,
      weight: 75,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/138.png",
    },
    {
      id: 139,
      pokemon_name: "omastar",
      description:
        "It is thought that this Pokémon became extinct because its spiral shell grew too large.",
      type1: "rock",
      type2: "water",
      height: 10,
      weight: 350,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/139.png",
    },
    {
      id: 140,
      pokemon_name: "kabuto",
      description:
        "It is thought to have inhabited beaches 300 million years ago. It is protected by a stiff shell.",
      type1: "rock",
      type2: "water",
      height: 5,
      weight: 115,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/140.png",
    },
    {
      id: 141,
      pokemon_name: "kabutops",
      description:
        "Its sleek shape is perfect for swimming. It slashes prey with its claws and drains their fluids.",
      type1: "rock",
      type2: "water",
      height: 13,
      weight: 405,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/141.png",
    },
    {
      id: 142,
      pokemon_name: "aerodactyl",
      description:
        "A ferocious, prehistoric POKéMON that goes for the enemy’s throat with its serrated, sawlike fangs.",
      type1: "rock",
      type2: "flying",
      height: 18,
      weight: 590,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/142.png",
    },
    {
      id: 143,
      pokemon_name: "snorlax",
      description:
        "Its stomach can digest any kind of food, even if it happens to be moldy or rotten.",
      type1: "normal",
      type2: "",
      height: 21,
      weight: 4600,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/143.png",
    },
    {
      id: 144,
      pokemon_name: "articuno",
      description:
        "A legendary bird Pokémon. It can create blizzards by freezing moisture in the air.",
      type1: "ice",
      type2: "flying",
      height: 17,
      weight: 554,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/144.png",
    },
    {
      id: 145,
      pokemon_name: "zapdos",
      description:
        "A legendary bird POKéMON that is said to appear from clouds while dropping enormous lightning bolts.",
      type1: "electric",
      type2: "flying",
      height: 16,
      weight: 526,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/145.png",
    },
    {
      id: 146,
      pokemon_name: "moltres",
      description:
        "One of the legendary bird Pokémon. It is said that its appearance indicates the coming of spring.",
      type1: "fire",
      type2: "flying",
      height: 20,
      weight: 600,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/146.png",
    },
    {
      id: 147,
      pokemon_name: "dratini",
      description:
        "It is called the “Mirage Pokémon” because so few have seen it. Its shed skin has been found.",
      type1: "dragon",
      type2: "",
      height: 18,
      weight: 33,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/147.png",
    },
    {
      id: 148,
      pokemon_name: "dragonair",
      description:
        "A mystical POKéMON that exudes a gentle aura. It is said to have the ability to change the weather.",
      type1: "dragon",
      type2: "",
      height: 40,
      weight: 165,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/148.png",
    },
    {
      id: 149,
      pokemon_name: "dragonite",
      description:
        "It is said to make its home somewhere in the sea. It guides crews of shipwrecks to shore.",
      type1: "dragon",
      type2: "flying",
      height: 22,
      weight: 2100,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/149.png",
    },
    {
      id: 150,
      pokemon_name: "mewtwo",
      description:
        "A Pokémon created by recombining MEW’s genes. It’s said to have the most savage heart among Pokémon.",
      type1: "psychic",
      type2: "",
      height: 20,
      weight: 1220,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/150.png",
    },
    {
      id: 151,
      pokemon_name: "mew",
      description:
        "Because it can use all kinds of moves, many scientists believe MEW to be the ancestor of Pokémon.",
      type1: "psychic",
      type2: "",
      height: 4,
      weight: 40,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
      spriteShiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/151.png",
    },
  ]);
};
