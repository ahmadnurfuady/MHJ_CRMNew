import { ref } from 'vue';
import { defineAsyncComponent } from 'vue';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const polygon = ref({
    zoom: 4,
    center: [22.9734, 78.6569],
    lat: [
        [35.65, 76.0],
        [34.0, 78.0],
        [32.0, 80.0],
        [28.0, 81.0],
        [27.0, 88.0],
        [24.0, 92.0],
        [22.0, 91.0],
        [21.0, 89.0],
        [20.0, 88.0],
        [17.0, 85.0],
        [15.0, 80.0],
        [12.0, 76.0],
        [8.0, 77.5],
        [10.0, 72.0],
        [15.0, 70.0],
        [22.0, 68.0],
        [25.0, 70.0],
        [28.0, 69.0],
        [30.0, 70.0],
        [32.0, 72.0],
        [34.0, 74.0],
        [35.65, 76.0],
    ],
    color: '#ff0000',
    fillColor: '#ff0000',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Map with Polygon - India'),
    border: (true),
    padding: (false),
    cardBodyClass: ('map-z-index'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Map with Polygon - India'),
    border: (true),
    padding: (false),
    cardBodyClass: ('map-z-index'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
let __VLS_7;
/** @ts-ignore @type { | typeof __VLS_components.lMap | typeof __VLS_components.LMap | typeof __VLS_components['l-map'] | typeof __VLS_components.lMap | typeof __VLS_components.LMap | typeof __VLS_components['l-map']} */
lMap;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    ...{ style: {} },
    zoom: (__VLS_ctx.polygon.zoom),
    center: (__VLS_ctx.polygon.center),
    useGlobalLeaflet: (false),
}));
const __VLS_9 = __VLS_8({
    ...{ style: {} },
    zoom: (__VLS_ctx.polygon.zoom),
    center: (__VLS_ctx.polygon.center),
    useGlobalLeaflet: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
const { default: __VLS_12 } = __VLS_10.slots;
let __VLS_13;
/** @ts-ignore @type { | typeof __VLS_components.lTileLayer | typeof __VLS_components.LTileLayer | typeof __VLS_components['l-tile-layer']} */
lTileLayer;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
    url: (__VLS_ctx.polygon.url),
}));
const __VLS_15 = __VLS_14({
    url: (__VLS_ctx.polygon.url),
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
let __VLS_18;
/** @ts-ignore @type { | typeof __VLS_components.lPolygon | typeof __VLS_components.LPolygon | typeof __VLS_components['l-polygon'] | typeof __VLS_components.lPolygon | typeof __VLS_components.LPolygon | typeof __VLS_components['l-polygon']} */
lPolygon;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({
    latLngs: (__VLS_ctx.polygon.lat),
    color: (__VLS_ctx.polygon.color),
    fillColor: (__VLS_ctx.polygon.fillColor),
    fillOpacity: (0.3),
}));
const __VLS_20 = __VLS_19({
    latLngs: (__VLS_ctx.polygon.lat),
    color: (__VLS_ctx.polygon.color),
    fillColor: (__VLS_ctx.polygon.fillColor),
    fillOpacity: (0.3),
}, ...__VLS_functionalComponentArgsRest(__VLS_19));
const { default: __VLS_23 } = __VLS_21.slots;
let __VLS_24;
/** @ts-ignore @type { | typeof __VLS_components.lPopup | typeof __VLS_components.LPopup | typeof __VLS_components['l-popup'] | typeof __VLS_components.lPopup | typeof __VLS_components.LPopup | typeof __VLS_components['l-popup']} */
lPopup;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent1(__VLS_24, new __VLS_24({}));
const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
const { default: __VLS_29 } = __VLS_27.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.br)({});
// @ts-ignore
[polygon, polygon, polygon, polygon, polygon, polygon,];
var __VLS_27;
// @ts-ignore
[];
var __VLS_21;
// @ts-ignore
[];
var __VLS_10;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
