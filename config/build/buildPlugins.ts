import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    // Плагин сгенерирует для вас файл HTML5, который включает в себя все ваши пакеты веб-пакетов в теле с использованием script тегов.
        new HtmlWebpackPlugin({
    // Указать путь к своему собственному template
          template: paths.html,
        }),
    // Предоставляет ProgressPluginвозможность настроить отображение прогресса во время компиляции
        new webpack.ProgressPlugin(),
    // Вынести css стили в отдельный файл
        new MiniCssExtractPlugin({
          filename: 'css/[name].[contenthash:8].css',
          chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.HotModuleReplacementPlugin(),
    // C помощью него можно прокидывать глобальные переменные в код прилложения
        new webpack.DefinePlugin({
          __IS_DEV__: JSON.stringify(isDev),
        })
      ];

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin());
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return plugins;
};
