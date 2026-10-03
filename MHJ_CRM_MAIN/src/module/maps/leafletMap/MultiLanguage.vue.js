import { defineAsyncComponent } from 'vue';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
const language = ref('en');
const tileLayers = {
    en: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    fr: 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
    de: 'https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png',
};
const polygon = ref({
    zoom: 11,
    center: [47.2219, -1.545266],
    lat: [
        [47.2263299, -1.6222],
        [47.21024, -1.6270065],
        [47.1969447, -1.6136169],
        [47.1852793, -1.6143036],
        [47.1794457, -1.6098404],
        [47.1775788, -1.5985107],
        [47.1676598, -1.5753365],
        [47.1593731, -1.5521622],
        [47.1593731, -1.5319061],
        [47.1722111, -1.5143967],
        [47.1960115, -1.4841843],
        [47.2095404, -1.4848709],
        [47.2291277, -1.4683914],
        [47.2533687, -1.5116501],
        [47.2577961, -1.5531921],
        [47.26828069, -1.5621185],
        [47.2657179, -1.589241],
        [47.2589612, -1.6204834],
        [47.237287, -1.6266632],
        [47.2263299, -1.6222],
    ],
    color: '#ff00ff',
    url: tileLayers[language.value],
});
watch(language, (newLang) => {
    polygon.value.url = tileLayers[newLang];
    locale.value = newLang;
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
    headerTitle: ('Multi Language Map'),
    border: (true),
    padding: (false),
    cardBodyClass: ('map-z-index'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Multi Language Map'),
    border: (true),
    padding: (false),
    cardBodyClass: ('map-z-index'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
(__VLS_ctx.$t('selectLanguage'));
__VLS_asFunctionalElement1(__VLS_intrinsics.select, __VLS_intrinsics.select)({
    value: (__VLS_ctx.language),
});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "en",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "fr",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "de",
});
let __VLS_7;
/** @ts-ignore @type { | typeof __VLS_components.lMap | typeof __VLS_components.LMap | typeof __VLS_components['l-map'] | typeof __VLS_components.lMap | typeof __VLS_components.LMap | typeof __VLS_components['l-map']} */
lMap;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    useGlobalLeaflet: (false),
    zoom: (__VLS_ctx.polygon.zoom),
    center: (__VLS_ctx.polygon.center),
    ...{ style: {} },
}));
const __VLS_9 = __VLS_8({
    useGlobalLeaflet: (false),
    zoom: (__VLS_ctx.polygon.zoom),
    center: (__VLS_ctx.polygon.center),
    ...{ style: {} },
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
}));
const __VLS_20 = __VLS_19({
    latLngs: (__VLS_ctx.polygon.lat),
    color: (__VLS_ctx.polygon.color),
}, ...__VLS_functionalComponentArgsRest(__VLS_19));
const { default: __VLS_23 } = __VLS_21.slots;
let __VLS_24;
/** @ts-ignore @type { | typeof __VLS_components.lPopup | typeof __VLS_components.LPopup | typeof __VLS_components['l-popup'] | typeof __VLS_components.lPopup | typeof __VLS_components.LPopup | typeof __VLS_components['l-popup']} */
lPopup;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent1(__VLS_24, new __VLS_24({}));
const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
const { default: __VLS_29 } = __VLS_27.slots;
(__VLS_ctx.$t('polygonLabel'));
// @ts-ignore
[$t, $t, language, polygon, polygon, polygon, polygon, polygon,];
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
