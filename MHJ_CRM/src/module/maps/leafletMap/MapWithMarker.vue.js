import { defineAsyncComponent, ref } from 'vue';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const simpleWithMarker = ref({
    zoom: 13,
    center: [47.41322, -1.219482],
    url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    marker: [47.41322, -1.219482],
    text: 'my marker popup text',
    title: 'My marker popup title',
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
    headerTitle: ('Map With Marker'),
    border: (true),
    padding: (false),
    cardBodyClass: ('map-z-index'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Map With Marker'),
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
    zoom: (__VLS_ctx.simpleWithMarker.zoom),
    center: (__VLS_ctx.simpleWithMarker.center),
    ...{ style: {} },
}));
const __VLS_9 = __VLS_8({
    useGlobalLeaflet: (false),
    zoom: (__VLS_ctx.simpleWithMarker.zoom),
    center: (__VLS_ctx.simpleWithMarker.center),
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
const { default: __VLS_12 } = __VLS_10.slots;
let __VLS_13;
/** @ts-ignore @type {typeof __VLS_components.lMarker | typeof __VLS_components.LMarker | typeof __VLS_components.lMarker | typeof __VLS_components.LMarker} */
lMarker;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
    latLng: (__VLS_ctx.simpleWithMarker.marker),
    title: (__VLS_ctx.simpleWithMarker.title),
    draggable: (false),
}));
const __VLS_15 = __VLS_14({
    latLng: (__VLS_ctx.simpleWithMarker.marker),
    title: (__VLS_ctx.simpleWithMarker.title),
    draggable: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
const { default: __VLS_18 } = __VLS_16.slots;
let __VLS_19;
/** @ts-ignore @type {typeof __VLS_components.lPopup | typeof __VLS_components.LPopup} */
lPopup;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({
    content: (__VLS_ctx.simpleWithMarker.text),
}));
const __VLS_21 = __VLS_20({
    content: (__VLS_ctx.simpleWithMarker.text),
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
// @ts-ignore
[simpleWithMarker, simpleWithMarker, simpleWithMarker, simpleWithMarker, simpleWithMarker,];
var __VLS_16;
let __VLS_24;
/** @ts-ignore @type {typeof __VLS_components.lTileLayer | typeof __VLS_components.LTileLayer} */
lTileLayer;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent1(__VLS_24, new __VLS_24({
    url: (__VLS_ctx.simpleWithMarker.url),
}));
const __VLS_26 = __VLS_25({
    url: (__VLS_ctx.simpleWithMarker.url),
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
// @ts-ignore
[simpleWithMarker,];
var __VLS_10;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
