<template>
  <div class="max-w-4xl mx-auto space-y-10 py-6 flex flex-col gap-8">
    <!-- Header -->
    <header class="border-b border-slate-200 dark:border-slate-800 mb-5 pb-6 flex flex-col gap-3">
      <div class="flex items-center gap-2 mb-2">
        <h1 class="text-3xl font-bold text-slate-900 dark:text-white">
          {{ isIndonesian ? 'Dukungan & Sponsor Proyek' : 'Support & Sponsorship' }}
        </h1>
        <span
          class="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-400 border border-amber-300/60 dark:border-amber-800/60"
        >
          v0.1.4 Early Release
        </span>
      </div>
      <p class="text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
        <template v-if="isIndonesian">
          <code>@zyvnox/vue-pack</code> adalah proyek open-source independen karya zyvnox.
          Dukungan Anda membantu pemeliharaan dokumentasi, pengiriman CDN global, pengujian unit, serta mempercepat langkah menuju versi stabil v1.0.0.
        </template>
        <template v-else>
          <code>@zyvnox/vue-pack</code> is an independent open-source project created by zyvnox.
          Your support helps maintain docs, CDN delivery, unit tests, and accelerates development towards v1.0.0 stable.
        </template>
      </p>

      <div class="mt-4 flex flex-wrap items-center gap-3">
        <SponsorButton variant="all" />
      </div>
    </header>

    <!-- Support Options Cards -->
    <section class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
      <!-- GitHub Sponsors (Official / Global) -->
      <div
        class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm flex flex-col justify-between gap-6 space-y-4 hover:border-pink-400/50 transition-colors"
      >
        <div class="flex flex-col gap-3 space-y-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full" style="background-color: #EA4AAA;"></span>
              <h2 class="font-bold text-lg text-slate-900 dark:text-white">GitHub Sponsors</h2>
            </div>
            <span
              class="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-pink-100 dark:bg-pink-950/60 text-pink-700 dark:text-pink-400 border border-pink-200 dark:border-pink-800/60 uppercase"
            >
              {{ isIndonesian ? 'Resmi' : 'Official' }}
            </span>
          </div>

          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {{ isIndonesian
              ? 'Dukung langsung melalui akun GitHub Anda. Dapatkan badge resmi GitHub Sponsor di profil dan issue Anda.'
              : 'Support directly through your GitHub account. Receive an official GitHub Sponsor badge on your GitHub profile and issues.' }}
          </p>

          <ul class="text-xs text-slate-500 dark:text-slate-400 space-y-1 list-disc list-inside">
            <li>{{ isIndonesian ? 'Dukungan bulanan atau donasi satu kali' : 'Supports monthly tiers or custom one-time donations' }}</li>
            <li>{{ isIndonesian ? 'Badge Sponsor terverifikasi di GitHub' : 'Earn a verified Sponsor badge on GitHub' }}</li>
            <li>{{ isIndonesian ? 'Bebas biaya pemrosesan platform' : 'Zero platform processing fees' }}</li>
          </ul>
        </div>

        <div class="pt-2">
          <a
            href="https://github.com/sponsors/zyvnox"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-white font-semibold text-xs shadow-sm transition-all hover:opacity-90 active:scale-[0.99]"
            style="background-color: #EA4AAA;"
          >
            <span>{{ isIndonesian ? 'Sponsor di GitHub' : 'Sponsor on GitHub' }}</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      <!-- Saweria (Indonesia / QRIS) -->
      <div
        class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm flex flex-col justify-between gap-6 space-y-4 hover:border-amber-400/50 transition-colors"
      >
        <div class="flex flex-col gap-3 space-y-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full" style="background-color: #FF7A00;"></span>
              <h2 class="font-bold text-lg text-slate-900 dark:text-white">Saweria</h2>
            </div>
            <span
              class="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-800/60 uppercase"
            >
              QRIS &amp; E-Wallet
            </span>
          </div>

          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            <template v-if="isIndonesian">
              Dukung langsung dengan Rupiah (IDR). Mendukung pembayaran instan <strong>QRIS</strong> dari semua aplikasi perbankan (BCA, Mandiri, BRI, BNI) dan dompet digital (GoPay, OVO, Dana, ShopeePay, LinkAja).
            </template>
            <template v-else>
              Support directly with Indonesian Rupiah (IDR). Supports instant <strong>QRIS</strong> payment from any banking app (BCA, Mandiri, BRI, BNI) and all e-wallets (GoPay, OVO, Dana, ShopeePay, LinkAja).
            </template>
          </p>

          <ul class="text-xs text-slate-500 dark:text-slate-400 space-y-1 list-disc list-inside">
            <li>{{ isIndonesian ? 'Pemindai QRIS instan' : 'Instant QRIS scanner' }}</li>
            <li>{{ isIndonesian ? 'Tanpa perlu registrasi akun' : 'No registration required' }}</li>
            <li>{{ isIndonesian ? 'Pesan kustom di dashboard/stream' : 'Custom message on stream/dashboard' }}</li>
          </ul>
        </div>

        <div class="pt-2">
          <a
            href="https://saweria.co/zyvnox"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-white font-semibold text-xs shadow-sm transition-all hover:opacity-90 active:scale-[0.99]"
            style="background-color: #FF7A00;"
          >
            <span>{{ isIndonesian ? 'Donasi QRIS Saweria' : 'Saweria QRIS Donate' }}</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      <!-- Ko-fi (International) -->
      <div
        class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm flex flex-col justify-between gap-6 space-y-4 hover:border-sky-400/50 transition-colors"
      >
        <div class="flex flex-col gap-3 space-y-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full" style="background-color: #29ABE0;"></span>
              <h2 class="font-bold text-lg text-slate-900 dark:text-white">Ko-fi</h2>
            </div>
            <span
              class="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-400 border border-sky-200 dark:border-sky-800/60 uppercase"
            >
              {{ isIndonesian ? 'Internasional' : 'International' }}
            </span>
          </div>

          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {{ isIndonesian
              ? 'Dukungan internasional dengan kartu Debit/Kredit atau PayPal. Traktir secangkir kopi atau langganan bulanan untuk mendanai pembaruan berkala.'
              : 'Support internationally with Credit/Debit cards or PayPal. Buy a coffee or set up a monthly recurring sponsorship to fuel library updates.' }}
          </p>

          <ul class="text-xs text-slate-500 dark:text-slate-400 space-y-1 list-disc list-inside">
            <li>{{ isIndonesian ? 'Mendukung Visa, Mastercard, AMEX, PayPal' : 'Supports Visa, Mastercard, AMEX, PayPal' }}</li>
            <li>{{ isIndonesian ? 'Donasi satu kali atau bulanan' : 'One-time or monthly donations' }}</li>
            <li>{{ isIndonesian ? 'Bebas biaya bagi donatur' : 'Zero platform fees for supporters' }}</li>
          </ul>
        </div>

        <div class="pt-2">
          <a
            href="https://ko-fi.com/zyvnox"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-white font-semibold text-xs shadow-sm transition-all hover:opacity-90 active:scale-[0.99]"
            style="background-color: #29ABE0;"
          >
            <span>{{ isIndonesian ? 'Dukung di Ko-fi' : 'Support on Ko-fi' }}</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Why Support Us -->
    <section
      class="rounded-2xl border mb-5 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-6 sm:p-8 space-y-4"
    >
      <h3 class="text-lg font-bold text-slate-900 dark:text-white">
        {{ isIndonesian ? 'Dampak Dukungan & Sponsorship Anda' : 'What Your Sponsorship Supports' }}
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600 dark:text-slate-300">
        <div class="space-y-1">
          <div class="text-base font-semibold text-slate-900 dark:text-white">
            {{ isIndonesian ? '🚀 Pengembangan Berkelanjutan' : '🚀 Continuous Development' }}
          </div>
          <p>
            {{ isIndonesian
              ? 'Pengembangan engine berbasis skema, formulir modal multi-langkah, tabel interaktif, dan input kustom.'
              : 'Development of schema-driven engines, form modals, interactive tables, and custom inputs.' }}
          </p>
        </div>
        <div class="space-y-1">
          <div class="text-base font-semibold text-slate-900 dark:text-white">
            {{ isIndonesian ? '📚 Dokumentasi Gratis & CDN' : '📚 Free Documentation & CDN' }}
          </div>
          <p>
            {{ isIndonesian
              ? 'Pemeliharaan dokumentasi, live playground interaktif, dan distribusi CDN teruji (ES, CJS, UMD).'
              : 'Maintaining documentation, interactive live playground, and tested CDN bundles (ES, CJS, UMD).' }}
          </p>
        </div>
        <div class="space-y-1">
          <div class="text-base font-semibold text-slate-900 dark:text-white">
            {{ isIndonesian ? '🛡️ Keamanan & Nol Kerentanan' : '🛡️ Security & Zero Vulnerabilities' }}
          </div>
          <p>
            {{ isIndonesian
              ? 'Audit dependensi otomatis, sanitasi XSS dengan DOMPurify, dan tipe ketat TypeScript.'
              : 'Automated dependency audits, XSS sanitation with DOMPurify, and strict TypeScript types.' }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { SponsorButton } from '@zyvnox/vue-pack/components'
import { useSiteI18n } from '@/i18n'

const { isIndonesian } = useSiteI18n()
</script>
