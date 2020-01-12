import { Service } from 'egg';

export default class AnimeService extends Service {
  private async fetch(query: Object, variables: Object) {
    const { ctx } = this;
    const url = 'https://graphql.anilist.co';
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
    const query = `
    query($page: Int, $perpage: Int) {
      Page(page: $page, perPage: $perpage) {
        media(type: ANIME) {
          id
          title {
            romaji
            english
            native
          }
          source
          episodes
          seasonYear
          season
          description
          isAdult
          genres
          coverImage {
            large
            medium
            color
          }
          bannerImage
        }
      }
    }
    `;
    const variables = {
      page,
      perpage,
    };
    const result = await this.fetch(query, variables);

    return result.data;
  }

  public async detail(id) {
      return { id};
  }
}
