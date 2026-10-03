import { createApp, DefineComponent } from 'vue'
import { createPinia } from 'pinia'
import { Tooltip, Popover, ScrollSpy } from 'bootstrap'

import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './assets/scss/app.scss'
import 'leaflet/dist/leaflet.css'

import VueFeather from 'vue-feather'
import VueApexCharts from 'vue3-apexcharts'
import VueECharts from 'vue-echarts'
import VueSlider from 'vue-3-slider-component'
import draggable from 'vuedraggable'
import { Ckeditor } from '@ckeditor/ckeditor5-vue'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import vueFilePond from 'vue-filepond'
import DropZone from 'dropzone-vue'
import Vue3TagsInput from 'vue3-tags-input'
import { Swiper, SwiperSlide } from 'swiper/vue'
import Flatpickr from 'vue-flatpickr-component'
import SimpleTypeahead from 'vue3-simple-typeahead'
import StarRating from 'vue-star-rating'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue'
import Loading from 'vue3-loading-overlay'
import vueChartist from 'vue-chartist'
import { GChart } from 'vue-google-charts'
import Lightbox from 'vue-easy-lightbox'

import English from '@/core/locales/en.json'
import Russian from '@/core/locales/ru.json'
import Arabic from '@/core/locales/ar.json'
import German from '@/core/locales/ge.json'
import لعربية from '@/core/locales/ae.json'
import 简体中文 from '@/core/locales/cn.json'
import Português from '@/core/locales/pt.json'
import Français from '@/core/locales/fr.json'
import Deutsch from '@/core/locales/de.json'
import Español from '@/core/locales/es.json'

import { createI18n } from 'vue-i18n'
const i18n = createI18n({
  legacy: false,
  locale: 'English',
  messages: {
    English: English,
    German: German,
    Russian: Russian,
    Arabic: Arabic,
    Español: Español,
    Deutsch: Deutsch,
    Français: Français,
    Português: Português,
    简体中文: 简体中文,
    لعربية: لعربية,
  },
})

const app = createApp(App)
const head = createHead()

const FilePond = vueFilePond(
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType
) as DefineComponent

app
  .use(createPinia())
  .use(router)
  .use(i18n)
  .use(DropZone)
  .use(vueChartist)
  .use(Lightbox)
  .component(VueFeather.name!, VueFeather)
  .component('apexchart', VueApexCharts)
  .component('v-chart', VueECharts)
  .component('VueSlider', VueSlider)
  .component('draggable', draggable)
  .component('Ckeditor', Ckeditor)
  .component('FilePond', FilePond)
  .component('TagInput', Vue3TagsInput)
  .component('Swiper', Swiper)
  .component('SwiperSlide', SwiperSlide)
  .component('Flatpickr', Flatpickr)
  .component('TypeAhead', SimpleTypeahead)
  .component('StarRating', StarRating)
  .component('OverlayScrollbars', OverlayScrollbarsComponent)
  .component('LoadingOverlay', Loading)
  .component('GChart', GChart)

app.directive('tooltip', {
  mounted(el) {
    new Tooltip(el)
  },
  unmounted(el) {
    const tooltipInstance = Tooltip.getInstance(el)
    if (tooltipInstance) tooltipInstance.dispose()
  },
})

app.directive('popover', {
  mounted(el) {
    new Popover(el)
  },
  unmounted(el) {
    const popoverInstance = Popover.getInstance(el)
    if (popoverInstance) popoverInstance.dispose()
  },
})

app.directive('scrollspy', {
  mounted(el, binding) {
    const options = binding.value || {}
    new ScrollSpy(el, options)
  },
  unmounted(el) {
    const scrollSpyInstance = ScrollSpy.getInstance(el)
    if (scrollSpyInstance) scrollSpyInstance.dispose()
  },
})
app.use(head)
app.mount('#app')
