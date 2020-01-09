import { Controller } from 'egg';

export default class AnilistController extends Controller {
  public async getAllAnime() {
    const { ctx } = this;
    const { page, perpage } = ctx.request.queries;
    ctx.body = await ctx.service.anilist.getAllAnime(
      Number(page),
      Number(perpage),
    );
  }
}
