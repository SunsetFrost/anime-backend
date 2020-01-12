import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.get('/', controller.home.index);
  router.resources('animes', '/api/v1/animes', controller.animes);
};
