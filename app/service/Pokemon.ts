import { Service } from 'egg';

export default class PokemonService extends Service {
  private async fetch(query: Object, variables: Object) {
    const { ctx } = this;
    const url = 'https://beta.pokeapi.co/graphql/v1beta';
    const result = await ctx.curl(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: {
        query,
        variables,
      },
      dataType: 'json',
      method: 'POST',
    });
    return result;
  }

  public async list(page: number, perpage: number) {
    const limit = perpage;
    const offset = (page - 1) * perpage;

    const query = `
      query($limit: Int, $offset: Int) {
        pokemon_v2_pokemon(limit: $limit, offset: $offset) {
          id
          name
        }
      }
    `;
    const variables = {
      limit,
      offset,
    };
    const result = await this.fetch(query, variables);

    return result.data;
  }
}

/* 
  列表查询
  query samplePokeAPIquery {
  # pokemon_v2_language(where: {name: {_eq: "zh-Hans"}}) {
    pokemon_v2_pokemonspecies (limit: 12) {
      pokemon_v2_pokemonspeciesnames(where: {language_id: {_eq: 4}}) {
      	name,
      },
      pokemon_v2_pokemons {
        id
				name,
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name,
          }
        },
        pokemon_v2_pokemonstats_aggregate {
          aggregate {
            sum {
              base_stat
            }
          }
        }
      }
    },
  }
*/
