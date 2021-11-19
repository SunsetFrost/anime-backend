import axios from 'axios';

module.exports = {
  // 如果是本地开发环境则使用http代理
  async proxyRequest(url, options = {}) {
    const { app } = this;
    const env = app.config.env;
    if (env === 'local') {
      const res = await axios(url, {
        method: 'get',
        proxy: {
          host: '127.0.0.1',
          port: 7890,
        },
        ...options,
      });

      return res;
    } else {
      return this.curl(url, options);
    }
  },
};
