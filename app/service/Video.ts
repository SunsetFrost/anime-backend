import { Service } from 'egg';
// import * as Fs from 'fs';

export default class VideoService extends Service {
  public async list(page: number) {
    const { ctx, config } = this;
    const url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=${config.tmdb.key}&language=zh-CN`;

    const response = await ctx.proxyRequest(url, {
      timeout: 10000,
    });

    const { data } = response;
    return data;
  }

  public async detail(id: number) {
    const { ctx, config } = this;
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${config.tmdb.key}&language=zh-CN`;
    const { data } = await ctx.proxyRequest(url);
    return data;
  }

  public async image(imageid: string) {
    const { ctx } = this;
    const url = `https://image.tmdb.org/t/p/w500/${imageid}.jpg`;

    // const reader = Fs.createReadStream('image.jpg');
    const res = await ctx.proxyRequest(url, {
      responseType: 'arraybuffer',
    });
    const buff = Buffer.from(res.data, 'utf-8');
    // const { data } = res;
    // data.pipe(reader);
    return buff;
  }
}
