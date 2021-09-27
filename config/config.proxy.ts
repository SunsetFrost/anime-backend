import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  const proxyConfig = {
    request: {
      enableProxy: true,
      rejectUnauthorized: false,
      proxy: 'http://127.0.0.1:7890',
    }
  }

  return {
    ...config,
    ...proxyConfig,
  };
};
