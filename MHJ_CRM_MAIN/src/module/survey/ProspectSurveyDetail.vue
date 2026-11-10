<template>
  <section class="survey-detail">
    <div class="survey-detail__grid">
      <article class="survey-card">
        <form class="prospect-form" @submit.prevent>
          <div class="selected-event-banner">
            <span>Event</span>
            <strong>INAHEF 2026</strong>
          </div>

          <fieldset class="prospect-form__section">
            <legend>Data Pengunjung</legend>

            <label class="prospect-field">
              <span>Nama lengkap <b>*</b></span>
              <input
                v-model="form.fullName"
                type="text"
                placeholder="Contoh: dr. Budi Santoso"
                required
              />
            </label>

            <label class="prospect-field">
              <span>Asal faskes/instansi <b>*</b></span>
              <input
                v-model="form.institution"
                type="text"
                placeholder="Contoh: RS Medika"
                required
              />
            </label>
          </fieldset>

          <fieldset class="prospect-form__section">
            <legend>Ketertarikan Produk</legend>

            <label class="prospect-field">
              <span>Alkes yang diminati <b>*</b></span>
              <input
                v-model="form.interestedProducts"
                type="text"
                placeholder="Contoh: USG, CT Scan"
                required
              />
            </label>

            <label class="prospect-field">
              <span>Tingkat Ketertarikan <b>*</b></span>
              <span class="prospect-select">
                <select v-model="form.interestLevel" required>
                  <option>Sangat Tertarik (Hot Prospek)</option>
                  <option>Tertarik (Warm Prospek)</option>
                  <option>Cukup Tertarik (Cold Prospek)</option>
                </select>
                <SolarIcon name="alt-arrow-down" :size="17" aria-hidden="true" />
              </span>
            </label>
          </fieldset>

          <button type="submit" class="prospect-form__submit">Simpan</button>
        </form>
      </article>

      <article class="survey-card prospect-data-card">
        <header class="prospect-data-card__header">
          <h2>Data Prospek Terkumpul - INAHEF 2026</h2>
          <span>1 Prospek</span>
        </header>

        <div class="prospect-table-wrap custom-scrollbar">
          <table class="prospect-table">
            <thead>
              <tr>
                <th>Nama Lengkap</th>
                <th>Asal Faskes/Instansi</th>
                <th>Alkes yang Diminati</th>
                <th>Tingkat Ketertarikan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>dr. Budi Santoso</td>
                <td>RS Medika</td>
                <td>USG, CT Scan</td>
                <td>
                  <span class="interest-badge">Sangat Tertarik (Hot Prospek)</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  fullName: '',
  institution: '',
  interestedProducts: '',
  interestLevel: 'Sangat Tertarik (Hot Prospek)',
})
</script>

<style scoped>
.survey-detail {
  display: grid;
  gap: 18px;
}

.survey-card {
  border: 1px solid #e9edf1;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 6px 20px rgba(27, 43, 65, 0.04);
}

.prospect-form__submit:focus-visible {
  outline: 3px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.2);
  outline-offset: 2px;
}

.survey-detail__grid {
  display: grid;
  grid-template-columns: minmax(360px, 0.72fr) minmax(0, 1.28fr);
  align-items: start;
  gap: 18px;
}

.survey-card {
  min-width: 0;
  padding: 20px;
}

.prospect-form {
  display: grid;
  gap: 22px;
}

.selected-event-banner {
  display: grid;
  gap: 3px;
  border-radius: 12px;
  padding: 14px 16px;
  background: #e6f4fe;
}

.selected-event-banner span {
  color: var(--app-primary-dark, #0c8fc6);
  font-size: 10.5px;
  font-weight: 600;
}

.selected-event-banner strong {
  color: var(--app-primary-dark, #0c8fc6);
  font-size: 14px;
  font-weight: 700;
}

.prospect-form__section {
  display: grid;
  gap: 16px;
  min-width: 0;
  margin: 0;
  border: 0;
  padding: 0;
}

.prospect-form__section legend {
  float: none;
  width: auto;
  margin: 0;
  color: #748391;
  font-size: 12px;
  font-weight: 600;
}

.prospect-field {
  display: grid;
  gap: 8px;
}

.prospect-field > span:first-child {
  color: #43515d;
  font-size: 12px;
  font-weight: 600;
}

.prospect-field b {
  color: #dc3545;
  font-weight: 700;
}

.prospect-field input,
.prospect-select select {
  width: 100%;
  height: 44px;
  border: 1px solid #dfe7ec;
  border-radius: 12px;
  padding: 0 14px;
  outline: 0;
  color: #29343d;
  background: #fff;
  font-size: 12px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.prospect-field input::placeholder {
  color: #9aa6af;
}

.prospect-field input:focus,
.prospect-select:focus-within select {
  border-color: var(--app-primary-border, #66c4eb);
  box-shadow: 0 0 0 3px rgba(var(--app-primary-rgb, 24, 166, 228), 0.1);
}

.prospect-select {
  position: relative;
  display: block;
}

.prospect-select select {
  padding-right: 42px;
  appearance: none;
}

.prospect-select :deep(svg) {
  position: absolute;
  top: 50%;
  right: 14px;
  color: #81909c;
  pointer-events: none;
  transform: translateY(-50%);
}

.prospect-form__submit {
  width: 100%;
  min-height: 44px;
  border: 0;
  border-radius: 12px;
  padding: 11px 18px;
  color: #fff;
  background: var(--app-primary, #18a6e4);
  box-shadow: 0 5px 12px rgba(var(--app-primary-rgb, 24, 166, 228), 0.22);
  font-size: 12.5px;
  font-weight: 700;
  transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.prospect-form__submit:hover {
  background: var(--app-primary-hover, #1493cc);
  box-shadow: 0 7px 16px rgba(var(--app-primary-rgb, 24, 166, 228), 0.28);
  transform: translateY(-1px);
}

.prospect-data-card {
  display: grid;
  gap: 16px;
}

.prospect-data-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}

.prospect-data-card__header h2 {
  margin: 0;
  color: #1c2a36;
  font-size: 16px;
  font-weight: 700;
}

.prospect-data-card__header > span,
.interest-badge {
  border: 1px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.18);
  border-radius: 999px;
  color: var(--app-primary-dark, #0c8fc6);
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.09);
  font-weight: 700;
}

.prospect-data-card__header > span {
  flex: 0 0 auto;
  padding: 6px 10px;
  font-size: 10.5px;
}

.prospect-table-wrap {
  overflow-x: auto;
  border: 1px solid #e8edf0;
  border-radius: 14px;
}

.prospect-table {
  width: 100%;
  min-width: 760px;
  border-collapse: collapse;
}

.prospect-table th,
.prospect-table td {
  padding: 13px 14px;
  text-align: left;
  vertical-align: middle;
}

.prospect-table th {
  border-bottom: 1px solid #e5ebef;
  color: #687985;
  background: #f7f9fa;
  font-size: 10.5px;
  font-weight: 700;
  white-space: nowrap;
}

.prospect-table td {
  color: #3c4a55;
  background: #fff;
  font-size: 11.5px;
}

.interest-badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 9px;
  font-size: 10px;
  white-space: nowrap;
}

@media (max-width: 1199px) {
  .survey-detail__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 575px) {
  .survey-card {
    padding: 16px 14px;
  }

  .prospect-data-card__header {
    align-items: flex-start;
  }
}
</style>
