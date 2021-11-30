import { EggApplication } from 'egg';

class AppBootHook {
  constructor(app: EggApplication) {
    this.app = app;
  }

  app: EggApplication;

  configWillLoad() {
    // The config file has been read and merged, but it has not yet taken effect
    // This is the last time the application layer modifies the configuration
    // Note: This function only supports synchronous calls.

    // For example: the password in the parameter is encrypted, decrypt it here
    // this.config.mysql.password = decrypt(this.config.mysql.password);
    // For example: insert a middleware into the framework's coreMiddleware
    // const statusIdx = this.config.coreMiddleware.indexOf('status');
    // this.config.coreMiddleware.splice(statusIdx + 1, 0, 'limit');
  }

  configDidLoad() {
    this.app.logger.info('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    this.app.logger.info(`config info ${this.app.config}`);
  }

  async didLoad() {
    // All configurations have been loaded
    // Can be used to load the application custom file, start a custom service

    // Example: Creating a custom app example
    // this.app.queue = new Queue(this.config.queue);
    // await this.app.queue.init();

    // For example: load a custom directory
    // this.app.loader.loadToContext(path.join(__dirname, 'app/tasks'), 'tasks', {
    //   fieldClass: 'tasksClasses',
    // });

    this.app.logger.info('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    this.app.logger.info(`config info ${this.app.config}`);
    console.log('fuckkkkkkkkkkkk');
  }

  async willReady() {
    // All plugins have been started, but the application is not yet ready
    // Can do some data initialization and other operations
    // Application will start after these operations executed succcessfully

    // For example: loading data from the database into the in-memory cache
    // this.app.cacheData = await this.app.model.query(QUERY_CACHE_SQL);
    console.log('fuckkkkkkkkkkkk');
  }

  async didReady() {
    // Application already ready

    const ctx = await this.app.createAnonymousContext();
    await ctx.service.Biz.request();
    console.log('fuckkkkkkkkkkkk');
  }

  async serverDidReady() {
    // http / https server has started and begins accepting external requests
    // At this point you can get an instance of server from app.server

    // this.app.server.on('timeout', socket => {
    //   // handle socket timeout
    // });
    console.log('fuckkkkkkkkkkkk');
  }
}

module.exports = AppBootHook;