import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { Model } from 'mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePokemonDto } from 'src/pokemon/dto/create-pokemon.dto';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter){}

  async executeSeed(){

    await this.pokemonModel.deleteMany();

    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');
    const pokemonToInsert: { name:string, no: number }[] = [];

      data.results.forEach( async ({name, url}) => {

      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];

      //insertPromisesArray.push(this.pokemonModel.create({no: no, name: name}));
      pokemonToInsert.push({name, no});

    });

   // await Promise.all(insertPromisesArray);
   await this.pokemonModel.insertMany(pokemonToInsert);

   return "Seed executed";
  }
}
