import { Service } from 'egg';

export default class MusicService extends Service {
  public async auth() {
    const { ctx, app } = this;
    ctx.logger.debug('debug info from service');
    ctx.logger.debug(app.config.env);
  }

  // public async list(page: number, auth: string) {
  //   const { ctx } = this;
  //   const url = ``;
  // }
}