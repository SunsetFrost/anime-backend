import { EggAppConfig, PowerPartial } from 'egg';
import keyConfig from './config.key';


export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  const extendConfig = {
    ...config,
    ...keyConfig,
  }
  return extendConfig;
};
