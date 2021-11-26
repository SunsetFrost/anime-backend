import { Service } from 'egg';

export default class BookService extends Service {
  public async list(q: string) {
    const { ctx, config } = this;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${q}&key=${config.googlebook.key}&langRestrict=zh`;

    const response = await ctx.proxyRequest(url);

    const { data } = response;
    return data;
  }

  public async detail(id: string) {
    const { ctx, config } = this;
    const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=${config.googlebook.key}`;
    const { data } = await ctx.proxyRequest(url);
    return data;
  }

  public async image(query: string) {
    const { ctx } = this;

    const baseUrl = 'http://books.google.com/books/publisher/content?';
    const res = await ctx.proxyRequest(baseUrl + query, {
      responseType: 'arraybuffer',
    });
    const buff = Buffer.from(res.data, 'utf-8');
    return buff;
  }
}
