# 自定义NPM组件

## 1、自定义组件的开发

### Vue组件开发

请参考 mq-component 文件夹

mq-index.vue： 组件的具体内容

index.ts： 用于定义组件的名称以及安装

### package.json配置

```json
{
  "name": "maque-packages", //安装到npmjs上的名称，用于被人安装
  "private": false,
  "version": "1.0.4", //版本
  "type": "module",
   //规定哪些文件上传到npmjs.org服务器上
  "files": [
    "dist", //打包出来的目录，这样源码不就会上传
    "index.d.ts",
    "package.json"
  ],
  "main": "./dist/index.umd.cjs", //加载入口
  "module": "./dist/index.js", //加载入口
  "types": "./index.d.ts", //定义文件
  "exports": {
    ".": {
      "types": "./index.d.ts",
      "import": "./dist/index.js",
      "require": "./dist/index.umd.cjs"
    },
    "./*": "./*"
  },
  "style": "dist/style.css", //样式文件
}
```

### 依赖包配置

作为一纯粹的组件包，如果你依赖了许多组件，但是有些组件不想被打包进来，不然包就会大，比如Element-Plus，这个就需要排除掉

配置 vite.config.ts

```ts
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      script: {
        defineModel: true
      }
    })],
  build: {
    lib: {
      entry: './src/index.ts', //指定组件的总入口
      name: 'MaquePackages',//指定组件的name
      fileName: 'index'
    },
     
   //排除打包掉的内容，
    rollupOptions: {
      external: ['vue', "element-plus", "xlsx", "xlsx-style-vite", "file-saver", "@types/lodash"],
      output: {
        globals: {
          vue: 'Vue',
          "element-plus": "element-plus",
          "xlsx": "xlsx",
          "xlsx-style-vite": "xlsx-style-vite"
        }
      }
    }
  }
})
```

## 2、组件发布

对组件进行打包

```shell
pnpm run build
```

到 https://npmjs.org/ 注册账号

确保本地的npm源为 官方源  https://registry.npmjs.org/

如果不清楚，执行命令可查看：

```shell
npm get registry
```

先登陆 npmjs

```shell
npm login
```

登陆成功后

再执行发布

```shell
npm publish
```

发布成功，登陆 https://npmjs.org/ 可以在你的packages下面，看到你发布的内容

如果以后要修改发布，必须修改package.json里的版本号才能再发布。

组件修改了内容，必须重新npm run build。

下一次发布时，就不用再login了，直接publish即可
