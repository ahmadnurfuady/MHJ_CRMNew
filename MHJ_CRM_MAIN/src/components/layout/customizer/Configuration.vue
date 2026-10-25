<template>
  <div class="customizer-header">
    <button
      type="button"
      class="customizer-close"
      aria-label="Tutup pengaturan tampilan"
      title="Tutup"
      @click="closecustomizer"
    >
      <SolarIcon name="close" :size="24" aria-hidden="true" />
    </button>
    <h5 class="f-w-700">Pengaturan Tampilan</h5>
    <p class="mb-0">Coba perubahan secara langsung</p>
    <button
      type="button"
      class="btn btn-primary plus-popup mt-2"
      data-bs-toggle="modal"
      data-bs-target="#configModal"
    >
      Konfigurasi
    </button>
    <teleport to="body">
      <div
        class="modal fade"
        id="configModal"
        tabindex="-1"
        aria-labelledby="configModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-header modal-copy-header">
              <h3 class="headerTitle mb-0">Konfigurasi tampilan</h3>
            </div>
            <div class="modal-body">
              <div class="config-popup">
                <p>
                  Sesuaikan konfigurasi berikut untuk menerapkan tema tampilan yang diinginkan.
                </p>
                <p>
                  <b>Lokasi: src &gt; data &gt; layout.json</b>
                </p>
                <div>
                  <pre class="overflow-hidden">
                                                                                                            <code>
                                                                                                              settings:
           {
                "layout_type":'{{ layout.settings.layoutType }}',
                "layout":'{{ layout.settings.layout }}',
                "sidebar_setting": '{{ layout.settings.sidebarSetting }}'
            },
    color:
           {
                "layout_version":'{{ layout.color.layoutVersion }}',
                "primary_color":'{{ layout.color.primaryColor}}',
                "secondary_color":'{{ layout.color.secondaryColor }}'
            }
                                                    </code>
   </pre>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button class="btn btn-primary" @click="copy()">Salin teks</button>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Batal
              </button>
            </div>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>
<script lang="ts" setup>
import { useLayout } from '@/store/layout'
import { storeToRefs } from 'pinia'
import { toast } from 'vue3-toastify'

const store = useLayout()
const { layoutState } = storeToRefs(store)
const layout = layoutState.value.layouts

function copy() {
  navigator.clipboard.writeText(JSON.stringify(layoutState.value.layouts))
  toast.success('Kode berhasil disalin ke papan klip.', {
    hideProgressBar: true,
    autoClose: 2000,
    theme: 'colored',
    position: 'top-right',
  })
}

function closecustomizer() {
  layoutState.value.customizer = ''
}
</script>

<style scoped>
.customizer-close {
  display: inline-grid;
  width: 36px;
  height: 36px;
  margin: -4px 0 8px;
  padding: 0;
  place-items: center;
  color: var(--theme-default);
  background: transparent;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
}

.customizer-close:hover {
  background: rgba(var(--bs-primary-rgb), 0.1);
}

.customizer-close:focus-visible {
  outline: 2px solid var(--theme-default);
  outline-offset: 2px;
}
</style>
