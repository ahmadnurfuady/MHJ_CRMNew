<template>
  <div class="crm-dashboard">
    <section class="scope-bar" aria-label="Cakupan dashboard">
      <div class="scope-label">
        <vue-feather type="filter" size="15" />
        <span>Cakupan</span>
      </div>
      <div class="scope-list">
        <span v-for="scope in scopes" :key="scope.label" class="scope-chip">
          <span>{{ scope.label }}:</span>
          <strong>{{ scope.value }}</strong>
        </span>
      </div>
    </section>

    <section class="hero">
      <div class="hero-copy">
        <div class="sync-row">
          <span class="sync-badge"><i></i> Live Sync Aktif</span>
          <span>Terakhir diperbarui: Hari ini, 08:30 WIB</span>
        </div>
        <h1>Selamat Pagi, Andhi!</h1>
        <p class="hero-lead">Pantau kinerja dan aktivitas penjualan hari ini</p>
        <p class="hero-meta">
          Sales Executive · Cabang Surabaya Pusat · Divisi AKD Patient Monitor
        </p>
      </div>
      <div class="hero-actions">
        <button class="action action-primary" type="button">
          <vue-feather type="plus-circle" size="19" />
          + Buat Project
        </button>
        <button class="action action-outline" type="button">
          <vue-feather type="map-pin" size="19" />
          + Catat Kunjungan
        </button>
        <button class="action action-ghost" type="button">
          <vue-feather type="user-plus" size="18" />
          Kontak
        </button>
      </div>
    </section>

    <main class="dashboard-content">
      <section class="kpi-grid" aria-label="Ringkasan KPI">
        <article v-for="item in kpis" :key="item.label" class="kpi-card">
          <div class="card-heading">
            <span>{{ item.label }}</span>
            <span class="icon-well icon-well-small">
              <vue-feather :type="item.icon" size="19" />
            </span>
          </div>
          <strong class="kpi-value">{{ item.value }}</strong>
          <div class="progress-track">
            <span :style="{ width: `${item.progress}%` }"></span>
          </div>
          <span class="kpi-caption">{{ item.caption }}</span>
        </article>
      </section>

      <section class="surface quick-tools">
        <div class="section-heading compact-heading">
          <div>
            <h2>Modul Operasional Alkes</h2>
            <p>Akses cepat alat kerja CRM</p>
          </div>
        </div>
        <div class="tool-grid">
          <button v-for="tool in tools" :key="tool.label" class="tool-button" type="button">
            <span class="tool-icon"><vue-feather :type="tool.icon" size="23" /></span>
            <span>{{ tool.label }}</span>
          </button>
        </div>
      </section>

      <section class="analytics-grid">
        <article class="surface revenue-card">
          <div class="section-heading heading-with-legend">
            <div>
              <h2>Target vs Realisasi Bulanan Q3 2026</h2>
              <p>Pencapaian penjualan cabang Surabaya Pusat</p>
            </div>
            <div class="chart-legend">
              <span><i class="legend-target"></i>Target (Rp 5M/bln)</span>
              <span><i class="legend-actual"></i>Realisasi Omzet</span>
            </div>
          </div>

          <div class="chart-box">
            <svg viewBox="0 0 540 200" role="img" aria-label="Grafik target dan realisasi Q3 2026">
              <g class="grid-lines">
                <line x1="40" x2="520" y1="20" y2="20" />
                <line x1="40" x2="520" y1="65" y2="65" />
                <line x1="40" x2="520" y1="110" y2="110" />
                <line class="axis" x1="40" x2="520" y1="155" y2="155" />
              </g>
              <g class="axis-labels">
                <text x="32" y="24">6 M</text>
                <text x="32" y="69">4 M</text>
                <text x="32" y="114">2 M</text>
                <text x="32" y="159">0</text>
              </g>
              <g v-for="bar in chartBars" :key="bar.month">
                <rect class="target-bar" :x="bar.x" y="45" width="36" height="110" rx="6" />
                <rect
                  :class="['actual-bar', { projected: bar.projected }]"
                  :x="bar.x + 40"
                  :y="bar.y"
                  width="36"
                  :height="155 - bar.y"
                  rx="6"
                />
                <text class="bar-value" :x="bar.x + 58" :y="bar.y - 5">{{ bar.value }}</text>
                <text class="month-label" :x="bar.x + 38" y="174">{{ bar.month }}</text>
                <text :class="['achievement-label', { success: bar.success }]" :x="bar.x + 38" y="189">
                  {{ bar.achievement }}
                </text>
              </g>
            </svg>
          </div>

          <div class="summary-grid">
            <div class="summary-box">
              <span>Target Q3 Cabang:</span>
              <strong>Rp 15,0 M</strong>
              <small>Baseline Target</small>
            </div>
            <div class="summary-box blue">
              <span>Input Pipeline:</span>
              <strong>Rp 26,0 M</strong>
              <small>Sehat (Kecukupan 1,73x)</small>
            </div>
            <div class="summary-box green">
              <span>Capaian Closed-Won:</span>
              <strong>Rp 12,5 M</strong>
              <small>83,3% dari Target</small>
            </div>
          </div>

          <div class="card-footer-note">
            <span><vue-feather type="check-circle" size="17" /> Surplus Rp 300 Jt jika 2 tender RSUD terbit SPK minggu ini.</span>
            <a href="#" @click.prevent>Drill-down Omzet →</a>
          </div>
        </article>

        <article class="surface pipeline-card">
          <div class="section-heading">
            <div>
              <h2>Tahapan Pipeline &amp; Konversi</h2>
              <p>Rasio pergerakan funnel penjualan</p>
            </div>
            <span class="badge blue-badge">24 Deal Aktif</span>
          </div>
          <div class="pipeline-list">
            <div v-for="stage in pipeline" :key="stage.label" class="pipeline-row">
              <div class="pipeline-meta">
                <strong>{{ stage.label }}</strong>
                <span>{{ stage.detail }}</span>
              </div>
              <div class="progress-track pipeline-progress">
                <span :class="stage.color" :style="{ width: `${stage.progress}%` }"></span>
              </div>
            </div>
          </div>
          <div class="terminal-results">
            <span><i class="dot success"></i>Closed Won: <strong>14 Deal (Rp 12,5 M)</strong></span>
            <span><i class="dot danger"></i>Closed Lost: <strong>6 Deal</strong></span>
          </div>
          <div class="surface-link"><a href="#" @click.prevent>Buka Board Pipeline Kanban →</a></div>
        </article>
      </section>

      <section class="surface map-section">
        <div class="section-heading map-heading">
          <div>
            <div class="title-row">
              <h2>Peta Sebaran RS &amp; Kunjungan Sales</h2>
              <span class="badge blue-badge">Jawa Timur</span>
            </div>
            <p>Frekuensi kunjungan lapangan dokter spesialis dan pengadaan alkes di area Surabaya Raya</p>
          </div>
          <div class="map-controls">
            <div class="segmented">
              <button class="active" type="button">Frekuensi Visit</button>
              <button type="button">Frekuensi Penjualan (PO)</button>
            </div>
            <div class="map-legend">
              <span><i class="dot success"></i>&gt;3x Visit</span>
              <span><i class="dot brand"></i>1–3x Visit</span>
              <span><i class="dot muted"></i>Belum Visit</span>
            </div>
          </div>
        </div>

        <div class="map-grid">
          <div class="map-visual">
            <div class="map-overlay"></div>
            <div class="map-topline">
              <span><vue-feather type="map-pin" size="17" /> Surabaya, Sidoarjo &amp; Gresik</span>
              <span>45 RS Terpetakan</span>
            </div>
            <div class="hospital-pins">
              <article v-for="hospital in hospitals" :key="hospital.name" :class="['hospital-pin', hospital.tone]">
                <div><strong>{{ hospital.name }}</strong><span>{{ hospital.visits }}</span></div>
                <p>{{ hospital.detail }}</p>
              </article>
            </div>
          </div>

          <aside class="visit-panel">
            <div class="visit-title"><strong>Prioritas Visit Minggu Ini</strong><span>3 Faskes Kritis</span></div>
            <div class="visit-list">
              <article v-for="visit in visits" :key="visit.name" class="visit-item">
                <div class="visit-copy">
                  <div><span :class="['priority', visit.tone]">{{ visit.priority }}</span><strong>{{ visit.name }}</strong></div>
                  <p>{{ visit.contact }}</p>
                  <small>{{ visit.task }}</small>
                </div>
                <button type="button">Visit</button>
              </article>
            </div>
            <a href="#" class="visit-all" @click.prevent>Lihat Seluruh 100 Daftar RS Cabang Surabaya →</a>
          </aside>
        </div>
      </section>

      <section class="bottom-grid">
        <article class="surface promo-section">
          <div class="section-heading">
            <div class="heading-icon-copy">
              <span class="icon-well"><vue-feather type="tag" size="20" /></span>
              <div>
                <h2>Program Promo &amp; Bundling Alkes</h2>
                <p>Penawaran resmi pabrikan aktif untuk Q3/Q4 2026</p>
              </div>
            </div>
            <span class="badge blue-badge">3 Promo Aktif</span>
          </div>
          <div class="promo-grid">
            <article v-for="promo in promos" :key="promo.title" class="promo-card">
              <div class="promo-image">
                <img :src="promo.image" :alt="promo.alt" />
                <span :class="promo.tone">{{ promo.badge }}</span>
              </div>
              <div class="promo-copy">
                <span class="eyebrow">{{ promo.category }}</span>
                <h3>{{ promo.title }}</h3>
                <p>{{ promo.description }}</p>
                <div><span :class="{ urgent: promo.urgent }">{{ promo.meta }}</span><button type="button">Brosur</button></div>
              </div>
            </article>
          </div>
          <div class="card-footer-note">
            <span>Gunakan kode promo saat menerbitkan penawaran di CRM</span>
            <a href="#" @click.prevent>Katalog Lengkap Alkes MHJ →</a>
          </div>
        </article>

        <article class="surface agenda-section">
          <div class="section-heading">
            <div class="heading-icon-copy">
              <span class="icon-well"><vue-feather type="calendar" size="20" /></span>
              <div>
                <h2>Agenda Pelatihan Mendatang</h2>
                <p>Jadwal demo klinis dan pelatihan ATEM terdekat</p>
              </div>
            </div>
            <button class="text-button" type="button">+ Tambah</button>
          </div>
          <div class="agenda-list">
            <article v-for="agenda in agendas" :key="agenda.title" class="agenda-item">
              <time :class="agenda.dateTone"><span>Okt</span><strong>{{ agenda.date }}</strong></time>
              <div class="agenda-copy">
                <div><strong>{{ agenda.title }}</strong><span :class="agenda.tone">{{ agenda.type }}</span></div>
                <p>{{ agenda.detail }}</p>
              </div>
            </article>
          </div>
          <div class="card-footer-note">
            <span>Tersinkron otomatis Google Calendar</span>
            <a href="#" @click.prevent>Buka Kalender CRM →</a>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from "vue";

const scopes = [
  { label: "Periode", value: "Q3 2026" },
  { label: "Badan Usaha", value: "PT MHJ Medika" },
  { label: "Cabang", value: "Surabaya Pusat" },
  { label: "Divisi", value: "AKD Patient Monitor" },
  { label: "Tipe", value: "Pemerintah & Swasta" },
];

const kpis = [
  { label: "Target vs Omset", value: "Rp 12,5 M", caption: "dari target Rp 15 M", progress: 83.3, icon: "trending-up" },
  { label: "Rasio Kemenangan", value: "68%", caption: "14 project berhasil", progress: 68, icon: "star" },
  { label: "Cakupan Rumah Sakit", value: "45/100", caption: "RS aktif terlayani", progress: 45, icon: "shopping-cart" },
  { label: "Project Aktif", value: "24", caption: "3 perlu ditindaklanjuti", progress: 62, icon: "filter" },
];

const tools = [
  { label: "Stok Barang", icon: "box" },
  { label: "Kalkulator", icon: "hash" },
  { label: "Kampanye", icon: "radio" },
  { label: "Promo", icon: "calendar" },
  { label: "Chat", icon: "message-circle" },
  { label: "Materi Dokumen", icon: "folder" },
  { label: "Laporan", icon: "file-text" },
  { label: "Pengaturan", icon: "settings" },
];

const chartBars = [
  { month: "Juli 2026", value: "Rp 4,2M", achievement: "84% Capaian", x: 95, y: 63, projected: false, success: false },
  { month: "Agustus 2026", value: "Rp 4,8M", achievement: "96% Capaian", x: 245, y: 50, projected: false, success: true },
  { month: "September 2026", value: "Rp 3,5M*", achievement: "70% (Proyeksi 102%)", x: 395, y: 78, projected: true, success: false },
];

const pipeline = [
  { label: "1. Qualified (10% Prob)", detail: "6 Project · Rp 2,1 M", progress: 100, color: "light-blue" },
  { label: "2. Presentation / Demo (30% Prob)", detail: "5 Project · Rp 2,8 M", progress: 82, color: "brand-blue" },
  { label: "3. Penawaran Resmi (60% Prob)", detail: "8 Project · Rp 3,6 M", progress: 65, color: "brand-blue" },
  { label: "4. Negosiasi & SPK (80% Prob)", detail: "5 Project · Rp 2,4 M", progress: 48, color: "dark-teal" },
];

const hospitals = [
  { name: "RSUD Dr. Soetomo", visits: "8 Visit", detail: "3 Project Aktif (ICU & Bedah)", tone: "green" },
  { name: "RS Siloam Gubeng", visits: "5 Visit", detail: "2 Penawaran CT-Scan", tone: "blue" },
  { name: "RS St. Vincentius", visits: "4 Visit", detail: "1 Installed Base Monitor", tone: "blue" },
];

const visits = [
  { priority: "P1", name: "RSUD Dr. Soetomo", contact: "dr. Bambang, Sp.An (Kepala ICU)", task: "Tender Monitor Pengadaan 16 Unit", tone: "red" },
  { priority: "P2", name: "RS Siloam Gubeng", contact: "Ibu Maya, S.Farm (Pengadaan Alkes)", task: "Klarifikasi Teknis CT-Scan 64 Slice", tone: "blue" },
  { priority: "P3", name: "RS Katolik St. Vincentius", contact: "dr. H. Ridwan, Sp.B (Komite Medik)", task: "Demo Lampu Bedah LED Dual Arm", tone: "gray" },
];

const promos = [
  {
    category: "Patient Monitor",
    title: "Bundling Patient Monitor e-Series",
    description: "Garansi 24 Bulan + Free 2 Probe Dewasa.",
    meta: "s/d 31 Okt",
    urgent: true,
    badge: "Diskon 15%",
    tone: "brand",
    alt: "Modern clinical patient monitor",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaemhHbNobrCsYIngfaW-4qoLewZETMiNmiP7Wc-cDF4n6jFk3Lm7M69UTq8FQpEQUPPPcvbaxseZ8uctd603--O2E-pfx_s_-IChQ8M--MpCzQ9lzczqGPOGARKeBtsZy3UboRHLQuhgY0QaAr7F_MSUI3huenI55IgCBc4d_o_HP-Y92jfakEIVnT2BJujxdhyWYI-wgO77jiVpTetAMnG6izxT0SEkLbzkxxTyHHjqt-Fz_ceO8pA",
  },
  {
    category: "Radiologi",
    title: "Upgrade Program CT-Scan 64 Slice",
    description: "Tukar tambah hemat s/d Rp 250 Jt.",
    meta: "Stok: 2 Unit",
    urgent: false,
    badge: "Trade-In 250Jt",
    tone: "teal",
    alt: "CT Scan 64 slice machine",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8VzCgLOvqmWp01rToTXRXgD9G2ZriDoA-tfPXLkfHpkmtScrG-UYhGOkutmAnlRaSp5nty2I7bA121OUngC3Z08GG_2exccggLSn-uO4zrDfPAN6LWw5KCFrm2YfPxgXPgIm-bu03GBdy5wqr6GcnQJxZZQR8gX_CIClh-bUZ3PxZD-6OBXsMJaHvHKqjMaEevWpcwY5wVl71Or_ERk-QbBb_4F9KAglhbbmcyYd_wMzvLPSR60Nf_Q",
  },
  {
    category: "Operating Theatre",
    title: "Paket Lampu Bedah LED Dual Arm",
    description: "Free Mobile Stand Battery cadangan.",
    meta: "E-Katalog",
    urgent: false,
    badge: "Free Stand",
    tone: "green",
    alt: "Surgical LED operating light",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBt4ojyeAyHstmbNNrbzSIA24Xfg6JrJRcBswKS1QGpAFw5uIiu4QP4PdUkfNjr7EF58oTbB-Tqh9EWbNvvpWjvF_6KwEoXesUEQmzcUpSP2ka8DA-Wok-7wil_o0eLULu9AW6jzJwGZjAJTGsk0zAdFsN0OGA2p2trTFi2hthF8Y9Ldl9de3Wq_O-yBhaj0IAqVIaJvbkK0sCz0n216ran5jL0ARqTAZdKMRmv8qJzjXlCqOJRVy4MIw",
  },
];

const agendas = [
  { date: "12", title: "Pelatihan User: Monitor e-Series", type: "Onsite", detail: "RSUD Dr. Soetomo · 09:00 WIB · Nakes ICU", tone: "green", dateTone: "blue-date" },
  { date: "15", title: "Demo Klinis: Ventilator ICU C-300", type: "Onsite", detail: "RS Siloam Gubeng · 13:30 WIB · Spesialis Anestesi", tone: "green", dateTone: "plain-date" },
  { date: "18", title: "Refreshment Training Teknisi Cabang", type: "Online", detail: "Zoom Meeting Surabaya · 10:00 WIB · Kalibrasi 2026", tone: "blue", dateTone: "blue-date" },
  { date: "22", title: "Workshop E-Katalog V6 Kemenkes", type: "Seminar", detail: "Dinkes Jatim, Jl. Tidar Surabaya · 09:00 WIB", tone: "gray", dateTone: "plain-date" },
  { date: "27", title: "Handover & Uji Fungsi Defibrillator", type: "BAST", detail: "RS St. Vincentius · 11:00 WIB · Tim ATEM", tone: "green", dateTone: "green-date" },
];

onMounted(() => document.body.classList.add("crm-dashboard-active"));
onBeforeUnmount(() => document.body.classList.remove("crm-dashboard-active"));
</script>

<style scoped>
.crm-dashboard {
  --brand: #18a6e4;
  --brand-dark: #006878;
  --brand-soft: #ddf2fb;
  --ink: #404040;
  --muted: #64748b;
  --line: #e2e8f0;
  --soft: #f8fafc;
  --success: #059669;
  --success-soft: #cff6e0;
  --danger: #ff3b30;
  min-height: 100vh;
  margin: 0 -12px -30px;
  color: var(--ink);
  background: var(--brand);
  font-family: "Montserrat", sans-serif;
}

.scope-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 52px;
  padding: 8px 28px;
  overflow-x: auto;
  background: rgba(248, 250, 252, 0.98);
  border-bottom: 1px solid rgba(226, 232, 240, 0.8);
  scrollbar-width: none;
}

.scope-label,
.scope-list,
.scope-chip,
.sync-row,
.hero-actions,
.card-heading,
.chart-legend,
.pipeline-meta,
.terminal-results,
.title-row,
.map-controls,
.map-legend,
.map-topline,
.visit-title,
.heading-icon-copy,
.card-footer-note {
  display: flex;
  align-items: center;
}

.scope-label {
  gap: 6px;
  color: #718096;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
}

.scope-list { gap: 8px; }
.scope-chip {
  gap: 4px;
  padding: 6px 11px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 999px;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
  font-size: 11px;
  white-space: nowrap;
}
.scope-chip span { color: #718096; }
.scope-chip strong { color: var(--ink); font-weight: 600; }

.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  min-height: 210px;
  padding: 32px 32px 78px;
  color: #fff;
  background: linear-gradient(115deg, #18a6e4 0%, #159bd7 68%, #0789c4 100%);
}
.sync-row { gap: 10px; margin-bottom: 10px; color: rgba(255,255,255,.8); font-size: 11px; }
.sync-badge { display: inline-flex; align-items: center; gap: 7px; padding: 5px 10px; color: #fff; background: rgba(255,255,255,.18); border-radius: 999px; font-weight: 600; }
.sync-badge i { width: 6px; height: 6px; background: #10b981; border-radius: 50%; box-shadow: 0 0 0 3px rgba(16,185,129,.18); }
.hero h1 { margin: 0; color: #fff; font-size: clamp(25px, 2.2vw, 32px); font-weight: 700; letter-spacing: -.035em; }
.hero p { margin: 0; }
.hero-lead { margin-top: 7px !important; color: rgba(255,255,255,.92); font-size: 14px; font-weight: 500; }
.hero-meta { margin-top: 4px !important; color: rgba(255,255,255,.72); font-size: 11px; }
.hero-actions { justify-content: flex-end; flex-wrap: wrap; gap: 10px; }
.action { display: inline-flex; align-items: center; gap: 8px; min-height: 43px; padding: 9px 17px; border: 1px solid transparent; border-radius: 999px; font-family: inherit; font-size: 12px; font-weight: 600; transition: .2s ease; }
.action:hover { transform: translateY(-1px); }
.action-primary { color: var(--brand); background: #fff; box-shadow: 0 6px 16px rgba(0, 70, 110, .12); }
.action-outline { color: #fff; background: rgba(255,255,255,.13); border-color: rgba(255,255,255,.4); }
.action-ghost { color: #fff; background: rgba(255,255,255,.09); }

.dashboard-content { display: grid; gap: 22px; margin-top: -48px; padding: 0 32px 36px; border-radius: 0 0 18px 18px; }
.kpi-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; }
.kpi-card,
.surface { background: #fff; border: 1px solid rgba(226,232,240,.66); box-shadow: 0 8px 24px rgba(15,23,42,.055); }
.kpi-card { min-height: 158px; padding: 19px; border-radius: 20px; }
.card-heading { justify-content: space-between; color: var(--muted); font-size: 11px; font-weight: 600; }
.icon-well { display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; color: var(--brand); background: var(--brand-soft); border-radius: 12px; flex: 0 0 auto; }
.icon-well-small { width: 32px; height: 32px; border-radius: 10px; }
.kpi-value { display: block; margin-top: 11px; font-size: 25px; line-height: 1.2; letter-spacing: -.03em; }
.progress-track { width: 100%; height: 7px; margin: 10px 0 8px; overflow: hidden; background: #e8eef3; border-radius: 999px; }
.progress-track > span { display: block; height: 100%; background: var(--brand); border-radius: inherit; }
.kpi-caption { color: var(--muted); font-size: 11px; font-weight: 500; }

.surface { padding: 22px; border-radius: 20px; }
.section-heading { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; padding-bottom: 15px; border-bottom: 1px solid #edf1f5; }
.section-heading h2 { margin: 0; color: var(--ink); font-size: 14px; font-weight: 700; letter-spacing: -.015em; }
.section-heading p { margin: 4px 0 0; color: var(--muted); font-size: 10.5px; }
.compact-heading { padding-bottom: 13px; }
.compact-heading p { text-transform: uppercase; letter-spacing: .06em; }
.tool-grid { display: grid; grid-template-columns: repeat(8, minmax(0, 1fr)); gap: 15px; padding-top: 18px; }
.tool-button { display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 4px; color: var(--ink); background: transparent; border: 0; font-family: inherit; font-size: 11px; font-weight: 600; }
.tool-icon { display: flex; align-items: center; justify-content: center; width: 48px; height: 48px; color: var(--brand); background: var(--brand-soft); border-radius: 50%; transition: .2s ease; }
.tool-button:hover .tool-icon { color: #fff; background: var(--brand); transform: translateY(-2px) scale(1.03); }

.analytics-grid { display: grid; grid-template-columns: minmax(0, 7fr) minmax(360px, 5fr); gap: 22px; }
.heading-with-legend { align-items: center; }
.chart-legend { gap: 14px; color: var(--muted); font-size: 9px; white-space: nowrap; }
.chart-legend span { display: inline-flex; align-items: center; gap: 5px; }
.chart-legend i { width: 11px; height: 11px; border-radius: 3px; }
.legend-target { background: var(--line); }
.legend-actual { background: var(--brand); }
.chart-box { margin: 16px 0; padding: 12px; overflow-x: auto; background: var(--soft); border: 1px solid #edf1f5; border-radius: 14px; }
.chart-box svg { display: block; width: 100%; min-width: 510px; height: 208px; }
.grid-lines line { stroke: var(--line); stroke-dasharray: 3 3; }
.grid-lines .axis { stroke: #cbd5e1; stroke-dasharray: none; }
.axis-labels text { fill: #718096; font-size: 10px; text-anchor: end; }
.target-bar { fill: var(--line); }
.actual-bar { fill: var(--brand); }
.actual-bar.projected { fill: #84d7eb; }
.bar-value { fill: var(--brand); font-size: 10px; font-weight: 700; text-anchor: middle; }
.month-label { fill: var(--ink); font-size: 10px; font-weight: 600; text-anchor: middle; }
.achievement-label { fill: var(--brand); font-size: 9px; font-weight: 600; text-anchor: middle; }
.achievement-label.success { fill: var(--success); }
.summary-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }
.summary-box { padding: 11px; background: var(--soft); border: 1px solid #edf1f5; border-radius: 12px; }
.summary-box span,.summary-box small { display: block; color: var(--muted); font-size: 9.5px; }
.summary-box strong { display: block; margin: 2px 0; font-size: 14px; }
.summary-box.blue { background: rgba(221,242,251,.55); border-color: rgba(24,166,228,.2); }
.summary-box.blue strong,.summary-box.blue small { color: var(--brand); }
.summary-box.green { background: rgba(207,246,224,.58); border-color: rgba(5,150,105,.18); }
.summary-box.green strong { color: var(--success); }
.card-footer-note { justify-content: space-between; gap: 16px; margin-top: 16px; padding-top: 13px; color: var(--muted); border-top: 1px solid #edf1f5; font-size: 10px; }
.card-footer-note > span:first-child { display: inline-flex; align-items: center; gap: 6px; }
.card-footer-note svg { color: var(--success); }
.card-footer-note a,.surface-link a,.visit-all { color: var(--brand); font-weight: 700; text-decoration: none; white-space: nowrap; }

.badge { display: inline-flex; align-items: center; padding: 5px 9px; border-radius: 999px; font-size: 9.5px; font-weight: 700; white-space: nowrap; }
.blue-badge { color: var(--brand); background: var(--brand-soft); }
.pipeline-list { display: grid; gap: 10px; padding-top: 15px; }
.pipeline-row { padding: 11px; background: var(--soft); border: 1px solid #edf1f5; border-radius: 12px; }
.pipeline-meta { justify-content: space-between; gap: 10px; font-size: 10px; }
.pipeline-meta strong { font-weight: 650; }
.pipeline-meta span { color: var(--brand); font-weight: 650; text-align: right; }
.pipeline-progress { height: 6px; margin: 7px 0 0; }
.pipeline-progress .light-blue { background: #84d7eb; }
.pipeline-progress .brand-blue { background: var(--brand); }
.pipeline-progress .dark-teal { background: var(--brand-dark); }
.terminal-results { justify-content: space-between; gap: 10px; margin-top: 12px; padding: 11px; background: var(--soft); border: 1px solid #edf1f5; border-radius: 12px; font-size: 9.5px; }
.terminal-results span { display: flex; align-items: center; gap: 5px; }
.dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%; flex: 0 0 auto; }
.dot.success { background: #10b981; }
.dot.danger { background: var(--danger); }
.dot.brand { background: var(--brand); }
.dot.muted { background: #94a3b8; }
.surface-link { margin-top: 15px; padding-top: 13px; border-top: 1px solid #edf1f5; text-align: right; font-size: 10px; }

.map-heading { align-items: center; }
.title-row { gap: 8px; }
.map-controls { flex-wrap: wrap; justify-content: flex-end; gap: 11px; }
.segmented { display: inline-flex; padding: 3px; background: var(--soft); border: 1px solid var(--line); border-radius: 999px; }
.segmented button { padding: 6px 10px; color: var(--muted); background: transparent; border: 0; border-radius: 999px; font-family: inherit; font-size: 9px; font-weight: 600; }
.segmented button.active { color: var(--brand); background: #fff; box-shadow: 0 1px 4px rgba(15,23,42,.08); }
.map-legend { gap: 10px; color: var(--muted); font-size: 9px; }
.map-legend span { display: inline-flex; align-items: center; gap: 5px; }
.map-grid { display: grid; grid-template-columns: minmax(0, 8fr) minmax(310px, 4fr); gap: 20px; padding-top: 16px; }
.map-visual { position: relative; display: flex; flex-direction: column; justify-content: space-between; min-height: 345px; padding: 15px; overflow: hidden; background: #cbd5e1 url("https://lh3.googleusercontent.com/aida-public/AB6AXuCj-i8JibyyaclsQKWHHO2_aODpefNz5UKfZ5Dn0dY-yPV4RFq1Vwb32O5U-BO__oeOUNhmpZcm4Mqaz19oANjIB2SnOQEwwd6KN6Dae-BBJTyWomRR6fz_8FySNNW_1rEdZCYwce1IAocaFz6CvZarxc78vbvp4iXzZZ5axah4P1qMTHRVhdjcPFNsKqFmDSLNzgf7Z76jqLM5edlsnpyFJtTYeBR6gfDsuemoWw7-nfaAtGDB7r0M5w") center/cover; border: 1px solid #edf1f5; border-radius: 16px; }
.map-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(15,23,42,.48), transparent 62%); }
.map-topline,.hospital-pins { position: relative; z-index: 1; }
.map-topline { justify-content: space-between; gap: 10px; }
.map-topline > span { display: inline-flex; align-items: center; gap: 6px; padding: 7px 11px; background: rgba(255,255,255,.94); border: 1px solid rgba(226,232,240,.9); border-radius: 999px; box-shadow: 0 2px 8px rgba(15,23,42,.08); font-size: 9.5px; font-weight: 600; }
.map-topline svg { color: var(--brand); }
.hospital-pins { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 8px; }
.hospital-pin { padding: 10px; background: #fff; border-left: 4px solid var(--brand); border-radius: 10px; box-shadow: 0 5px 16px rgba(15,23,42,.15); }
.hospital-pin.green { border-left-color: #10b981; }
.hospital-pin > div { display: flex; justify-content: space-between; gap: 6px; }
.hospital-pin strong { overflow: hidden; font-size: 9.5px; text-overflow: ellipsis; white-space: nowrap; }
.hospital-pin span { padding: 2px 5px; color: var(--brand); background: var(--brand-soft); border-radius: 4px; font-size: 8px; font-weight: 700; white-space: nowrap; }
.hospital-pin.green span { color: var(--success); background: var(--success-soft); }
.hospital-pin p { margin: 4px 0 0; color: var(--muted); font-size: 8.5px; }
.visit-panel { display: flex; flex-direction: column; min-width: 0; }
.visit-title { justify-content: space-between; gap: 8px; margin-bottom: 9px; font-size: 11px; }
.visit-title span { color: var(--brand); font-size: 9.5px; font-weight: 700; }
.visit-list { display: grid; gap: 9px; }
.visit-item { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 11px; background: var(--soft); border: 1px solid #edf1f5; border-radius: 12px; }
.visit-copy { min-width: 0; }
.visit-copy > div { display: flex; align-items: center; gap: 6px; }
.visit-copy strong { overflow: hidden; font-size: 9.5px; text-overflow: ellipsis; white-space: nowrap; }
.visit-copy p,.visit-copy small { display: block; overflow: hidden; margin: 3px 0 0; color: var(--muted); font-size: 8.5px; text-overflow: ellipsis; white-space: nowrap; }
.priority { display: inline-flex; align-items: center; justify-content: center; width: 20px; height: 20px; border-radius: 5px; font-size: 8px; font-weight: 800; }
.priority.red { color: var(--danger); background: #fee2e2; }
.priority.blue { color: var(--brand); background: var(--brand-soft); }
.priority.gray { color: var(--ink); background: #e2e8f0; }
.visit-item button { padding: 7px 11px; color: #fff; background: var(--brand); border: 0; border-radius: 999px; font-family: inherit; font-size: 9px; font-weight: 700; }
.visit-all { margin-top: auto; padding-top: 14px; border-top: 1px solid #edf1f5; text-align: center; font-size: 9.5px; }

.bottom-grid { display: grid; grid-template-columns: minmax(0, 7fr) minmax(360px, 5fr); gap: 22px; }
.heading-icon-copy { gap: 10px; }
.promo-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 12px; padding-top: 15px; }
.promo-card { overflow: hidden; background: var(--soft); border: 1px solid #edf1f5; border-radius: 13px; }
.promo-image { position: relative; height: 112px; overflow: hidden; background: #e2e8f0; }
.promo-image img { width: 100%; height: 100%; object-fit: cover; transition: transform .25s ease; }
.promo-card:hover img { transform: scale(1.035); }
.promo-image span { position: absolute; top: 9px; left: 9px; padding: 3px 7px; color: #fff; border-radius: 4px; font-size: 8px; font-weight: 700; }
.promo-image .brand { background: var(--brand); }
.promo-image .teal { background: var(--brand-dark); }
.promo-image .green { background: var(--success); }
.promo-copy { padding: 11px; }
.eyebrow { color: var(--muted); font-size: 8px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; }
.promo-copy h3 { min-height: 30px; margin: 3px 0 0; font-size: 10px; line-height: 1.45; }
.promo-copy p { min-height: 26px; margin: 5px 0 0; color: var(--muted); font-size: 8.5px; line-height: 1.45; }
.promo-copy > div { display: flex; align-items: center; justify-content: space-between; margin-top: 9px; padding-top: 8px; color: var(--muted); border-top: 1px solid #e8edf2; font-size: 8px; }
.promo-copy .urgent { color: var(--danger); font-weight: 700; }
.promo-copy button,.text-button { padding: 0; color: var(--brand); background: none; border: 0; font-family: inherit; font-size: 9px; font-weight: 700; }
.agenda-list { display: grid; gap: 8px; padding-top: 13px; }
.agenda-item { display: flex; align-items: center; gap: 10px; padding: 9px; background: var(--soft); border: 1px solid #edf1f5; border-radius: 11px; }
.agenda-item time { display: flex; flex-direction: column; align-items: center; justify-content: center; width: 39px; height: 39px; border-radius: 10px; flex: 0 0 auto; font-size: 8px; font-weight: 700; line-height: 1.15; text-transform: uppercase; }
.agenda-item time strong { font-size: 11px; }
.blue-date { color: var(--brand); background: var(--brand-soft); }
.green-date { color: var(--success); background: var(--success-soft); }
.plain-date { color: var(--ink); background: var(--soft); border: 1px solid var(--line); }
.agenda-copy { min-width: 0; flex: 1; }
.agenda-copy > div { display: flex; align-items: center; justify-content: space-between; gap: 6px; }
.agenda-copy strong { overflow: hidden; font-size: 9.5px; text-overflow: ellipsis; white-space: nowrap; }
.agenda-copy span { padding: 2px 5px; border-radius: 4px; font-size: 8px; font-weight: 700; }
.agenda-copy span.green { color: var(--success); background: var(--success-soft); }
.agenda-copy span.blue { color: var(--brand); background: var(--brand-soft); }
.agenda-copy span.gray { color: var(--ink); background: #e2e8f0; }
.agenda-copy p { overflow: hidden; margin: 4px 0 0; color: var(--muted); font-size: 8.5px; text-overflow: ellipsis; white-space: nowrap; }

:global(body.crm-dashboard-active) { background: #f6f6f6; }
:global(body.crm-dashboard-active .page-body) { background: #f6f6f6; }
:global(body.crm-dashboard-active .page-wrapper .page-header) { box-shadow: 0 1px 0 #e2e8f0; }
:global(body.crm-dashboard-active .page-body-wrapper footer) { background: #f6f6f6; }

@media (max-width: 1399px) {
  .analytics-grid,.bottom-grid { grid-template-columns: 1fr; }
  .map-grid { grid-template-columns: minmax(0, 3fr) minmax(300px, 2fr); }
}

@media (max-width: 1199px) {
  .kpi-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
  .tool-grid { grid-template-columns: repeat(4, minmax(0,1fr)); }
  .map-grid { grid-template-columns: 1fr; }
  .visit-all { margin-top: 13px; }
}

@media (max-width: 767px) {
  .crm-dashboard { margin-inline: -10px; }
  .scope-bar { padding-inline: 16px; }
  .hero { align-items: flex-start; min-height: 250px; padding: 25px 18px 82px; flex-direction: column; }
  .hero-actions { justify-content: flex-start; }
  .dashboard-content { padding: 0 16px 28px; }
  .section-heading,.map-heading { align-items: flex-start; flex-direction: column; }
  .map-controls { justify-content: flex-start; }
  .heading-with-legend { align-items: flex-start; }
  .summary-grid,.promo-grid { grid-template-columns: 1fr; }
  .promo-copy h3,.promo-copy p { min-height: auto; }
  .hospital-pins { grid-template-columns: 1fr; }
  .terminal-results,.card-footer-note { align-items: flex-start; flex-direction: column; }
}

@media (max-width: 520px) {
  .kpi-grid { grid-template-columns: 1fr; }
  .tool-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
  .action { padding-inline: 13px; }
  .map-topline { align-items: flex-start; flex-direction: column; }
  .map-legend { flex-wrap: wrap; }
}
</style>
