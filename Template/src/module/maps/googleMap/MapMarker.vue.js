import { defineAsyncComponent } from 'vue';
import { GoogleMap, AdvancedMarker } from 'vue3-google-map';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const apiKey = import.meta.env.GOOGLE_MAPS_API_KEY;
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
    headerTitle: ('Map at a specified location'),
    border: (true),
    padding: (false),
    cardBodyClass: ('map-z-index'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Map at a specified location'),
    border: (true),
    padding: (false),
    cardBodyClass: ('map-z-index'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "map-js-height" },
});
/** @type {__VLS_StyleScopedClasses['map-js-height']} */ ;
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.GoogleMap | typeof __VLS_components.GoogleMap} */
GoogleMap;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    mapId: "DEMO_MAP_ID",
    apiKey: (__VLS_ctx.apiKey),
    center: ({ lat: 20.5937, lng: 78.9629 }),
    zoom: (5),
    ...{ style: {} },
    mapTypeId: "hybrid",
}));
const __VLS_9 = __VLS_8({
    mapId: "DEMO_MAP_ID",
    apiKey: (__VLS_ctx.apiKey),
    center: ({ lat: 20.5937, lng: 78.9629 }),
    zoom: (5),
    ...{ style: {} },
    mapTypeId: "hybrid",
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
const { default: __VLS_12 } = __VLS_10.slots;
let __VLS_13;
/** @ts-ignore @type {typeof __VLS_components.AdvancedMarker} */
AdvancedMarker;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
    options: ({ position: { lat: 23.0225, lng: 72.5714 } }),
}));
const __VLS_15 = __VLS_14({
    options: ({ position: { lat: 23.0225, lng: 72.5714 } }),
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
// @ts-ignore
[apiKey,];
var __VLS_10;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
