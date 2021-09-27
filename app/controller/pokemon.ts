import { Controller } from 'egg';
import { readFileSync } from 'fs';
import * as path from 'path';

export default class PokemonController extends Controller {
  public async index() {
    const { ctx } = this;
    const { page, perpage } = ctx.request.queries;
    const { data: { pokemon_v2_pokemon : res } } = await ctx.service.pokemon.list(
      Number(page),
      Number(perpage),
    );
    const resWithImage = res.map(i => this.getLocalImage(i));

    ctx.body = resWithImage;
  }

  private getLocalImage(pokemon) {
    const { id } = pokemon;
    const imgPath = path.join(__dirname, `../../sprites/sprites/pokemon/${id}.png`) ;
    const imgData = readFileSync(imgPath);
    const newPokemon = {
      ...pokemon,
      img: imgData.toString('base64'),
    };
    return newPokemon;
  }
}
