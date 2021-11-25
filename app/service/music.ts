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

  public async list(query: string, auth: string) {
    const { ctx } = this;
    const url = `https://api.spotify.com/v1/search?type=album&include_external=audio&q=artist:${query}`;
    const response = await ctx.proxyRequest(url, {
      headers: {
        Authorization: auth,
      },
    });

    const { data } = response;
    return data;
  }

  public async detail(albumId: string, auth: string) {
    const { ctx } = this;
    const url = `https://api.spotify.com/v1/albums/${albumId}/tracks`;
    const response = await ctx.proxyRequest(url, {
      headers: {
        Authorization: auth,
      },
    });

    const { data } = response;
    return data;
  }

  public async image(id: string) {
    const { ctx } = this;
    const url = `https://i.scdn.co/image/${id}`;
    const { data } = await ctx.proxyRequest(url, {
      responseType: 'arraybuffer',
    });
    const buff = Buffer.from(data, 'utf-8');
    return buff;
  }
}