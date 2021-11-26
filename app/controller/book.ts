import { Controller } from "egg";

export default class BookController extends Controller {
  public async index() {
    const { ctx } = this;
    // const page = parseInt(ctx.request.query.page, 10) || 1;
    const q = ctx.request.query.q || '';
    const response = await ctx.service.book.list(q);

    ctx.body = response;
  }

  public async show() {
    const { ctx } = this;
    const id = ctx.params.id;
    ctx.body = await ctx.service.book.detail(id);
  }

  public async image() {
    const { ctx } = this;
    const query = ctx.request.querystring;
    const imageStream = await ctx.service.book.image(query);
    ctx.body = imageStream;
    ctx.response.type = 'image/jpeg';
  }  
}