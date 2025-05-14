import {defineStore} from "pinia";
import {computed, ref} from "vue";
import type {ContentModel} from "../model/Content.model.ts";

export const useSystem = defineStore("system", () => {

    const confRef = ref<ContentModel>({})
    //临时测试的GUID
    const conf = computed(() => confRef.value)

    function setConf(_config: ContentModel) {
        confRef.value = _config
    }

    return {setConf, conf}
})
