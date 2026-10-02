import { defineAsyncComponent, ref } from 'vue';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const simple = ref({
    zoom: 5,
    center: [49.439557, 234.558105],
    url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Simple Map'),
    border: (true),
    padding: (false),
    cardBodyClass: ('map-z-index'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Simple Map'),
    border: (true),
    padding: (false),
    cardBodyClass: ('map-z-index'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.lMap | typeof __VLS_components.LMap | typeof __VLS_components.lMap | typeof __VLS_components.LMap} */
lMap;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    useGlobalLeaflet: (false),
    zoom: (__VLS_ctx.simple.zoom),
    center: (__VLS_ctx.simple.center),
    ...{ style: {} },
}));
const __VLS_9 = __VLS_8({
    useGlobalLeaflet: (false),
    zoom: (__VLS_ctx.simple.zoom),
    center: (__VLS_ctx.simple.center),
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
const { default: __VLS_12 } = __VLS_10.slots;
let __VLS_13;
/** @ts-ignore @type {typeof __VLS_components.lTileLayer | typeof __VLS_components.LTileLayer | typeof __VLS_components.lTileLayer | typeof __VLS_components.LTileLayer} */
lTileLayer;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
    url: (__VLS_ctx.simple.url),
}));
const __VLS_15 = __VLS_14({
    url: (__VLS_ctx.simple.url),
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
// @ts-ignore
[simple, simple, simple,];
var __VLS_10;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
