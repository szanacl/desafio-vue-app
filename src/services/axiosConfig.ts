import axios from 'axios';


const PokemonAPI = 
  axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

  });

export default PokemonAPI