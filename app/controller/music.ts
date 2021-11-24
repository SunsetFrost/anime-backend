import { Controller } from "egg";

export default class MusicController extends Controller {
  public async index() {
    const { ctx } = this;
    const auth = await ctx.service.music.auth();

    ctx.body = auth;
  }
}