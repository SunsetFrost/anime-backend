import { Controller } from 'egg';

export default class VideoController extends Controller {
  public async index() {
    const { ctx } = this;
    const page = parseInt(ctx.request.query.page, 10) || 1;
    const response = await ctx.service.video.list(page);

    ctx.body = response;
  }

  public async show() {
    const { ctx } = this;
    const id = parseInt(ctx.params.id, 10);
    ctx.body = await ctx.service.video.detail(id);
    ctx.logger.info('video request', ctx.request.url);
  }

  public async image() {
    const { ctx } = this;
    const imageId = ctx.params.imageid;
    const imageStream = await ctx.service.video.image(imageId);
    ctx.body = imageStream;
    ctx.response.type = 'image/jpeg';
  }
}
