import { Controller } from "egg";

export default class MusicController extends Controller {
  public async index() {
    const { ctx } = this;
    const { access_token, token_type } = await ctx.service.music.auth();
    const auth = token_type + ' ' + access_token;
    const { singer } = ctx.query;
    const response = await ctx.service.music.list(singer, auth);

    ctx.body = response;
  }

  public async show() {
    const { ctx } = this;
    const { id } = ctx.params;
    const { access_token, token_type } = await ctx.service.music.auth();
    const auth = token_type + ' ' + access_token;
    ctx.body = await ctx.service.music.detail(id, auth);
  }

  public async image() {
    const { ctx } = this;
    const { imageid } = ctx.params;
    const data = await ctx.service.music.image(imageid);
    ctx.body = data;
    ctx.response.type = 'image/jpeg';
  }
}