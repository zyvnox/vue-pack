import{M as e,O as t,U as n,c as r,d as i,g as a,h as o,m as s,mt as c,q as l,t as u,z as d}from"./i18n-CQHTY6ci.js";import{t as f}from"./CurrencyInput-Xmq44eP7.js";import{t as p}from"./CodeBlock-Cjmxf9F4.js";import{n as m,t as h}from"./PropsTable-Dv1x2aJC.js";import{t as g}from"./EventsTable-D-LMtD8H.js";var _={class:`space-y-8`},v={class:`grid grid-cols-1 md:grid-cols-3 gap-4`},y={class:`grid grid-cols-1 md:grid-cols-2 gap-4 pt-2`},b={class:`p-3 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs font-mono grid grid-cols-2 sm:grid-cols-5 gap-2`},x={class:`text-blue-500 font-bold`},S={class:`text-emerald-500 font-bold`},C={class:`text-amber-500 font-bold`},w={class:`text-purple-500 font-bold`},T={class:`text-rose-500 font-bold`},E={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},ee={class:`flex flex-col justify-center text-xs text-slate-500 dark:text-slate-400 space-y-1 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/40`},D={class:`font-mono font-bold text-blue-500`},O={class:`font-mono font-bold`},k={class:`text-slate-400`},A={class:`text-xs text-slate-500 space-y-1`},j={class:`font-mono font-bold`},M={class:`text-slate-400 dark:text-slate-500`},N={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},P={class:`space-y-4`},F={class:`space-y-4`},I=`<template>
  <!-- US Dollar ($) -->
  <CurrencyInput
    v-model="usdPrice"
    currency="$"
    label="Price in USD"
  />

  <!-- Rupiah (Rp.) -->
  <CurrencyInput
    v-model="idrPrice"
    currency="Rp."
    label="Price in IDR"
  />

  <!-- Yen (yen / ¥) -->
  <CurrencyInput
    v-model="jpyPrice"
    currency="yen"
    label="Price in JPY"
  />

  <!-- Euro (€) -->
  <CurrencyInput
    v-model="eurPrice"
    currency="€"
    label="Price in EUR"
  />

  <!-- Suffix Currency Position -->
  <CurrencyInput
    v-model="gbpPrice"
    currency="£"
    currency-position="suffix"
    label="Suffix Currency"
  />
</template>`,L=`<CurrencyInput
  v-model="amount"
  allow-currency-select
  :currencies="['IDR', 'USD', 'JPY', 'EUR', 'GBP', 'SGD', 'AUD', 'SAR']"
  label="Select Payment Currency"
  @update:currency="(curr) => console.log('Selected:', curr)"
/>`,R=`<CurrencyInput
  v-model="amount"
  currency="Rp."
  label="Funding Contribution"
  :validate="{
    min: 10000,
    max: 5000000,
  }"
/>`,z=`<CurrencyInput
  v-model="fee"
  currency="USD"
  label="Subscription Annual Fee"
  tooltip="Enter cost excluding VAT/GST"
  tooltip-position="right"
  placeholder="120"
/>`,B=`<CurrencyInput
  v-model="amount"
  currency="Rp."
  label="Single Transfer Limit"
  required
  error="Amount exceeds maximum allowed limit"
/>
<CurrencyInput
  v-model="adminFee"
  currency="USD"
  label="Fixed Administrative Fee"
  disabled
/>`,V=a({__name:`CurrencyInputExample`,setup(a){let{isIndonesian:V,currentLocale:H}=u(),U=n(50),W=n(75e4),G=n(1e4),K=n(120),q=n(85),J=n(25e4),Y=n(`IDR`),X=n(5e3),Z=n(120),Q=n(15e7),$=n(50),te=[{name:`modelValue`,type:`number | null`,required:!0,description:`Reactive numeric value v-model`},{name:`label`,type:`string`,required:!0,description:`Input label title displayed above the field`},{name:`currency`,type:`SupportedCurrency | string`,default:`lang === 'id' ? 'IDR' : 'USD'`,description:`Currency code (IDR, USD, JPY, EUR, GBP), symbol ($, Rp., ¥, €, £), or name (yen, rupiah, dollar).`},{name:`currencyPosition`,type:`'prefix' | 'suffix'`,default:`'prefix'`,description:`Placement of the currency symbol or selector (before or after the input value).`},{name:`currencies`,type:`SupportedCurrency[]`,description:`Array of selectable currency codes/symbols for the integrated selector.`},{name:`allowCurrencySelect`,type:`boolean`,default:`false`,description:`Enables interactive currency selector dropdown pill in the input.`},{name:`id`,type:`string`,default:`setUID()`,description:`Unique DOM element ID`},{name:`placeholder`,type:`string`,description:`Placeholder hint text`},{name:`validate`,type:`{ min?: number, max?: number }`,description:`Client-side min and max currency value validation boundaries with localized warning messages.`},{name:`required`,type:`boolean`,default:`false`,description:`Displays required asterisk indicator`},{name:`disabled`,type:`boolean`,default:`false`,description:`Disables user input and locking controls`},{name:`error`,type:`string | string[]`,description:`External validation error message(s) from parent form/schema`},{name:`tooltip`,type:`string`,description:`Custom tooltip guidance text`},{name:`tooltipPosition`,type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Tooltip popup orientation`},{name:`tooltipIcon`,type:`string`,default:`'❓'`,description:`Icon character or glyph displayed for tooltip trigger`},{name:`lang`,type:`'en' | 'id'`,default:`'en'`,description:`Language code used for currency formatting symbols and error messages`}],ne=[{name:`update:modelValue`,type:`(value: number | null, id: string) => void`,description:`Emitted upon currency amount changes`},{name:`update:currency`,type:`(currency: string, id: string) => void`,description:`Emitted when user switches the currency`},{name:`push:error`,type:`(errors: string[], id: string) => void`,description:`Emitted when min or max validation check fails`},{name:`remove:error`,type:`(id: string) => void`,description:`Emitted when currency validation check passes`}];return(n,a)=>{let u=e(`DocHeader`);return t(),i(`div`,_,[o(u),o(m,{title:l(V)?`Dukungan Mata Uang Lengkap ($, Rp., Yen, EUR, GBP)`:`Global Multi-Currency Support ($, Rp., Yen, EUR, GBP)`,description:l(V)?`Mendukung berbagai mata uang global (IDR, USD, JPY, EUR, GBP, SAR, dsb.) dengan format simbol dan pemisah ribuan otomatis.`:`Supports worldwide currencies (IDR, USD, JPY, EUR, GBP, SAR, etc.) with automatic symbol positioning and locale thousands separators.`},{code:d(()=>[o(p,{code:I,language:`vue`})]),default:d(()=>[r(`div`,v,[o(l(f),{modelValue:U.value,"onUpdate:modelValue":a[0]||=e=>U.value=e,currency:`$`,label:l(V)?`Harga Global (USD - $)`:`Global Price (USD - $)`,placeholder:`50`,lang:l(H)},null,8,[`modelValue`,`label`,`lang`]),o(l(f),{modelValue:W.value,"onUpdate:modelValue":a[1]||=e=>W.value=e,currency:`Rp.`,label:l(V)?`Harga Domestik (IDR - Rp.)`:`Domestic Price (IDR - Rp.)`,placeholder:`750000`,lang:l(H)},null,8,[`modelValue`,`label`,`lang`]),o(l(f),{modelValue:G.value,"onUpdate:modelValue":a[2]||=e=>G.value=e,currency:`yen`,label:l(V)?`Harga Tokyo (JPY - Yen)`:`Tokyo Price (JPY - Yen)`,placeholder:`10000`,lang:l(H)},null,8,[`modelValue`,`label`,`lang`])]),r(`div`,y,[o(l(f),{modelValue:K.value,"onUpdate:modelValue":a[3]||=e=>K.value=e,currency:`€`,label:l(V)?`Eropa (EUR - €)`:`Europe (EUR - €)`,placeholder:`120`,lang:l(H)},null,8,[`modelValue`,`label`,`lang`]),o(l(f),{modelValue:q.value,"onUpdate:modelValue":a[4]||=e=>q.value=e,currency:`£`,"currency-position":`suffix`,label:l(V)?`Posisi Akhir (Suffix - £)`:`Suffix Position (£)`,placeholder:`85`,lang:l(H)},null,8,[`modelValue`,`label`,`lang`])]),r(`div`,b,[r(`div`,null,[a[11]||=s(`USD: `,-1),r(`span`,x,`$`+c(U.value??0),1)]),r(`div`,null,[a[12]||=s(`IDR: `,-1),r(`span`,S,`Rp `+c(W.value??0),1)]),r(`div`,null,[a[13]||=s(`JPY: `,-1),r(`span`,C,`¥`+c(G.value??0),1)]),r(`div`,null,[a[14]||=s(`EUR: `,-1),r(`span`,w,`€`+c(K.value??0),1)]),r(`div`,null,[a[15]||=s(`GBP: `,-1),r(`span`,T,`£`+c(q.value??0),1)])])]),_:1},8,[`title`,`description`]),o(m,{title:l(V)?`Pilihan Mata Uang Interaktif (Selectable)`:`Interactive Currency Selector`,description:l(V)?`Memungkinkan pengguna memilih mata uang secara langsung lewat dropdown terintegrasi.`:`Allows users to dynamically switch currencies directly via an integrated input dropdown selector.`},{code:d(()=>[o(p,{code:L,language:`vue`})]),default:d(()=>[r(`div`,E,[o(l(f),{modelValue:J.value,"onUpdate:modelValue":a[5]||=e=>J.value=e,"allow-currency-select":``,currencies:[`IDR`,`USD`,`JPY`,`EUR`,`GBP`,`SGD`,`AUD`,`SAR`],currency:Y.value,label:l(V)?`Pilih Mata Uang Pembayaran`:`Select Payment Currency`,lang:l(H),"onUpdate:currency":a[6]||=e=>Y.value=e},null,8,[`modelValue`,`currency`,`label`,`lang`]),r(`div`,ee,[r(`div`,null,[s(c(l(V)?`Mata uang aktif:`:`Active Currency:`)+` `,1),r(`code`,D,c(Y.value),1)]),r(`div`,null,[s(c(l(V)?`Nilai tersimpan:`:`Stored clean numeric value:`)+` `,1),r(`code`,O,c(J.value??0),1)]),r(`p`,k,c(l(V)?`Lebar padding prefix/suffix otomatis disesuaikan agar tidak menimpa angka.`:`Prefix/suffix padding adjusts automatically so numbers never overlap.`),1)])])]),_:1},8,[`title`,`description`]),o(m,{title:l(V)?`Validasi Batas Nilai (Min & Max)`:`Real-Time Validation (Min & Max Limits)`,description:l(V)?`Memvalidasi batas transaksi minimum dan maksimum secara real-time.`:`Enforces transaction limits between min (10,000) and max (5,000,000) with automatic error emission.`},{code:d(()=>[o(p,{code:R,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:X.value,"onUpdate:modelValue":a[7]||=e=>X.value=e,currency:`Rp.`,label:l(V)?`Kontribusi Pendanaan`:`Funding Contribution`,placeholder:l(V)?`Min 10.000, Maks 5.000.000`:`Min 10,000, Max 5,000,000`,lang:l(H),validate:{min:1e4,max:5e6}},null,8,[`modelValue`,`label`,`placeholder`,`lang`]),r(`div`,A,[r(`div`,null,[s(c(l(V)?`Nilai Saat Ini:`:`Current Value:`)+` `,1),r(`code`,j,c(X.value??0),1)]),r(`div`,M,c(l(V)?`Rentang yang diizinkan: 10.000 s/d 5.000.000.`:`Allowed range: 10,000 to 5,000,000.`),1)])]),_:1},8,[`title`,`description`]),o(m,{title:l(V)?`Panduan Tooltip Kustom`:`Custom Schema Tooltip`,description:l(V)?`Menampilkan panduan pengisian mata uang dengan tooltip kustom.`:`Displays currency guidelines using custom tooltips.`},{code:d(()=>[o(p,{code:z,language:`vue`})]),default:d(()=>[o(l(f),{modelValue:Z.value,"onUpdate:modelValue":a[8]||=e=>Z.value=e,currency:`USD`,label:l(V)?`Biaya Langganan Tahunan`:`Subscription Annual Fee`,tooltip:l(V)?`Masukkan biaya di luar PPN`:`Enter cost excluding VAT/GST`,"tooltip-position":`right`,placeholder:`120`,lang:l(H)},null,8,[`modelValue`,`label`,`tooltip`,`lang`])]),_:1},8,[`title`,`description`]),o(m,{title:l(V)?`Status Error & Disabled`:`External Error & Disabled States`,description:l(V)?`Tampilan peringatan visual dan status hanya-baca untuk mata uang.`:`Visual warnings and read-only displays for currency.`},{code:d(()=>[o(p,{code:B,language:`vue`})]),default:d(()=>[r(`div`,N,[o(l(f),{modelValue:Q.value,"onUpdate:modelValue":a[9]||=e=>Q.value=e,currency:`Rp.`,label:l(V)?`Batas Transfer Tunggal`:`Single Transfer Limit`,required:``,error:l(V)?`Nominal melebihi batas transfer tunggal maksimal yang diizinkan`:`Amount exceeds maximum allowed single transfer limit`,lang:l(H)},null,8,[`modelValue`,`label`,`error`,`lang`]),o(l(f),{modelValue:$.value,"onUpdate:modelValue":a[10]||=e=>$.value=e,currency:`USD`,label:l(V)?`Biaya Administrasi Tetap (Hanya-Baca)`:`Fixed Administrative Fee (Read-Only)`,disabled:``,lang:l(H)},null,8,[`modelValue`,`label`,`lang`])])]),_:1},8,[`title`,`description`]),r(`section`,P,[o(h,{props:te})]),r(`section`,F,[o(g,{events:ne})])])}}});export{V as default};