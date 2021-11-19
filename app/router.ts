import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.get('/', controller.home.index);
  router.resources('anime', '/api/v1/anime', controller.anime);
  router.resources('pokemon', '/api/v1/pokemon', controller.pokemon);
  router.resources('video', '/api/v1/video', controller.video);
  router.get('/api/v1/video/image/:imageid', controller.video.image);
};
