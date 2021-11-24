import { Service } from 'egg';
import * as qs from 'qs';

export default class MusicService extends Service {
  public async auth() {
    const { ctx, config } = this;
    const url = 'https://accounts.spotify.com/api/token';
    const reqData = {
      grant_type: 'client_credentials'
    };

    const response = await ctx.proxyRequest(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      auth: {
        username: config.spotify.clientID,
        password: config.spotify.clientSecret,
      },
      data: qs.stringify(reqData),
    });

    const { data } = response;
    return data;
  }

  // public async list(page: number, auth: string) {
  //   const { ctx } = this;
  //   const url = ``;
  // }
}