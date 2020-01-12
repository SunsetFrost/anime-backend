import { Controller } from 'egg';

export default class AnimeController extends Controller {
  public async index() {
    const { ctx } = this;
    const { page, perpage } = ctx.request.queries;
    ctx.body = await ctx.service.animes.list(
      Number(page),
      Number(perpage),
    );
  }
  public async show() {
      const { ctx } = this;
      const { id } = ctx.request.queries;
      ctx.body = await ctx.service.animes.detail(id);
  }
}
