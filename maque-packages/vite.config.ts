import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            script: {
                defineModel: true
            }
        }),
        //生成ts声明文件
        dts({ tsconfigPath: './tsconfig.app.json' })
    ],
    build: {
        lib: {
            entry: './src/packages/index.ts',
            name: 'MaquePackages',
            fileName: 'index'
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})
