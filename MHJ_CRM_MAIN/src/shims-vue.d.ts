declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
  export default component
}

declare module '*.json' {
  const value: Record<string, unknown>
  export default value
}

// dropzone-vue.d.ts
declare module 'dropzone-vue' {
  import type { Plugin } from 'vue'
  const DropzoneVue: Plugin
  export default DropzoneVue
}

declare module 'bootstrap'
declare module 'vue-flatpickr-component'
declare module 'vue3-tags-input'
declare module 'vue-3-slider-component'
declare module 'aos'
declare module 'aos-vue'
declare module 'vue-chartist'
declare module 'filepond-plugin-file-validate-type'
declare module 'filepond-plugin-image-preview'
declare module 'vue-filepond'
declare module 'vue-star-rating'
declare module 'v-onboarding'
declare module 'vuedraggable'
declare module 'vue3-simple-typeahead'
declare module 'overlayscrollbars-vue'
declare module 'vue3-loading-overlay'
declare module 'vue3-google-map'
