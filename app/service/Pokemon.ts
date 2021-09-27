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
    const offset = page * perpage;

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
