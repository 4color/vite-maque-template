import MqComponent from "./mq-component2.vue"
import type {App} from 'vue';

MqComponent.install = (app: App) => {
    //@ts-ignore
    app.component(MqComponent.name, MqComponent)
}
export default MqComponent
