import { Service } from 'egg';

export default class Anilist extends Service {
  public async getAllAnime(page: number, perpage: number) {
    const ctx = this.ctx;
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
      method: 'POST' || undefined,
    });

    return result.data;
  }
}
