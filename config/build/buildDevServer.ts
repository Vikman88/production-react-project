import { type Configuration as ConfigurationDevServer } from 'webpack-dev-server';
import { type BuildOptions } from './types/config';

export function buildDevServer (options: BuildOptions): ConfigurationDevServer {
  return {
    port: options.port,
    open: true,
    // Позволяет проксировать запросы через корневую стрраницу
    historyApiFallback: true,
    // Горячая перезагрузка
    hot: true
  };
};
