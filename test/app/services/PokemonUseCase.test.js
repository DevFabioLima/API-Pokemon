const PokemonUseCase = require('../../../src/app/services/PokemonUseCase');

const response = {
  data: {
    pokemon: [
      {
        pokemon: {
          name: 'pineco',
          url: 'https://pokeapi.co/api/v2/pokemon/204/',
        },
        slot: 1,
      },
      {
        pokemon: {
          name: 'forretress',
          url: 'https://pokeapi.co/api/v2/pokemon/205/',
        },
        slot: 1,
      },
      {
        pokemon: {
          name: 'scizor',
          url: 'https://pokeapi.co/api/v2/pokemon/212/',
        },
        slot: 1,
      },
    ],
  },
};

it('should return a pokemon with name and url', async () => {
  PokemonUseCase.getPokemonsFromApi = jest.fn((typeOfPokemon) => {
    return response;
  });
  PokemonUseCase.getMagicNumber = jest.fn(() => {
    return 0;
  });
  PokemonUseCase.getImagePokemon = jest.fn(() => {
    return {
      data: {
        sprites: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png',
        },
      },
    };
  });
  const pokemon = await PokemonUseCase.getPokemons('electric');
  expect(pokemon).toEqual({
    name: 'pineco',
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png',
  });
});
