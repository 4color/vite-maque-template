import {createApp} from 'vue'
import {createPinia} from 'pinia'

import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'splitpanes/dist/splitpanes.css'

const app = createApp(App)
app.use(router)
app.use(ElementPlus, {
    locale: zhCn,
})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

//@ts-ignore
import VMdEditor from '@kangc/v-md-editor';
//@ts-ignore
import VMdPreview from '@kangc/v-md-editor/lib/preview';
//@ts-ignore
import VMdPreviewHtml from '@kangc/v-md-editor/lib/preview-html';
import '@kangc/v-md-editor/lib/style/preview-html.css';

import '@kangc/v-md-editor/lib/style/base-editor.css';
//@ts-ignore
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';

VMdEditor.use(githubTheme, {
    Hljs: hljs,
});
VMdPreview.use(githubTheme, {
    Hljs: hljs,
});

app.use(VMdEditor);
app.use(VMdPreview);
app.use(VMdPreviewHtml);

app.use(createPinia())

import MaquePackages from "maque-packages"

app.use(MaquePackages)

app.mount('#app')
