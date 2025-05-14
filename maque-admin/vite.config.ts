import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import {createHtmlPlugin} from "vite-plugin-html";
import {fileURLToPath, URL} from "node:url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
    vueJsx(),
    createHtmlPlugin({
      /**
       * 需要注入 index.html ejs 模版的数据
       */
      inject: {
        data: {
          NODE_ENV: process.env.NODE_ENV
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "https://api.xygeng.cn",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        headers: {
          //"Host": "localhost:5173"
          //"Host": "https://www.baidu.com"
        },
        bypass(req, res, options) {
          const proxyURL = options.target + options.rewrite(req.url);
          res.setHeader('x-req-proxyURL', proxyURL) // 将真实请求地址设置到响应头中
        }
      }
    },

  }
})
