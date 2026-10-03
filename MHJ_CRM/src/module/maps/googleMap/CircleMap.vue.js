import { defineAsyncComponent } from 'vue';
import { GoogleMap, Circle } from 'vue3-google-map';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const apiKey = import.meta.env.GOOGLE_MAPS_API_KEY;
const center = { lat: 37.09, lng: -95.712 };
const cities = {
    chicago: {
        center: { lat: 41.878, lng: -87.629 },
        population: 2714856,
    },
    newyork: {
        center: { lat: 40.714, lng: -74.005 },
        population: 8405837,
    },
    losangeles: {
        center: { lat: 34.052, lng: -118.243 },
        population: 3857799,
    },
    vancouver: {
        center: { lat: 49.25, lng: -123.1 },
        population: 603502,
    },
};
const circles = {};
for (const key in cities) {
    const city = cities[key];
    circles[key] = {
        center: city.center,
        radius: Math.sqrt(city.population) * 100,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
    };
}
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
    headerTitle: ('Circle on the map'),
    border: (true),
    padding: (false),
    cardBodyClass: ('map-z-index'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Circle on the map'),
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
    center: (__VLS_ctx.center),
    zoom: (4),
    ...{ style: {} },
    mapTypeId: "hybrid",
}));
const __VLS_9 = __VLS_8({
    mapId: "DEMO_MAP_ID",
    apiKey: (__VLS_ctx.apiKey),
    center: (__VLS_ctx.center),
    zoom: (4),
    ...{ style: {} },
    mapTypeId: "hybrid",
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
const { default: __VLS_12 } = __VLS_10.slots;
for (const [circle, index] of __VLS_vFor((__VLS_ctx.circles))) {
    let __VLS_13;
    /** @ts-ignore @type {typeof __VLS_components.Circle} */
    Circle;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
        key: (index),
        options: (circle),
    }));
    const __VLS_15 = __VLS_14({
        key: (index),
        options: (circle),
    }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    // @ts-ignore
    [apiKey, center, circles,];
}
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
