import  PokemonAPI  from './axiosConfig'

export default class ServicePokemon {
    
    public static async getAll(limit: number, offset: number) : Promise<any>{
        const { get } = PokemonAPI
        const { data } = await get(`/ability/?limit=${limit}&offset=${offset}`);
        return data;
    }
    

    public static async getById(codPokemon: any) : Promise<any>{
        const { get } = PokemonAPI
        const { data } = await get('/ability/'+codPokemon);
        return data;
    }
  
}