<template>
  <div class="container-fluid document-preview-page">
    <header class="document-preview-header">
      <button type="button" class="document-preview-header__back" @click="goBack">
        <SolarIcon name="alt-arrow-left" :size="18" aria-hidden="true" />
        <span>Kembali</span>
      </button>

      <div class="document-preview-header__title">
        <div>
          <span class="document-preview-header__eyebrow">PREVIEW DOKUMEN</span>
          <h1>Pricelist Alkes Q2 2026</h1>
        </div>
        <span class="confidential-badge">Rahasia</span>
      </div>
    </header>

    <section class="document-metadata" aria-label="Informasi dokumen">
      <div class="document-metadata__item">
        <span class="document-metadata__icon">
          <SolarIcon name="document-text" :size="20" color="currentColor" />
        </span>
        <div>
          <small>Nama Dokumen</small>
          <strong>Pricelist Alkes Q2 2026</strong>
        </div>
      </div>

      <div class="document-metadata__item">
        <span class="document-metadata__icon">
          <SolarIcon name="tag" :size="20" color="currentColor" />
        </span>
        <div>
          <small>Kategori</small>
          <strong>Harga</strong>
        </div>
      </div>

      <div class="document-metadata__item">
        <span class="document-metadata__icon">
          <SolarIcon name="calendar" :size="20" color="currentColor" />
        </span>
        <div>
          <small>Tanggal Dokumen</small>
          <strong>12 Mei 2026</strong>
        </div>
      </div>

      <div class="document-metadata__item document-metadata__item--access">
        <span class="document-metadata__icon document-metadata__icon--danger">
          <SolarIcon name="lock-keyhole" :size="20" color="currentColor" />
        </span>
        <div>
          <small>Status Akses</small>
          <strong>Rahasia</strong>
          <p>Dokumen Internal - Dilarang menyebarluaskan di luar kebutuhan penawaran resmi</p>
        </div>
      </div>
    </section>

    <section class="document-viewer" aria-label="Pratinjau dokumen">
      <div class="document-viewer__toolbar">
        <span class="document-viewer__page-info">
          <SolarIcon name="document" :size="17" aria-hidden="true" />
          Halaman 1 dari 1
        </span>

        <div class="document-viewer__zoom" aria-label="Kontrol zoom">
          <button
            type="button"
            aria-label="Perkecil tampilan"
            :disabled="zoom <= 75"
            @click="changeZoom(-25)"
          >
            <SolarIcon name="minus-circle" :size="19" aria-hidden="true" />
          </button>
          <span>{{ zoom }}%</span>
          <button
            type="button"
            aria-label="Perbesar tampilan"
            :disabled="zoom >= 150"
            @click="changeZoom(25)"
          >
            <SolarIcon name="add-circle" :size="19" aria-hidden="true" />
          </button>
        </div>

        <span class="document-viewer__mode">
          <SolarIcon name="eye" :size="17" aria-hidden="true" />
          Mode Baca (Read-Only - Dokumen Rahasia)
        </span>
      </div>

      <div class="document-viewer__stage">
        <div class="document-paper-wrap" :style="paperWrapStyle">
          <article class="document-paper" :style="paperStyle">
            <span class="document-paper__watermark" aria-hidden="true">RAHASIA</span>

            <header class="paper-header">
              <div class="paper-brand">
                <span class="paper-brand__mark">MHJ</span>
                <div>
                  <strong>PT. Mitra Husada Jaya</strong>
                  <small>Solusi Peralatan Kesehatan Terpercaya</small>
                </div>
              </div>
              <span class="paper-confidential">RAHASIA</span>
            </header>

            <div class="paper-title">
              <span>DAFTAR HARGA ALAT KESEHATAN</span>
              <h2>Pricelist Alkes Q2 2026</h2>
              <p>Berlaku mulai 12 Mei 2026</p>
            </div>

            <section class="paper-customer">
              <div>
                <small>Periode</small>
                <strong>Kuartal II 2026</strong>
              </div>
              <div>
                <small>Mata Uang</small>
                <strong>Rupiah (IDR)</strong>
              </div>
              <div>
                <small>Status Dokumen</small>
                <strong>Internal &amp; Terbatas</strong>
              </div>
            </section>

            <div class="paper-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Nama Produk</th>
                    <th>Kode</th>
                    <th>Satuan</th>
                    <th>Harga Penawaran</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01</td>
                    <td><strong>Patient Monitor 12.1 Inch</strong><small>Multi-parameter, adult &amp; pediatric</small></td>
                    <td>PM-1206</td>
                    <td>Unit</td>
                    <td>Rp 38.750.000</td>
                  </tr>
                  <tr>
                    <td>02</td>
                    <td><strong>Infusion Pump Digital</strong><small>High accuracy with alarm system</small></td>
                    <td>IP-602A</td>
                    <td>Unit</td>
                    <td>Rp 14.250.000</td>
                  </tr>
                  <tr>
                    <td>03</td>
                    <td><strong>Electrocardiograph 12 Channel</strong><small>Portable ECG with interpretation</small></td>
                    <td>ECG-120</td>
                    <td>Unit</td>
                    <td>Rp 31.900.000</td>
                  </tr>
                  <tr>
                    <td>04</td>
                    <td><strong>Hospital Bed Electric 3 Crank</strong><small>ABS panel, side rail, central lock</small></td>
                    <td>HB-E300</td>
                    <td>Unit</td>
                    <td>Rp 24.500.000</td>
                  </tr>
                  <tr>
                    <td>05</td>
                    <td><strong>Portable Suction Pump</strong><small>Oil-free pump, low noise operation</small></td>
                    <td>SP-500P</td>
                    <td>Unit</td>
                    <td>Rp 8.675.000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <section class="paper-notes">
              <strong>Ketentuan Harga</strong>
              <ol>
                <li>Harga belum termasuk PPN dan biaya pengiriman di luar area layanan reguler.</li>
                <li>Harga dapat berubah mengikuti kurs, stok, dan ketentuan principal.</li>
                <li>Penawaran resmi wajib diterbitkan oleh pihak berwenang PT. Mitra Husada Jaya.</li>
              </ol>
            </section>

            <footer class="paper-footer">
              <span>MHJ/PRICE/Q2/2026-0512</span>
              <strong>DOKUMEN INTERNAL - DILARANG MENYEBARLUASKAN</strong>
              <span>Halaman 1 dari 1</span>
            </footer>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

import { routes } from '@/router/routes'

const router = useRouter()
const zoom = ref(100)

const paperStyle = computed(() => ({
  transform: `scale(${zoom.value / 100})`,
}))

const paperWrapStyle = computed(() => ({
  width: `${794 * (zoom.value / 100)}px`,
  height: `${1123 * (zoom.value / 100)}px`,
}))

function changeZoom(amount: number) {
  zoom.value = Math.min(150, Math.max(75, zoom.value + amount))
}

function goBack() {
  void router.push(routes.MateriDokumen.List)
}
</script>

<style scoped>
.document-preview-page {
  --document-ink: #243240;
  padding-bottom: 36px;
}

.document-preview-header {
  margin-bottom: 18px;
}

.document-preview-header__back {
  display: inline-flex;
  min-height: 38px;
  align-items: center;
  gap: 7px;
  margin-bottom: 13px;
  border: 1px solid #e1e8ed;
  border-radius: 11px;
  padding: 8px 13px;
  color: #627483;
  background: #fff;
  box-shadow: 0 3px 10px rgba(31, 75, 105, 0.05);
  font-size: 11px;
  font-weight: 700;
  transition: border-color 0.18s ease, color 0.18s ease, background 0.18s ease;
}

.document-preview-header__back:hover,
.document-preview-header__back:focus-visible {
  border-color: var(--app-primary-border, #badff2);
  outline: 0;
  color: var(--app-primary-dark, #087cae);
  background: var(--app-primary-wash, #f2fbff);
}

.document-preview-header__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border: 1px solid var(--app-primary-border, #dcecf4);
  border-radius: 18px;
  padding: 20px 22px;
  background: linear-gradient(120deg, #fff 20%, var(--app-primary-wash, #f1faff) 100%);
  box-shadow: 0 7px 24px rgba(30, 75, 105, 0.07);
}

.document-preview-header__eyebrow {
  display: block;
  margin-bottom: 4px;
  color: var(--app-primary-dark, #087cae);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.11em;
}

.document-preview-header h1 {
  margin: 0;
  color: var(--document-ink);
  font-size: 22px;
  font-weight: 760;
}

.confidential-badge {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 7px 12px;
  color: #e11d48;
  background: #fff1f2;
  font-size: 10px;
  font-weight: 750;
}

.document-metadata {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr)) minmax(280px, 1.35fr);
  gap: 12px;
  margin-bottom: 18px;
}

.document-metadata__item {
  display: flex;
  min-width: 0;
  align-items: flex-start;
  gap: 11px;
  border: 1px solid #e2e8ed;
  border-radius: 15px;
  padding: 15px;
  background: #fff;
  box-shadow: 0 4px 16px rgba(31, 55, 75, 0.045);
}

.document-metadata__icon {
  display: grid;
  width: 38px;
  height: 38px;
  flex: 0 0 38px;
  place-items: center;
  border-radius: 11px;
  color: var(--app-primary, #18a6e4);
  background: var(--app-primary-wash, #eaf7fc);
}

.document-metadata__icon--danger {
  color: #e11d48;
  background: #fff1f2;
}

.document-metadata__item > div:last-child {
  display: flex;
  min-width: 0;
  flex-direction: column;
}

.document-metadata__item small {
  margin-bottom: 4px;
  color: #8a98a5;
  font-size: 9px;
  font-weight: 650;
}

.document-metadata__item strong {
  overflow: hidden;
  color: #344552;
  font-size: 11px;
  font-weight: 750;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.document-metadata__item p {
  margin: 5px 0 0;
  color: #788894;
  font-size: 8.5px;
  line-height: 1.45;
}

.document-viewer {
  overflow: hidden;
  border: 1px solid #dde6eb;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 8px 28px rgba(31, 60, 82, 0.08);
}

.document-viewer__toolbar {
  display: grid;
  grid-template-columns: minmax(150px, 1fr) auto minmax(250px, 1fr);
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid #dde6eb;
  padding: 12px 16px;
  background: #f8fafc;
}

.document-viewer__page-info,
.document-viewer__mode {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: #617382;
  font-size: 10px;
  font-weight: 650;
}

.document-viewer__mode {
  justify-self: end;
  color: #be123c;
}

.document-viewer__zoom {
  display: inline-grid;
  grid-template-columns: 34px 58px 34px;
  align-items: center;
  overflow: hidden;
  border: 1px solid #dce5ea;
  border-radius: 10px;
  background: #fff;
}

.document-viewer__zoom button {
  display: grid;
  height: 34px;
  place-items: center;
  border: 0;
  color: #667785;
  background: transparent;
}

.document-viewer__zoom button:hover:not(:disabled) {
  color: var(--app-primary-dark, #087cae);
  background: var(--app-primary-wash, #edf9fe);
}

.document-viewer__zoom button:disabled {
  cursor: not-allowed;
  opacity: 0.38;
}

.document-viewer__zoom span {
  border-right: 1px solid #e4eaee;
  border-left: 1px solid #e4eaee;
  color: #344552;
  font-size: 10px;
  font-weight: 750;
  line-height: 34px;
  text-align: center;
}

.document-viewer__stage {
  min-height: 720px;
  overflow: auto;
  padding: 34px;
  background-color: #e9eef2;
  background-image: radial-gradient(#d2dae0 0.7px, transparent 0.7px);
  background-size: 14px 14px;
}

.document-paper-wrap {
  position: relative;
  margin: 0 auto;
  transition: width 0.2s ease, height 0.2s ease;
}

.document-paper {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 794px;
  height: 1123px;
  overflow: hidden;
  padding: 54px 58px 46px;
  color: #253746;
  background: #fff;
  box-shadow: 0 14px 38px rgba(28, 48, 64, 0.18);
  font-family: Arial, Helvetica, sans-serif;
  transform-origin: top left;
  transition: transform 0.2s ease;
}

.document-paper::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 8px;
  background: linear-gradient(90deg, #032a4e 0 72%, #18a6e4 72% 100%);
  content: '';
}

.document-paper__watermark {
  position: absolute;
  top: 48%;
  left: 50%;
  z-index: 0;
  color: rgba(190, 18, 60, 0.055);
  font-size: 112px;
  font-weight: 800;
  letter-spacing: 0.08em;
  pointer-events: none;
  transform: translate(-50%, -50%) rotate(-32deg);
}

.paper-header,
.paper-title,
.paper-customer,
.paper-table-wrap,
.paper-notes,
.paper-footer {
  position: relative;
  z-index: 1;
}

.paper-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dbe4e9;
  padding-bottom: 23px;
}

.paper-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.paper-brand__mark {
  display: grid;
  width: 58px;
  height: 42px;
  place-items: center;
  border-radius: 7px;
  color: #fff;
  background: #032a4e;
  font-size: 19px;
  font-weight: 800;
  letter-spacing: 0.04em;
}

.paper-brand div {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.paper-brand strong {
  color: #032a4e;
  font-size: 15px;
}

.paper-brand small {
  color: #6e7e8a;
  font-size: 8px;
}

.paper-confidential {
  border: 1px solid #fecdd3;
  border-radius: 4px;
  padding: 6px 9px;
  color: #be123c;
  background: #fff1f2;
  font-size: 8px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.paper-title {
  padding: 31px 0 24px;
  text-align: center;
}

.paper-title > span {
  color: #1398d0;
  font-size: 8px;
  font-weight: 800;
  letter-spacing: 0.15em;
}

.paper-title h2 {
  margin: 7px 0 6px;
  color: #032a4e;
  font-size: 27px;
  font-weight: 800;
}

.paper-title p {
  margin: 0;
  color: #75848f;
  font-size: 10px;
}

.paper-customer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 24px;
  border: 1px solid #dbe5ea;
  border-radius: 8px;
  background: #f7fafc;
}

.paper-customer div {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 13px 15px;
}

.paper-customer div + div {
  border-left: 1px solid #dbe5ea;
}

.paper-customer small {
  color: #83919b;
  font-size: 7px;
  font-weight: 700;
  text-transform: uppercase;
}

.paper-customer strong {
  color: #344552;
  font-size: 9px;
}

.paper-table-wrap {
  overflow: hidden;
  border: 1px solid #d9e3e8;
  border-radius: 7px;
}

.paper-table-wrap table {
  width: 100%;
  border-collapse: collapse;
  font-size: 9px;
}

.paper-table-wrap th {
  padding: 11px 10px;
  color: #fff;
  background: #032a4e;
  font-size: 7.5px;
  font-weight: 750;
  letter-spacing: 0.025em;
  text-align: left;
  text-transform: uppercase;
}

.paper-table-wrap th:first-child,
.paper-table-wrap td:first-child {
  width: 44px;
  text-align: center;
}

.paper-table-wrap th:nth-child(3),
.paper-table-wrap td:nth-child(3) {
  width: 78px;
}

.paper-table-wrap th:nth-child(4),
.paper-table-wrap td:nth-child(4) {
  width: 58px;
  text-align: center;
}

.paper-table-wrap th:last-child,
.paper-table-wrap td:last-child {
  width: 118px;
  text-align: right;
}

.paper-table-wrap td {
  border-top: 1px solid #e3e9ed;
  padding: 12px 10px;
  color: #4a5b68;
}

.paper-table-wrap tbody tr:nth-child(even) {
  background: #f8fafb;
}

.paper-table-wrap td strong,
.paper-table-wrap td small {
  display: block;
}

.paper-table-wrap td strong {
  margin-bottom: 3px;
  color: #263b4a;
  font-size: 9px;
}

.paper-table-wrap td small {
  color: #8996a0;
  font-size: 7px;
}

.paper-notes {
  margin-top: 25px;
  border-left: 3px solid #18a6e4;
  padding: 2px 0 2px 15px;
}

.paper-notes strong {
  color: #263b4a;
  font-size: 9px;
}

.paper-notes ol {
  margin: 8px 0 0;
  padding-left: 17px;
  color: #687985;
  font-size: 8px;
  line-height: 1.8;
}

.paper-footer {
  position: absolute;
  right: 58px;
  bottom: 34px;
  left: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #dbe4e9;
  padding-top: 13px;
  color: #8a97a0;
  font-size: 7px;
}

.paper-footer strong {
  color: #be123c;
  font-size: 6.7px;
  letter-spacing: 0.025em;
}

@media (max-width: 1199px) {
  .document-metadata {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 850px) {
  .document-viewer__toolbar {
    grid-template-columns: 1fr auto;
  }

  .document-viewer__mode {
    grid-column: 1 / -1;
    justify-self: start;
  }
}

@media (max-width: 575px) {
  .document-preview-header__title {
    align-items: flex-start;
    border-radius: 16px;
    padding: 17px;
  }

  .document-preview-header h1 {
    font-size: 18px;
  }

  .document-metadata {
    grid-template-columns: 1fr;
  }

  .document-viewer__toolbar {
    grid-template-columns: 1fr;
  }

  .document-viewer__zoom,
  .document-viewer__mode {
    justify-self: start;
  }

  .document-viewer__mode {
    grid-column: auto;
  }

  .document-viewer__stage {
    padding: 20px;
  }
}
</style>
