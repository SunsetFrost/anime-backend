import { Service } from 'egg';

export default class MusicService extends Service {
  public async auth() {
    
  }

  public async list(page: number, auth: string) {
    const { ctx } = this;
    const url = ``;
  }
}