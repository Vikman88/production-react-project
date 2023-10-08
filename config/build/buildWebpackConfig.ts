import { BuildOptions } from "./types/config";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

  const { mode, paths, isDev } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
  // Здесь конфигурируем лоадеры, которые будут обрабатывать файлы выходящие за рамки js
      rules: buildLoaders(options),
    },
  // расширения тех файлов, которые при импорте не будем указывать расширения
    resolve: buildResolvers(),
  // Карта исходного когда, что бы видеть где есть ошибки
    devtool: isDev ? 'inline-source-map' : undefined,
  // Запуск дев сервера
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}