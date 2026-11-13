// Comprehensive Bilingual Dictionary for @zyvnox/vue-pack Documentation Site

export interface ComponentMeta {
  name: string
  nameId?: string
  descEn: string
  descId: string
}

export const COMPONENT_METADATA: Record<string, ComponentMeta> = {
  'text-input': {
    name: 'TextInput',
    descEn: 'Single-line text input component with custom tooltip support, dark-mode UnoCSS prefix styling, client-side duplicate & regex validation, and i18n support.',
    descId: 'Komponen input teks satu baris dengan dukungan tooltip kustom, styling UnoCSS mode gelap ber-prefix, validasi regex & duplikat sisi klien, serta dukungan i18n.',
  },
  'number-input': {
    name: 'NumberInput',
    descEn: 'Numeric input component with type safety, integer enforcement, min/max range validation, duplicate checks, and custom tooltip support.',
    descId: 'Komponen input angka dengan keamanan tipe, pembatasan bilangan bulat, validasi rentang min/max, pemeriksaan duplikat, dan dukungan tooltip kustom.',
  },
  'currency-input': {
    name: 'CurrencyInput',
    descEn: 'Currency formatting input component with formatted visual display (e.g. Rupiah/Dollar), min/max threshold validation, raw numerical model binding, and i18n support.',
    descId: 'Komponen input format mata uang dengan tampilan visual terformat (seperti Rupiah/Dolar), validasi batas min/max, binding nilai numerik murni, dan dukungan i18n.',
  },
  'email-input': {
    name: 'EmailInput',
    descEn: 'Email address input component with automatic RFC-compliant regex validation, duplicate checks, custom tooltip guidance, and i18n support.',
    descId: 'Komponen input alamat email dengan validasi regex standar RFC otomatis, pemeriksaan duplikat, panduan tooltip kustom, dan dukungan i18n.',
  },
  'password-input': {
    name: 'PasswordInput',
    descEn: 'Secure password field with visibility toggle button (show/hide), strict security policy validation (min/max length, uppercase, lowercase, numbers, special characters), and i18n support.',
    descId: 'Kolom kata sandi aman dengan tombol tampil/sembunyi, validasi kebijakan keamanan ketat (panjang min/max, huruf besar, huruf kecil, angka, karakter khusus), dan dukungan i18n.',
  },
  'tel-input': {
    name: 'TelInput',
    descEn: 'Telephone / mobile phone number input component with telephone regex formatting (+62 / 08xx), custom tooltips, and validation feedback.',
    descId: 'Komponen input nomor telepon / ponsel dengan format regex telepon (+62 / 08xx), tooltip kustom, dan umpan balik validasi.',
  },
  'url-input': {
    name: 'UrlInput',
    descEn: 'Web URL address input component with real-time protocol & URI parsing validation, custom tooltips, and i18n support.',
    descId: 'Komponen input alamat URL web dengan validasi protokol & parsing URI secara realtime, tooltip kustom, dan dukungan i18n.',
  },
  'text-area-input': {
    name: 'TextAreaInput',
    descEn: 'Multi-line text area component with reactive auto-expand, minLength & maxLength validation guards, custom tooltips, and i18n support.',
    descId: 'Komponen area teks multi-baris dengan auto-expand reaktif, batasan validasi minLength & maxLength, tooltip kustom, dan dukungan i18n.',
  },
  'text-area-quill-input': {
    name: 'TextAreaQuillInput (WYSIWYG Editor)',
    nameId: 'TextAreaQuillInput (Editor WYSIWYG)',
    descEn: 'Rich text WYSIWYG editor powered by Quill 2.0 with extended headers (H1–H5), image resizing, live word/char counters, min/max length validation, code-view mode, and AI generation hooks.',
    descId: 'Editor teks kaya WYSIWYG berbasis Quill 2.0 dengan heading lengkap (H1–H5), perataan & resize gambar, penghitung kata/karakter realtime, validasi panjang teks, mode kode HTML, dan integrasi AI.',
  },
  'selected-options': {
    name: 'SelectedOptions (Searchable Combobox)',
    nameId: 'SelectedOptions (Pilihan Dropdown)',
    descEn: 'Searchable dropdown selection component with custom key/label option mapping, dynamic inline modal item creation (withCreate), custom tooltips, and i18n support.',
    descId: 'Komponen dropdown pilihan yang dapat dicari dengan pemetaan kunci/label kustom, pembuatan item dinamis via modal (withCreate), tooltip kustom, dan dukungan i18n.',
  },
  'combobox': {
    name: 'SelectedOptions (Searchable Combobox)',
    nameId: 'SelectedOptions (Pilihan Dropdown)',
    descEn: 'Searchable dropdown selection component with custom key/label option mapping, dynamic inline modal item creation (withCreate), custom tooltips, and i18n support.',
    descId: 'Komponen dropdown pilihan yang dapat dicari dengan pemetaan kunci/label kustom, pembuatan item dinamis via modal (withCreate), tooltip kustom, dan dukungan i18n.',
  },
  'tag-input': {
    name: 'TagInput',
    descEn: 'Tag chip generator input with keyboard shortcuts (Enter / comma), tag count boundaries (min/max), custom tooltips, and i18n support.',
    descId: 'Komponen input tag chip dengan pintasan keyboard (Enter / koma), batasan jumlah tag (min/max), tooltip kustom, dan dukungan i18n.',
  },
  'color-input': {
    name: 'ColorInput (Color Selector)',
    nameId: 'ColorInput (Pemilih Warna)',
    descEn: 'Color selection component supporting both single hex color and multi-color palette array modes, palette item count validation (min/max), custom tooltips, and i18n support.',
    descId: 'Komponen pemilih warna yang mendukung mode warna hex tunggal maupun palet multi-warna, validasi jumlah palet (min/max), tooltip kustom, dan dukungan i18n.',
  },
  'color-picker': {
    name: 'ColorInput (Color Selector)',
    nameId: 'ColorInput (Pemilih Warna)',
    descEn: 'Color selection component supporting both single hex color and multi-color palette array modes, palette item count validation (min/max), custom tooltips, and i18n support.',
    descId: 'Komponen pemilih warna yang mendukung mode warna hex tunggal maupun palet multi-warna, validasi jumlah palet (min/max), tooltip kustom, dan dukungan i18n.',
  },
  'date-input': {
    name: 'DateInput',
    descEn: 'Calendar date selection component with ISO date format validation, minDate & maxDate bounds, custom tooltips, and i18n support.',
    descId: 'Komponen pemilihan tanggal kalender dengan validasi format tanggal ISO, batasan minDate & maxDate, tooltip kustom, dan dukungan i18n.',
  },
  'time-input': {
    name: 'TimeInput',
    descEn: 'Time selection component with 24-hour formatting, minTime & maxTime boundary validation, tooltip support, and i18n support.',
    descId: 'Komponen pemilihan waktu dengan format 24 jam, validasi batasan minTime & maxTime, dukungan tooltip, dan dukungan i18n.',
  },
  'date-time-input': {
    name: 'DateTimeInput',
    descEn: 'Combined date and time timestamp selector supporting ISO-8601 formatting, UTC / local-offset output, minDateTime & maxDateTime boundary checks, and tooltip guidance.',
    descId: 'Pemilih tanggal dan waktu gabungan dengan format ISO-8601, output UTC/offset lokal, batasan minDateTime & maxDateTime, serta panduan tooltip.',
  },
  'file-input': {
    name: 'FileInput',
    descEn: 'Single document upload component with remote URL entry, file type & size constraint validation, file inspection metadata, and tooltip guidance.',
    descId: 'Komponen unggah berkas tunggal dengan input URL eksternal, validasi tipe & ukuran berkas, metadata inspeksi berkas, dan panduan tooltip.',
  },
  'file-array-input': {
    name: 'FileArrayInput',
    descEn: 'Multi-file attachments manager with list preview, max file count limits (maxFiles), file type & size constraints, custom tooltips, and i18n support.',
    descId: 'Manajer lampiran banyak berkas dengan pratinjau daftar, batas jumlah berkas (maxFiles), batasan tipe & ukuran berkas, tooltip kustom, dan dukungan i18n.',
  },
  'image-input': {
    name: 'ImageInput',
    descEn: 'Single image upload component with live canvas preview, pixel dimensions (min/max), aspect ratio enforcement, watermark overlay, and i18n support.',
    descId: 'Komponen unggah gambar tunggal dengan pratinjau canvas langsung, batasan dimensi piksel (min/max), rasio aspek, penyematan watermark, dan dukungan i18n.',
  },
  'image-array-input': {
    name: 'ImageArrayInput (Photo Gallery Dropzone)',
    nameId: 'ImageArrayInput (Galeri Foto)',
    descEn: 'Multi-image gallery uploader featuring thumbnail grid preview, individual image deletion, max file count boundaries, format & dimension validation, and tooltip guidance.',
    descId: 'Uploader galeri multi-gambar dengan kisi thumbnail, penghapusan foto individual, batas jumlah berkas, validasi format & dimensi, dan panduan tooltip.',
  },
  'toggle-input': {
    name: 'ToggleInput (Switch)',
    nameId: 'ToggleInput (Sakelar)',
    descEn: 'Accessible boolean switch toggle component with smooth sliding animation, tooltip support, i18n support, and disabled state styling.',
    descId: 'Komponen sakelar biner (switch) yang aksesibel dengan animasi geser mulus, dukungan tooltip, dukungan i18n, dan styling status nonaktif.',
  },
  'rate-input': {
    name: 'RateInput (Star Rating)',
    nameId: 'RateInput (Penilaian Bintang)',
    descEn: 'Interactive star rating component with hover previews, customizable max scale via validate.max, custom tooltips, and responsive sizing.',
    descId: 'Komponen peringkat bintang interaktif dengan pratinjau hover, skala maksimal kustom via validate.max, tooltip kustom, dan ukuran responsif.',
  },
  'location-picker': {
    name: 'MapPicker (GIS Leaflet Map)',
    nameId: 'MapPicker (Peta GIS Leaflet)',
    descEn: 'Interactive Leaflet GIS map coordinate picker with draggable pin marker, search city filter, client-side guards, route Start/Finish pins, GPS sync, and tooltip support.',
    descId: 'Pemilih koordinat peta GIS Leaflet interaktif dengan pin penanda yang dapat digeser, filter pencarian kota, penanda Titik Awal & Selesai rute, sinkronisasi GPS, dan tooltip.',
  },
  'array-object': {
    name: 'ArrayObject (Dynamic Repeater List)',
    nameId: 'ArrayObject (Daftar Pengulang Dinamis)',
    descEn: 'Schema-driven repeatable list engine for managing dynamic arrays of complex objects (e.g. order items, SKU variants) with built-in FormModal item editing and field-level validation.',
    descId: 'Engine daftar berulang berbasis skema untuk mengelola array objek kompleks secara dinamis (seperti item pesanan, varian SKU) dengan modal FormModal bawaan dan validasi field.',
  },
  'object-input': {
    name: 'ObjectInput (Nested Schema Object)',
    nameId: 'ObjectInput (Objek Bersarang Skema)',
    descEn: 'Sub-schema form container that renders a structured nested object with real-time field validation, schema binding, and custom tooltips.',
    descId: 'Kontainer formulir sub-skema yang merender objek bersarang terstruktur dengan validasi field realtime, binding skema, dan tooltip kustom.',
  },
  'group-renderer': {
    name: 'GroupRenderer (Conditional Schema Branching)',
    nameId: 'GroupRenderer (Percabangan Skema)',
    descEn: 'Dynamic schema dispatcher that conditionally renders different form sub-schemas based on a selection dropdown or multi-section checkboxes, complete with real-time field-level validation.',
    descId: 'Pengatur skema dinamis yang merender sub-skema formulir berbeda secara kondisional berdasarkan pilihan dropdown atau kotak centang, lengkap dengan validasi field realtime.',
  },
  'form-modal': {
    name: 'FormModal (Enterprise Form Generator)',
    nameId: 'FormModal (Generator Formulir)',
    descEn: 'Enterprise schema-driven modal form generator featuring real-time input validation, required field enforcement, automatic SEO scoring, and seamless integration with TabelData CRUD operations.',
    descId: 'Generator formulir modal berbasis skema untuk enterprise dengan validasi input realtime, pemeriksaan field wajib, penilaian skor SEO otomatis, dan integrasi mulus operasi CRUD TabelData.',
  },
  'tabel-data': {
    name: 'TabelData (Enterprise CRUD Datatable)',
    nameId: 'TabelData (Tabel Data CRUD Enterprise)',
    descEn: 'Enterprise schema-driven datatable suite with multi-column sorting, text search, pagination, custom actions, and seamless FormModal CRUD integration backed by dual-layer validation.',
    descId: 'Suite tabel data enterprise berbasis skema dengan pengurutan multi-kolom, pencarian teks, paginasi, aksi kustom, dan integrasi mulus FormModal CRUD dengan validasi berlapis.',
  },
  'safe-html': {
    name: 'SafeHtml (XSS Sanitizer)',
    nameId: 'SafeHtml (Sanitasi XSS)',
    descEn: 'Secure HTML rendering component powered by DOMPurify that automatically neutralizes malicious scripts, onerror vectors, and XSS exploits.',
    descId: 'Komponen render HTML aman berbasis DOMPurify yang otomatis menetralisir skrip berbahaya, vektor onerror, dan celah eksploitasi XSS.',
  },
  'base-image': {
    name: 'BaseImage',
    descEn: 'Resilient image display component with broken image fallback, lazy loading support, and smooth load transitions.',
    descId: 'Komponen penampil gambar tangguh dengan fallback gambar rusak otomatis, dukungan lazy loading, dan transisi pemuatan mulus.',
  },
  'tooltip': {
    name: 'Tooltip',
    descEn: 'Reusable floating tooltip trigger component supporting multiple placements (top, bottom, left, right), custom icons, and hotkey hints.',
    descId: 'Komponen pemicu tooltip melayang yang dapat digunakan kembali dengan berbagai penempatan (atas, bawah, kiri, kanan), ikon kustom, dan petunjuk tombol pintasan.',
  },
  'modal-detail-data': {
    name: 'ModalDetailData',
    nameId: 'ModalDetailData (Dialog Detail Data)',
    descEn: 'Schema-driven read-only data detail dialog component for inspecting complete record contents formatted cleanly.',
    descId: 'Komponen dialog detail data hanya-baca berbasis skema untuk memeriksa seluruh konten data rekaman dengan format rapi.',
  },
  'alert-app': {
    name: 'AlertApp (Toast Notification Manager)',
    nameId: 'AlertApp (Manajer Notifikasi Toast)',
    descEn: 'Global floating toast notification manager with stacked animation, auto-dismiss timers, and success/error status styles.',
    descId: 'Manajer notifikasi toast melayang global dengan animasi tumpuk, penghitung waktu tutup otomatis, dan ragam status sukses/peringatan/error.',
  },
  'loader': {
    name: 'Loader (Fullscreen Status Overlay)',
    nameId: 'Loader (Overlay Status Layar Penuh)',
    descEn: 'Imperative fullscreen loading and feedback overlay supporting loading spinner, success checkmark, and error cross animations.',
    descId: 'Overlay loading dan status umpan balik layar penuh yang mendukung animasi spinner, centang sukses, peringatan, dan silang error.',
  },
  'warning-form': {
    name: 'WarningForm (Confirmation Modal)',
    nameId: 'WarningForm (Modal Konfirmasi)',
    descEn: 'Confirmation modal dialog for destructive actions (delete/archive) or positive verification prompts with custom buttons and i18n support.',
    descId: 'Dialog modal konfirmasi untuk tindakan destruktif (hapus/arsip) atau verifikasi positif dengan tombol kustom dan dukungan i18n.',
  },
  'seo-studio': {
    name: 'SEO Studio',
    descEn: 'Interactive live SEO analyzer and score calculator testing title, description, keywords, OpenGraph meta, and content readability.',
    descId: 'Penganalisis SEO langsung dan kalkulator skor yang menguji judul, deskripsi, kata kunci, meta OpenGraph, dan keterbacaan konten.',
  },
};


// 80 Demo Section Titles Map
export const DEMO_TITLE_MAP: Record<string, string> = {
  "Automatic Broken Image Fallback": "Fallback Otomatis Gambar Rusak",
  "Basic Boolean Switch": "Sakelar Boolean Dasar",
  "Basic Currency Input": "Input Mata Uang Dasar",
  "Basic Date & Time Selection": "Pemilihan Tanggal & Waktu Dasar",
  "Basic Date Selection": "Pemilihan Tanggal Dasar",
  "Basic Email Input": "Input Alamat Email Dasar",
  "Basic File Upload": "Unggah Berkas Dasar",
  "Basic Image Upload": "Unggah Gambar Dasar",
  "Basic Multi-File Attachments": "Lampiran Banyak Berkas Dasar",
  "Basic Numeric Input": "Input Angka Dasar",
  "Basic Password Input": "Input Kata Sandi Dasar",
  "Basic Searchable Select": "Pilihan Dropdown Dapat Dicari",
  "Basic Tag Input": "Input Tag Dasar",
  "Basic Telephone Input": "Input Nomor Telepon Dasar",
  "Basic Text Area": "Area Teks Dasar",
  "Basic Time Selection": "Pemilihan Waktu Dasar",
  "Basic URL Input": "Input Alamat URL Dasar",
  "Basic Usage": "Penggunaan Dasar",
  "Bounding Box Lat/Lng Validation": "Validasi Batas Kotak Koordinat (Bounding Box)",
  "Cautionary Warning Confirmation": "Konfirmasi Peringatan Kehati-hatian",
  "Conditional Schema Dispatcher (Select Mode)": "Pengatur Skema Kondisional (Mode Pilih)",
  "Custom Payload Keys & Localization": "Kunci Payload Kustom & Lokalisasi",
  "Custom Schema Tooltip": "Tooltip Skema Kustom",
  "Custom Trigger Icons & Hotkeys": "Ikon Pemicu Kustom & Tombol Pintasan",
  "Custom Wrapper Tag": "Tag Elemen Pembungkus Kustom",
  "Destructive Deletion Confirmation": "Konfirmasi Penghapusan Permanen",
  "Disabled Nested Object": "Objek Bersarang Mode Nonaktif",
  "Disabled State": "Status Nonaktif",
  "Disabled Toggle States": "Status Sakelar Nonaktif",
  "Dynamic Row Repeater with Item Validation": "Pengulang Baris Dinamis dengan Validasi Item",
  "Extended 10-Star Scale (`validate.max: 10`)": "Skala 10 Bintang (`validate.max: 10`)",
  "External Error & Disabled States": "Pesan Error Eksternal & Status Nonaktif",
  "Form with Real-Time SEO Audit": "Formulir dengan Audit SEO Realtime",
  "Full-Featured WYSIWYG Editor": "Editor WYSIWYG Fitur Lengkap",
  "Image with Branding Watermark": "Gambar dengan Watermark Merek",
  "Interactive Form with Real-Time Field Validation": "Formulir Interaktif dengan Validasi Field Realtime",
  "Interactive Leaflet Map Pin": "Pin Penanda Peta Leaflet Interaktif",
  "Live Interactive Datatable with FormModal CRUD": "Tabel Data Interaktif Langsung dengan FormModal CRUD",
  "Manual Error & Disabled States": "Pesan Error Manual & Status Nonaktif",
  "Multi-Color Palette (Min & Max Validation)": "Palet Multi-Warna (Validasi Min & Max)",
  "Multi-Image Gallery Dropzone": "Dropzone Galeri Multi-Foto",
  "Multi-Section Expansion (Checkbox Mode)": "Ekspansi Multi-Bagian (Mode Kotak Centang)",
  "Nested Object with Live Field Validation": "Objek Bersarang dengan Validasi Field Realtime",
  "Positive Action Confirmation": "Konfirmasi Tindakan Positif",
  "Read-Only Record Detail Dialog": "Dialog Detail Data Hanya-Baca",
  "Real-Time Length Validation": "Validasi Panjang Teks Realtime",
  "Real-Time Security Policy Validation": "Validasi Kebijakan Keamanan Sandi Realtime",
  "Real-Time Telephone Validation": "Validasi Nomor Telepon Realtime",
  "Real-Time URI Protocol Validation": "Validasi Protokol URI Realtime",
  "Real-Time Validation (Allowed Types & Max Size)": "Validasi Realtime (Tipe Berkas & Ukuran Maksimal)",
  "Real-Time Validation (Dimensions, Ratio & Max Size)": "Validasi Realtime (Dimensi, Rasio & Ukuran Maksimal)",
  "Real-Time Validation (Format & Duplicate Check)": "Validasi Realtime (Format & Pemeriksaan Duplikat)",
  "Real-Time Validation (Max Count, Allowed Types & Max Size)": "Validasi Realtime (Jumlah Maksimal, Tipe & Ukuran)",
  "Real-Time Validation (Max Files & Allowed Types)": "Validasi Realtime (Maksimal Berkas & Tipe)",
  "Real-Time Validation (Min & Max Length)": "Validasi Realtime (Panjang Min & Max)",
  "Real-Time Validation (Min & Max Limits)": "Validasi Realtime (Batas Min & Max)",
  "Real-Time Validation (Min & Max Tag Count)": "Validasi Realtime (Jumlah Tag Min & Max)",
  "Real-Time Validation (Min, Max, Integer & Duplicates)": "Validasi Realtime (Min, Max, Bilangan Bulat & Duplikat)",
  "Real-Time Validation (MinDate & MaxDate)": "Validasi Realtime (MinDate & MaxDate)",
  "Real-Time Validation (MinDateTime & MaxDateTime)": "Validasi Realtime (MinDateTime & MaxDateTime)",
  "Real-Time Validation (MinTime & MaxTime)": "Validasi Realtime (MinTime & MaxTime)",
  "Real-Time Validation (Pattern, Length & Duplicates)": "Validasi Realtime (Pola Regex, Panjang & Duplikat)",
  "Single Color Picker": "Pemilih Warna Tunggal",
  "Standard 5-Star Rating": "Penilaian Standar 5 Bintang",
  "Standard Formatted Markup": "Markup Terformat Standar",
  "Tooltip Placements": "Variasi Posisi Tooltip",
  "Trigger Floating Toast Alerts": "Picu Notifikasi Toast Melayang",
  "Trigger Fullscreen Overlays": "Picu Overlay Layar Penuh",
  "Update Mode (Pre-populated Data)": "Mode Edit / Perbarui (Data Terisi)",
  "Valid Image Display": "Tampilan Gambar Valid",
  "View-Only Display Map": "Peta Tampilan Hanya-Lihat",
  "View-Only with Geo Routing Overlay": "Hanya-Lihat dengan Overlay Rute Geo",
  "With Custom Schema Tooltip": "Dengan Tooltip Skema Kustom",
  "With Existing Photos Previews": "Dengan Pratinjau Foto yang Ada",
  "With Geolocation Validation": "Dengan Validasi Geolokasi",
  "With Password Requirements Tooltip": "Dengan Tooltip Persyaratan Sandi",
  "With Schema Tooltip": "Dengan Tooltip Skema",
  "With Schema Tooltip & Icon": "Dengan Tooltip Skema & Ikon",
  "With Tooltip & Custom Key/Label Mappings": "Dengan Tooltip & Pemetaan Kunci/Label Kustom",
  "XSS Attack Stripping Demo": "Demo Pembersihan Serangan XSS"
};

// 110 Demo Section Descriptions Map
export const DEMO_DESC_MAP: Record<string, string> = {
  "Add tags by typing and pressing Enter or comma. Remove with backspace or close icon.": "Tambahkan tag dengan mengetik dan menekan Enter atau koma. Hapus dengan backspace atau ikon silang.",
  "Add, edit, and delete structured objects. Clicking 'Add' or 'Edit' opens a FormModal that validates each field according to the item schema before updating the array.": "Tambah, edit, dan hapus objek terstruktur. Menekan 'Tambah' atau 'Edit' membuka FormModal yang memvalidasi setiap field sesuai skema item sebelum memperbarui array.",
  "Alerts the user before permanently removing records.": "Memberikan peringatan kepada pengguna sebelum menghapus rekaman data secara permanen.",
  "All child fields within the nested group are locked in read-only mode.": "Semua field anak di dalam grup bersarang terkunci dalam mode hanya-baca.",
  "Applies a semi-transparent branding watermark stamp on uploaded imagery.": "Menerapkan stempel watermark merek semi-transparan pada foto yang diunggah.",
  "Binds a numerical value with automatic number type casting.": "Mengikat nilai numerik dengan konversi tipe angka otomatis.",
  "Check one or more sections to activate and validate distinct sub-schemas in parallel.": "Centang satu atau beberapa bagian untuk mengaktifkan dan memvalidasi sub-skema berbeda secara paralel.",
  "Clear instruction tooltip displayed beside the email label.": "Tooltip instruksi yang jelas ditampilkan di samping label email.",
  "Click '+ Tambah Data' or 'Edit' on any row to open FormModal with real-time field validation and Zod schema validation.": "Klik '+ Tambah Data' atau 'Edit' pada baris mana saja untuk membuka FormModal dengan validasi field realtime dan validasi skema Zod.",
  "Click on the map or drag the marker pin to update geographical coordinates.": "Klik pada peta atau geser pin penanda untuk memperbarui koordinat geografis.",
  "Click the button to open a detailed view of a customer account.": "Klik tombol untuk membuka tampilan detail akun pelanggan.",
  "Click the buttons below to dispatch stacked toast notifications.": "Klik tombol di bawah untuk menampilkan notifikasi toast bertumpuk.",
  "Click to simulate async processing states.": "Klik untuk mensimulasikan status pemrosesan asinkron.",
  "Combined picker outputting timestamp formatted values.": "Pemilih gabungan yang menghasilkan nilai format timestamp.",
  "Configures an extended 10-point satisfaction evaluation scale using the validate configuration.": "Mengonfigurasi skala evaluasi kepuasan 10 poin menggunakan konfigurasi validasi.",
  "Customizes the reactive v-model payload keys (latitude/longitude) and sets the map UI language to Indonesian ('id').": "Mengkustomisasi kunci payload reaktif v-model (latitude/longitude) dan menyetel bahasa UI peta ke Bahasa Indonesia ('id').",
  "Demonstrates how embedded script tags and onerror vectors are safely sanitized.": "Mendemonstrasikan bagaimana tag skrip dan vektor onerror dibersihkan secara aman.",
  "Displays SEO metadata guidelines via tooltip.": "Menampilkan panduan metadata SEO melalui tooltip.",
  "Displays URL protocol requirement hints via tooltip.": "Menampilkan petunjuk persyaratan protokol URL melalui tooltip.",
  "Displays a help icon with interactive tooltip text beside the label.": "Menampilkan ikon bantuan dengan teks tooltip interaktif di samping label.",
  "Displays a pinned landmark location with custom GeoJSON routing/boundary overlay.": "Menampilkan lokasi landmark yang disematkan dengan overlay rute/batas GeoJSON kustom.",
  "Displays a pinned landmark location without editing controls.": "Menampilkan lokasi landmark yang disematkan tanpa kontrol pengeditan.",
  "Displays content authoring guidelines beside the editor label.": "Menampilkan panduan penulisan konten di samping label editor.",
  "Displays contextual guidance beside the group header label.": "Menampilkan panduan kontekstual di samping label header grup.",
  "Displays country code calling guidance via tooltip.": "Menampilkan panduan kode panggilan negara melalui tooltip.",
  "Displays currency guidelines using custom tooltips.": "Menampilkan panduan mata uang menggunakan tooltip kustom.",
  "Displays date constraints and format hints via tooltip.": "Menampilkan batasan tanggal dan petunjuk format melalui tooltip.",
  "Displays detailed submission guidance via tooltip.": "Menampilkan panduan penyerahan formulir terperinci melalui tooltip.",
  "Displays geolocation guidelines beside the map label.": "Menampilkan panduan geolokasi di samping label peta.",
  "Displays guidance beside the repeater collection label.": "Menampilkan panduan di samping label koleksi repeater.",
  "Displays guidance beside the section selector label.": "Menampilkan panduan di samping label pemilih seksi.",
  "Displays operating hours via tooltip.": "Menampilkan jam operasional melalui tooltip.",
  "Displays timezone and timestamp guidance via tooltip.": "Menampilkan panduan zona waktu dan timestamp melalui tooltip.",
  "Email field with standard email keyboard hints and reactive binding.": "Kolom email dengan petunjuk keyboard email standar dan binding reaktif.",
  "Enables automated SEO score calculation as users type titles, slugs, and body content.": "Mengaktifkan perhitungan skor SEO otomatis saat pengguna mengetik judul, slug, dan isi konten.",
  "Enforces strict image constraints: max 2048 KB, allowed types (JPEG/PNG/WEBP), aspect ratio 16:9, and max resolution 1920x1080.": "Menerapkan batasan gambar ketat: maksimal 2048 KB, tipe yang diperbolehkan (JPEG/PNG/WEBP), rasio aspek 16:9, dan resolusi maksimal 1920x1080.",
  "Enforces strict password rules: min 8 chars, uppercase, lowercase, numeric digit, and special symbol with instant localized alerts.": "Menerapkan aturan sandi ketat: minimal 8 karakter, huruf besar, huruf kecil, angka, dan simbol khusus dengan peringatan langsung terlokalisasi.",
  "Enforces tag count rules: requires at least 2 tags and at most 5 tags.": "Menerapkan aturan jumlah tag: membutuhkan setidaknya 2 tag dan maksimal 5 tag.",
  "Enforces transaction limits between min (10,000) and max (5,000,000) with automatic error emission.": "Menerapkan batas transaksi antara minimal (10.000) dan maksimal (5.000.000) dengan peringatan error otomatis.",
  "Explains complexity rules via schema tooltip.": "Menjelaskan aturan kompleksitas sandi melalui tooltip skema.",
  "Explains feature implications beside the toggle switch.": "Menjelaskan implikasi fitur di samping sakelar pengalih.",
  "Formats money values while storing clean numbers.": "Memformat nilai uang secara visual sekaligus menyimpan angka numerik murni.",
  "Gracefully replaces 404 links or invalid URLs with an aesthetic placeholder.": "Mengganti tautan 404 atau URL tidak valid secara elegan dengan gambar placeholder estetis.",
  "Green-themed modal for approving or activating records.": "Modal bernuansa hijau untuk menyetujui atau mengaktifkan data rekaman.",
  "Hover over any of the four trigger icons to test positioning.": "Arahkan kursor ke salah satu dari empat ikon pemicu untuk menguji variasi posisi.",
  "Input with web address validation and link icon indicator.": "Input dengan validasi alamat web dan indikator ikon tautan.",
  "Interactive 5-star rating widget with toggle reset.": "Widget penilaian bintang 5 interaktif dengan tombol reset.",
  "Interactive rich text editor with extended toolbar formats, maximize mode, and HTML source toggle.": "Editor teks kaya interaktif dengan format toolbar lengkap, mode maksimalkan, dan peralihan kode sumber HTML.",
  "Limits attachment pool to a maximum of 3 files, restricts types to PDF/ZIP, and limits each file to 4096 KB (4MB).": "Membatasi lampiran maksimal 3 berkas, membatasi tipe ke PDF/ZIP, dan membatasi setiap berkas maksimal 4096 KB (4MB).",
  "Locked on or off switch states.": "Status sakelar terkunci pada posisi menyala atau mati.",
  "Manage a list of files or remote links with add/remove actions.": "Kelola daftar berkas atau tautan remote dengan aksi tambah/hapus.",
  "Maps internal keys to user-friendly display labels with tooltip guidance.": "Memetakan kunci internal ke label tampilan ramah pengguna dengan panduan tooltip.",
  "Masked input with built-in show/hide eye toggle button.": "Input tersamar dengan tombol ikon mata untuk melihat/menyembunyikan sandi bawaan.",
  "Opens a modal generated from a schema with active validation constraints (minLength, email blacklist, currency min, integer bounds).": "Membuka modal yang di-generate dari skema dengan aturan validasi aktif (panjang minimal, daftar hitam email, minimal mata uang, batas bilangan bulat).",
  "Phone number input with mobile dialpad assistance.": "Input nomor telepon dengan format dialpad ponsel.",
  "Picks a single HEX color code.": "Memilih satu kode warna HEX tunggal.",
  "Pre-populates existing image URLs in gallery.": "Mengisi galeri dengan URL foto yang sudah ada sebelumnya.",
  "Pre-populates fields with existing record data and switches title/buttons to update mode.": "Mengisi kolom dengan data rekaman yang sudah ada dan mengalihkan judul/tombol ke mode pembaruan.",
  "Provide custom glyphs or keyboard shortcut labels.": "Menyediakan glif kustom atau label tombol pintasan keyboard.",
  "Read-only repeater display with row additions and edits locked.": "Tampilan pengulang hanya-baca dengan penambahan dan pengeditan baris terkunci.",
  "Render as a paragraph, span, or section via the as prop.": "Merender sebagai paragraf, span, atau seksi melalui prop as.",
  "Renders a valid image with proper aspect ratio and alt text.": "Merender gambar valid dengan rasio aspek dan teks alternatif (alt) yang tepat.",
  "Renders child fields defined in a sub-schema with real-time input validation (minLength, pattern, and required constraints).": "Merender field anak dari sub-skema dengan validasi input realtime (panjang minimal, regex pola, dan field wajib).",
  "Renders safe HTML tags including headings, bold text, links, and lists.": "Merender tag HTML aman meliputi heading, teks tebal, tautan, dan daftar.",
  "Restricts gallery to max 4 photos, limits each file to 3000 KB (3MB), and requires JPEG/PNG/WEBP formats.": "Membatasi galeri maksimal 4 foto, membatasi setiap berkas hingga 3000 KB (3MB), dan mewajibkan format JPEG/PNG/WEBP.",
  "Restricts map pin placement to a rectangular geographic bounding box (minLat, maxLat, minLng, maxLng).": "Membatasi penempatan pin peta dalam kotak koordinat geografis (minLat, maxLat, minLng, maxLng).",
  "Restricts the map pin to a specific city boundary and displays an error message if the user attempts to place the pin outside of the allowed area.": "Membatasi pin peta pada batas wilayah kota tertentu dan menampilkan pesan error jika pengguna mencoba menempatkan pin di luar area yang diizinkan.",
  "Restricts uploaded files to PDF/DOCX and enforces a 2048 KB (2MB) maximum file size.": "Membatasi berkas unggahan ke format PDF/DOCX dan menerapkan batas ukuran maksimal 2048 KB (2MB).",
  "Select an account type to dynamically reveal and validate specialized sub-schemas with custom pattern validation.": "Pilih tipe akun untuk menampilkan dan memvalidasi sub-skema khusus secara dinamis dengan validasi pola kustom.",
  "Select from a list of predefined options with instant filtering.": "Pilih dari daftar opsi pilihan yang telah ditentukan dengan pencarian instan.",
  "Select multiple colors to compose a theme palette with validation enforcing min 2 and max 4 colors.": "Pilih beberapa warna untuk menyusun palet tema dengan validasi minimal 2 dan maksimal 4 warna.",
  "Selects a calendar date bound to an ISO format string (YYYY-MM-DD).": "Memilih tanggal kalender yang terikat pada string format ISO (YYYY-MM-DD).",
  "Selects a single file or URL link with reactive binding.": "Memilih berkas tunggal atau tautan URL dengan binding reaktif.",
  "Selects an image file or enters a remote image URL with instant preview.": "Memilih berkas gambar atau memasukkan URL gambar remote dengan pratinjau instan.",
  "Selects hours and minutes formatted as HH:mm.": "Memilih jam dan menit dengan format waktu HH:mm.",
  "Standard multi-line text input with reactive v-model binding.": "Input teks multi-baris standar dengan binding reaktif v-model.",
  "Standard text input with reactive v-model binding.": "Input teks standar dengan binding reaktif v-model.",
  "Supports parent schema error strings and disabled states.": "Mendukung pesan error skema induk dan status nonaktif.",
  "Toggles a true/false boolean state.": "Beralih antara status boolean benar/salah (true/false).",
  "Upload multiple photos with grid previews and deletion controls.": "Unggah beberapa foto dengan pratinjau kisi dan kontrol penghapusan.",
  "Validates RFC email syntax and prevents registering existing emails (e.g. admin@company.com, support@company.com).": "Memvalidasi sintaks email RFC dan mencegah pendaftaran email yang sudah ada (misalnya admin@company.com, support@company.com).",
  "Validates calendar date bounds between minDate (2026-06-01) and maxDate (2026-12-31).": "Memvalidasi batas tanggal kalender antara minDate (2026-06-01) dan maxDate (2026-12-31).",
  "Validates international / domestic phone format (digits, plus prefix, hyphens, min 7 - max 20 chars).": "Memvalidasi format nomor telepon internasional / domestik (angka, awalan plus, tanda hubung, min 7 - maks 20 karakter).",
  "Validates min/max length, regex pattern (alphanumeric only), and blacklisted duplicate values with localized error alerts.": "Memvalidasi panjang min/max, pola regex (hanya alfanumerik), dan nilai duplikat terlarang dengan notifikasi error terlokalisasi.",
  "Validates numeric boundary [0 to 100], enforces integers, and rejects blacklisted duplicate numbers (e.g. 13, 42).": "Memvalidasi batas angka [0 hingga 100], mewajibkan bilangan bulat, dan menolak angka duplikat terlarang (misalnya 13, 42).",
  "Validates that authored article content contains at least 30 characters and at most 500 characters.": "Memvalidasi bahwa konten artikel yang ditulis memiliki panjang setidaknya 30 karakter dan maksimal 500 karakter.",
  "Validates that scheduled downtime falls within allowed window (2026-11-01T00:00 to 2026-11-30T23:59).": "Memvalidasi bahwa jadwal downtime berada dalam rentang waktu yang diizinkan (2026-11-01T00:00 hingga 2026-11-30T23:59).",
  "Validates that summary has at least 20 characters and at most 200 characters with live localized feedback.": "Memvalidasi bahwa ringkasan memiliki panjang setidaknya 20 karakter dan maksimal 200 karakter dengan umpan balik realtime terlokalisasi.",
  "Validates that the selected time is within standard business hours (08:00 to 17:00).": "Memvalidasi bahwa waktu yang dipilih berada dalam jam kerja standar (08:00 hingga 17:00).",
  "Validates valid internet URL format (requires valid protocol e.g. https:// and hostname).": "Memvalidasi format URL internet valid (memerlukan protokol seperti https:// dan nama host).",
  "Visual feedback when numeric limits are violated or input is disabled.": "Umpan balik visual saat batas numerik dilanggar atau input dinonaktifkan.",
  "Visual invalid URL alerts and read-only links.": "Peringatan visual URL tidak valid dan tautan hanya-baca.",
  "Visual invalid carrier alerts and read-only telephone views.": "Peringatan visual nomor telepon tidak valid dan tampilan hanya-baca.",
  "Visual invalid count feedback and read-only file lists.": "Umpan balik visual jumlah berkas tidak valid dan daftar hanya-baca.",
  "Visual invalid date alerts and read-only dates.": "Peringatan visual tanggal tidak valid dan tanggal hanya-baca.",
  "Visual invalid feedback and locked selection menus.": "Umpan balik visual tidak valid dan menu pilihan terkunci.",
  "Visual invalid format alerts and read-only image previews.": "Peringatan visual format gambar tidak valid dan pratinjau hanya-baca.",
  "Visual invalid format feedback and read-only email view.": "Umpan balik visual format email tidak valid dan tampilan email hanya-baca.",
  "Visual invalid palette warnings and read-only color displays.": "Peringatan visual palet warna tidak valid dan tampilan warna hanya-baca.",
  "Visual invalid photo count alerts and locked gallery views.": "Peringatan visual jumlah foto tidak valid dan tampilan galeri terkunci.",
  "Visual invalid review alerts and read-only ratings.": "Peringatan visual ulasan tidak valid dan peringkat bintang hanya-baca.",
  "Visual invalid review alerts and read-only text areas.": "Peringatan visual teks ulasan tidak valid dan area teks hanya-baca.",
  "Visual invalid strength feedback and locked inputs.": "Umpan balik visual kekuatan sandi tidak valid dan input terkunci.",
  "Visual invalid tag alerts and locked tag chips.": "Peringatan visual tag tidak valid dan chip tag terkunci.",
  "Visual invalid time alerts and locked clock inputs.": "Peringatan visual waktu tidak valid dan input jam terkunci.",
  "Visual invalid timestamp alerts and locked records.": "Peringatan visual timestamp tidak valid dan rekaman hanya-baca.",
  "Visual invalid upload warnings and read-only file states.": "Peringatan visual unggahan tidak valid dan status berkas hanya-baca.",
  "Visual invalid validation feedback and read-only rich view.": "Umpan balik visual validasi tidak valid dan tampilan teks kaya hanya-baca.",
  "Visual warnings and read-only displays for currency.": "Peringatan visual dan tampilan hanya-baca untuk nilai mata uang.",
  "Yellow/amber-themed modal for sensitive or caution-level operations.": "Modal bernuansa kuning/amber untuk operasi sensitif atau operasi tingkat kehati-hatian."
};

// 202 Prop Descriptions Map
export const PROP_EXACT_MAP: Record<string, string> = {
  "API configuration object for remote media handling (uploadImage, listImages, uploadVideo, listVideos, aiContentGeneration).": "Objek konfigurasi API untuk penanganan media remote (unggah gambar, daftar media, pembuatan konten AI).",
  "API endpoints for remote server-side CRUD requests": "Titik akhir (endpoints) API untuk permintaan CRUD sisi server.",
  "Accessible alternative description text": "Teks deskripsi alternatif aksesibilitas (alt)",
  "Active language code": "Kode bahasa yang digunakan untuk label tombol dan pesan notifikasi error",
  "Active language code controlling button labels and validation error messages": "Kode bahasa yang digunakan untuk label tombol dan pesan notifikasi error",
  "Active language code for buttons and modal dialogs": "Kode bahasa yang digunakan untuk label tombol dan pesan notifikasi error",
  "Active language code for child field messages": "Kode bahasa yang digunakan untuk label tombol dan pesan notifikasi error",
  "Alt accessibility text for gallery images": "Teks alternatif (alt) gambar untuk aksesibilitas pembaca layar.",
  "Alt text for image accessibility": "Teks alternatif (alt) gambar untuk aksesibilitas pembaca layar.",
  "Array of custom action buttons injected into row actions": "Array tombol aksi kustom yang disematkan ke dalam kolom aksi setiap baris tabel.",
  "Array of human-readable display labels mapped index-to-index with options": "Array label tampilan yang dipetakan sesuai urutan indeks opsi pilihan.",
  "Array of image URLs for initial thumbnail gallery": "Array URL gambar untuk galeri thumbnail awal.",
  "Array of option keys or stored values": "Array kunci opsi pilihan atau nilai yang disimpan.",
  "Authentication credentials (bearer, cookie, custom headers) for submit requests": "Kredensial autentikasi (bearer token, cookie, header kustom) untuk permintaan pengiriman formulir.",
  "Automatic client-side canvas watermarking configuration applied to all uploaded photos.": "Konfigurasi watermark kanvas otomatis sisi klien yang disematkan pada gambar yang diunggah.",
  "Automatic client-side canvas watermarking configuration stamped on uploaded image.": "Konfigurasi watermark kanvas otomatis sisi klien yang disematkan pada gambar yang diunggah.",
  "Blacklist of forbidden or already registered emails. Also automatically enforces standard email regex validation.": "Daftar hitam email terlarang atau yang telah terdaftar. Juga menerapkan validasi regex email standar secara otomatis.",
  "CSS height of the rendered Leaflet map canvas container.": "Tinggi CSS dari kontainer kanvas peta Leaflet yang dirender.",
  "Casts option values to numeric types": "Mengonversi nilai opsi pilihan ke tipe data numerik.",
  "Client-side boundary validation for timestamp range.": "Validasi batas sisi klien untuk rentang nilai timestamp.",
  "Client-side calendar date boundary validator. Emits localized errors if selected date precedes minDate or exceeds maxDate.": "Validator batas tanggal kalender sisi klien. Memancarkan error jika tanggal mendahului minDate atau melebihi maxDate.",
  "Client-side character length bounds. Emits localized validation errors if text is too short or exceeds maxLength.": "Batas panjang karakter teks sisi klien dengan notifikasi peringatan otomatis.",
  "Client-side file validator.": "Validator berkas sisi klien (ukuran maksimal KB dan ekstensi yang diizinkan).",
  "Client-side file validator. \"maxSize\" is in KB, and \"allowedTypes\" is an array of lowercase extension strings without dot (e.g. [\"pdf\", \"docx\"]).": "Validator berkas sisi klien: \"maxSize\" dalam satuan KB, dan \"allowedTypes\" adalah array ekstensi huruf kecil tanpa titik (contoh: [\"pdf\", \"docx\"]).",
  "Client-side image validation. Checks file size (KB), aspect ratio, pixel boundaries, and allowed file formats.": "Validasi gambar sisi klien. Memeriksa ukuran berkas (KB), rasio aspek, batas resolusi piksel, dan format yang diizinkan.",
  "Client-side min and max currency value validation boundaries with localized warning messages.": "Batas validasi nilai mata uang min dan max sisi klien dengan pesan peringatan terlokalisasi.",
  "Client-side numeric validation rules. Checks min, max, integer type, and duplicate list with localized messages.": "Aturan validasi numerik sisi klien. Memeriksa min, max, tipe integer, dan daftar duplikat dengan pesan terlokalisasi.",
  "Client-side password complexity requirements. Automatically runs checks against all enabled policy rules with localized messages.": "Persyaratan kompleksitas sandi sisi klien. Otomatis memeriksa seluruh aturan kebijakan dengan notifikasi terlokalisasi.",
  "Client-side spatial boundary guard. Accepts either numeric bounding box coordinates or a GeoJSON polygon boundary URL/object with point-in-polygon ray-casting validation.": "Pengaman batas wilayah spasial sisi klien. Menerima koordinat kotak pembatas (bounding box) atau poligon GeoJSON dengan validasi ray-casting.",
  "Client-side text character length boundaries with automatic warning alerts.": "Batas panjang karakter teks sisi klien dengan notifikasi peringatan otomatis.",
  "Client-side time boundary constraints. Emits localized errors if selected time is before minTime or after maxTime.": "Batas validasi waktu sisi klien. Memancarkan error jika waktu yang dipilih mendahului minTime atau melampaui maxTime.",
  "Client-side validation rules (regex format checking)": "Aturan validasi sisi klien (pemeriksaan format regex)",
  "Client-side validation rules. Automatically checks min/max length, regex pattern, and duplicate list with localized error messages.": "Aturan validasi sisi klien. Otomatis memeriksa panjang min/max, pola regex, dan daftar duplikat dengan pesan error terlokalisasi.",
  "Color theme and icon mode of the confirmation dialog": "Tema warna dan mode ikon kotak dialog konfirmasi ('danger' | 'warning' | 'success' | 'info')",
  "Context city appended to address search queries to bias local place results.": "Kota konteks yang ditambahkan ke kueri pencarian alamat untuk memfokuskan hasil tempat lokal.",
  "Context country appended to address search queries to scope geocoding accuracy.": "Negara konteks yang ditambahkan ke kueri pencarian alamat untuk mempersempit akurasi geocoding.",
  "Custom DOMPurify sanitizer options": "Opsi konfigurasi sanitizer DOMPurify kustom",
  "Custom browser Geolocation API options passed to navigator.geolocation.getCurrentPosition.": "Opsi Geolocation API browser kustom yang diteruskan ke navigator.geolocation.getCurrentPosition.",
  "Custom guidance text displayed on hover beside the group label": "Teks panduan kustom yang ditampilkan saat kursor diarahkan ke samping label grup",
  "Custom guidance text shown when hovering help icon": "Teks panduan kustom yang ditampilkan saat mengarahkan kursor ke ikon bantuan",
  "Custom icon character or emoji displayed next to the label for the tooltip trigger.": "Karakter ikon atau emoji kustom yang ditampilkan di samping label sebagai pemicu tooltip.",
  "Custom key names for record identification": "Nama kunci kustom untuk identifikasi rekaman data",
  "Custom tooltip guidance text": "Teks panduan tooltip kustom saat mengarahkan kursor",
  "Custom tooltip text": "Teks panduan tooltip kustom saat mengarahkan kursor",
  "Custom tooltip text shown when hovering the help icon": "Teks panduan tooltip kustom saat mengarahkan kursor",
  "Declarative field schema definition configuring field types, labels, tooltips, and validation constraints": "Definisi skema field deklaratif yang mengonfigurasi tipe field, label, tooltip, dan aturan validasi.",
  "Declarative schema for fields rendered inside each row modal": "Definisi skema field deklaratif yang mengonfigurasi tipe field, label, tooltip, dan aturan validasi.",
  "Default center latitude when no modelValue is present (defaults to Surabaya: -7.245905).": "Latitude pusat default saat tidak ada modelValue (default Surabaya: -7.245905).",
  "Default center longitude when no modelValue is present (defaults to Surabaya: 112.737821).": "Longitude pusat default saat tidak ada modelValue (default Surabaya: 112.737821).",
  "Default pre-selected option key(s)": "Kunci opsi bawaan yang terpilih di awal",
  "Detailed warning message explanation": "Penjelasan pesan peringatan terperinci",
  "Dialog header title": "Judul header kotak dialog konfirmasi",
  "Dialog title text": "Teks judul kotak dialog",
  "Dictionary of selectable schema configurations mapped by option keys": "Koleksi konfigurasi skema yang dipetakan berdasarkan kunci opsi",
  "Disabled input state": "Menonaktifkan interaksi input pengguna",
  "Disabled time picker state": "Status pemilih waktu nonaktif",
  "Disables adding new files or removing existing attachments": "Menonaktifkan penambahan berkas baru atau penghapusan lampiran yang ada.",
  "Disables all user interactions, pin dragging, address search, and manual coordinates inputs.": "Menonaktifkan seluruh interaksi pengguna, pergeseran pin, pencarian alamat, dan input koordinat manual.",
  "Disables editing, toolbar controls, and enters read-only view": "Menonaktifkan pengeditan dan kontrol toolbar, serta mengaktifkan mode hanya-baca.",
  "Disables file selection, URL prompt, and delete button": "Menonaktifkan pemilihan berkas, tombol URL, dan tombol hapus",
  "Disables internal FormModal/handlers to emit custom manual events instead": "Menonaktifkan FormModal/handler internal untuk memancarkan event manual kustom",
  "Disables option selection and locks child fields": "Menonaktifkan pemilihan opsi dan mengunci seluruh field anak.",
  "Disables photo uploads and deletion actions": "Menonaktifkan unggah foto dan tindakan penghapusan.",
  "Disables user input and locking controls": "Menonaktifkan interaksi input pengguna",
  "Disables user input interactions": "Menonaktifkan interaksi input pengguna",
  "Disables user interactions and locks switch": "Menonaktifkan interaksi pengguna dan mengunci sakelar.",
  "Dismisses the overlay": "Menutup tampilan overlay",
  "Dispatches a new stacked toast alert to the screen": "Menampilkan notifikasi toast bertumpuk baru ke layar",
  "Display labels mapping option keys to human-readable names": "Label tampilan yang memetakan kunci opsi ke nama yang mudah dibaca",
  "Display style: single select dropdown or multiple checkbox sections": "Gaya tampilan: dropdown pilihan tunggal atau bagian multi-kotak centang.",
  "Display-layer GeoJSON overlay for route or boundary visualization. Automatically renders route path (cyan), start/destination markers (A/B), and HUD showing distance and duration.": "Overlay GeoJSON layer-tampilan untuk rute atau batas area. Otomatis merender jalur rute (cyan), penanda awal/tujuan (A/B), serta HUD jarak dan durasi.",
  "Displays required asterisk indicator": "Menampilkan tanda bintang merah indikator wajib diisi",
  "Dropdown title label": "Judul label menu dropdown.",
  "Enables automatic URL URI parser validation": "Mengaktifkan validasi parser URI/URL otomatis.",
  "Enables client-side mock CRUD simulation persisting to IndexedDB": "Mengaktifkan simulasi CRUD tiruan sisi klien yang tersimpan langsung ke penyimpanan IndexedDB.",
  "Enables client-side mock creation using IndexedDB storage": "Mengaktifkan simulasi CRUD tiruan sisi klien yang tersimpan langsung ke penyimpanan IndexedDB.",
  "Enables dynamic item creation dialog modal directly inside dropdown menu.": "Mengaktifkan modal dialog pembuatan item baru secara dinamis langsung di dalam menu dropdown.",
  "Enables the device GPS synchronization crosshair button in the toolbar header.": "Mengaktifkan tombol bidik sinkronisasi GPS perangkat pada bilah toolbar header.",
  "Enforces coordinate selection; triggers internal validation error if coordinates are empty.": "Mewajibkan pemilihan koordinat; memicu error validasi internal jika koordinat kosong.",
  "Error message banner displayed below the repeater": "Banner pesan error yang ditampilkan di bawah pengulang",
  "External Geocoding provider credentials (Google Maps, Geoapify, Mapbox, Geocode.xyz) or a custom async query resolver handler.": "Kredensial penyedia Geocoding eksternal (Google Maps, Geoapify, Mapbox, Geocode.xyz) atau fungsi resolver kueri async kustom.",
  "External validation error message from parent form/schema": "Pesan error validasi eksternal dari formulir atau skema induk",
  "External validation error message(s) from parent form/schema": "Pesan error validasi eksternal dari formulir atau skema induk",
  "External validation error message(s) from parent form/schema. Renders red outline ring and error alerts.": "Pesan error validasi eksternal dari formulir atau skema induk. Merender garis tepi merah dan notifikasi peringatan.",
  "Fallback preview image URL displayed before selection": "URL gambar pratinjau fallback yang ditampilkan sebelum pemilihan",
  "Field label title": "Judul label field input",
  "Field label title displayed above attachments container": "Judul label yang ditampilkan di atas kolom input",
  "Field label title displayed above gallery": "Judul label yang ditampilkan di atas kolom input",
  "Field label title displayed above password input": "Judul label yang ditampilkan di atas kolom input",
  "Field label title displayed above picker": "Judul label yang ditampilkan di atas kolom input",
  "Field label title displayed above tag input": "Judul label yang ditampilkan di atas kolom input",
  "Field label title displayed above the date picker": "Judul label yang ditampilkan di atas kolom input",
  "Field label title displayed above the input": "Judul label yang ditampilkan di atas kolom input",
  "Field label title displayed above the time picker": "Judul label yang ditampilkan di atas kolom input",
  "Field label title displayed above upload box": "Judul label yang ditampilkan di atas kolom input",
  "Group label rendered above the selector": "Label grup yang dirender di atas pemilih",
  "Group title displayed above the nested container": "Judul grup yang ditampilkan di atas kontainer bersarang",
  "Group-level error message banner": "Banner pesan error tingkat grup",
  "Guidance text displayed beside the label on hover": "Teks panduan yang ditampilkan di samping label saat kursor diarahkan",
  "HTML tag used for outer wrapper element": "Tag elemen HTML yang digunakan sebagai pembungkus luar",
  "Icon character or emoji displayed for tooltip trigger": "Karakter ikon atau emoji pemicu tooltip",
  "Icon character or glyph displayed for the tooltip trigger": "Karakter ikon atau emoji pemicu tooltip",
  "Icon character or glyph displayed for tooltip trigger": "Karakter ikon atau emoji pemicu tooltip",
  "Icon symbol rendered beside the label when tooltip is set": "Simbol ikon yang ditampilkan di samping label saat tooltip diaktifkan",
  "Image asset source URL": "URL sumber aset gambar",
  "Informational tooltip guidance text displayed on hover beside the label.": "Teks panduan tooltip informatif yang ditampilkan saat kursor diarahkan ke samping label.",
  "Initial preset palette of hex colors": "Palet preset awal warna hex",
  "Input label title": "Judul label input",
  "Input label title displayed above numeric field": "Judul label yang ditampilkan di atas kolom input",
  "Input label title displayed above the field": "Judul label yang ditampilkan di atas kolom input",
  "Input title label displayed above the map control toolbar.": "Judul label input yang ditampilkan di atas bilah toolbar kontrol peta.",
  "Items per page and visible pagination controls": "Jumlah item per halaman dan kontrol navigasi paginasi yang terlihat",
  "Label for cancellation button": "Label teks untuk tombol aksi pembatalan",
  "Label for close action button": "Label untuk tombol aksi tutup",
  "Label for confirmation button": "Label teks untuk tombol aksi konfirmasi",
  "Label text beside switch": "Teks label di samping sakelar pengalih",
  "Label title displayed above editor toolbar": "Judul label yang ditampilkan di atas kolom input",
  "Label title displayed above stars": "Judul label yang ditampilkan di atas kolom input",
  "Label title displayed above the color picker": "Judul label yang ditampilkan di atas kolom input",
  "Label title displayed above the input field": "Judul label yang ditampilkan di atas kolom input",
  "Label title displayed above upload area": "Judul label yang ditampilkan di atas kolom input",
  "Language code": "Kode bahasa yang aktif ('en' | 'id')",
  "Language code for internal map tooltips, search placeholders, guides, and error notices.": "Kode bahasa untuk tooltip internal peta, placeholder pencarian, panduan, dan notifikasi error.",
  "Language code used for button labels and error notices": "Kode bahasa yang digunakan untuk label tombol dan pesan notifikasi error",
  "Language code used for currency formatting symbols and error messages": "Kode bahasa yang digunakan untuk label tombol dan pesan notifikasi error",
  "Language code used for internal validation error messages": "Kode bahasa yang digunakan untuk label tombol dan pesan notifikasi error",
  "Language code used for validation error notices": "Kode bahasa yang digunakan untuk label tombol dan pesan notifikasi error",
  "Locks URL input": "Mengunci input URL dan menonaktifkan interaksi",
  "Locks all nested fields in read-only mode": "Mengunci semua field bersarang dalam mode hanya-baca",
  "Locks color input and disables adding/removing colors": "Mengunci input warna serta menonaktifkan penambahan/penghapusan warna",
  "Locks combobox menu and disables selection": "Mengunci menu combobox dan menonaktifkan pemilihan",
  "Locks image input and prevents modifications": "Mengunci input gambar dan mencegah perubahan",
  "Locks numeric input and disables all interactions": "Mengunci input numerik dan menonaktifkan semua interaksi",
  "Locks password input and hides reveal toggle": "Mengunci input kata sandi dan menyembunyikan tombol lihat/sembunyikan",
  "Locks phone input": "Mengunci input nomor telepon dan menonaktifkan interaksi",
  "Locks picker interactions": "Mengunci interaksi pemilih",
  "Locks picker interactions and disables date selection": "Mengunci interaksi pemilih dan menonaktifkan pemilihan tanggal",
  "Locks star rating and enters read-only display mode": "Mengunci rating bintang dan mengaktifkan mode tampilan hanya-baca",
  "Locks tag list and disables adding or deleting tags": "Mengunci daftar tag dan menonaktifkan penambahan atau penghapusan tag",
  "Locks text area": "Mengunci area teks dan menonaktifkan interaksi",
  "Locks the list and disables add, edit, and remove buttons": "Mengunci daftar dan menonaktifkan tombol tambah, edit, dan hapus",
  "Marks the entire sub-object block as mandatory": "Menandai seluruh blok sub-objek sebagai bagian wajib diisi",
  "Message displayed inside tooltip balloon": "Pesan yang ditampilkan di dalam balon tooltip",
  "Multi-file validation constraints.": "Batasan validasi multi-berkas (jumlah maksimal berkas, ukuran per berkas, dan ekstensi yang diizinkan).",
  "Multi-file validation constraints. \"maxFiles\" caps total item count; \"maxSize\" is in KB per file; \"allowedTypes\" lists permitted file extensions without dot.": "Batasan validasi multi-berkas: \"maxFiles\" membatasi jumlah berkas, \"maxSize\" dalam KB per berkas, dan \"allowedTypes\" membatasi ekstensi berkas yang diizinkan tanpa titik.",
  "Multi-image gallery validation rules: max total image count, file size (KB) per image, pixel resolution bounds, and allowed image types.": "Aturan validasi galeri multi-gambar: jumlah maksimal foto, ukuran berkas (KB), batas resolusi piksel, dan tipe gambar yang diizinkan.",
  "Object key name representing latitude in the emitted modelValue payload (e.g. \"latitude\").": "Nama key objek yang mewakili latitude pada payload modelValue yang dipancarkan (contoh: \"latitude\").",
  "Object key name representing longitude in the emitted modelValue payload (e.g. \"longitude\").": "Nama key objek yang mewakili longitude pada payload modelValue yang dipancarkan (contoh: \"longitude\").",
  "Opens the overlay with the chosen animation and message": "Membuka tampilan overlay dengan animasi dan pesan yang dipilih",
  "Optional SEO audit mapping configuration linking field names to SEO scoring rules": "Konfigurasi pemetaan audit SEO opsional yang menghubungkan nama field ke aturan penilaian SEO",
  "Optional keyboard shortcut tag displayed in tooltip": "Label tombol pintasan keyboard opsional yang ditampilkan di dalam tooltip",
  "Output string formatting mode:": "Mode pemformatan string keluaran (\"local-offset\" atau \"utc\")",
  "Output string formatting mode: \"local-offset\" (preserves local timezone) or \"utc\" (converts to UTC with trailing Z).": "Mode pemformatan string keluaran: \"local-offset\" (mempertahankan zona waktu lokal) atau \"utc\" (konversi ke UTC berakhiran Z).",
  "Palette count validation boundaries enforcing minimum and maximum number of selected colors in palette mode.": "Batas validasi jumlah palet yang mewajibkan jumlah warna minimum dan maksimum terpilih dalam mode palet.",
  "Placeholder hint": "Teks petunjuk placeholder",
  "Placeholder hint text": "Teks petunjuk placeholder kolom input",
  "Placeholder hint text (defaults to HH:mm)": "Teks petunjuk placeholder kolom input",
  "Placeholder hint text (defaults to YYYY-MM-DD)": "Teks petunjuk placeholder kolom input",
  "Placeholder hint text (defaults to i18n label)": "Teks petunjuk placeholder kolom input",
  "Placeholder hint text (falls back to i18n default)": "Teks petunjuk placeholder kolom input",
  "Placeholder hint text (falls back to i18n dictionary default)": "Teks petunjuk placeholder kolom input",
  "Placeholder search hint text": "Teks petunjuk pencarian placeholder",
  "Placeholder symbol for null or empty values": "Simbol placeholder untuk nilai kosong atau null",
  "Placement of the tooltip popover": "Posisi penempatan popover tooltip",
  "Popover placement relative to trigger": "Penempatan popover relatif terhadap elemen pemicu",
  "Position of the tooltip popover": "Posisi letak popover tooltip (top, bottom, left, right)",
  "Pre-populated field values to populate inputs when opening in update mode": "Nilai field awal untuk mengisi input saat dibuka dalam mode perbarui",
  "Preferred tooltip popover placement": "Posisi letak jendela popover tooltip (top, bottom, left, right)",
  "Rating scale boundary.": "Batas skala penilaian (mengontrol jumlah total bintang yang dirender).",
  "Rating scale boundary. \"max\" controls total number of rendered stars (defaults to 5, can be set to 10).": "Batas skala penilaian: \"max\" mengontrol jumlah total bintang yang dirender (default: 5, dapat disetel ke 10).",
  "Raw HTML string to sanitize and display": "String HTML mentah yang akan disanitasi dan ditampilkan secara aman",
  "Reactive HTML string v-model generated by Quill": "String markup HTML reaktif v-model",
  "Reactive URL string v-model": "Nilai string URL v-model reaktif",
  "Reactive array of File objects or remote URL strings": "Array reaktif berisi objek File atau string URL remote",
  "Reactive array of image files or remote URL strings": "Array reaktif berisi berkas gambar atau string URL remote",
  "Reactive array of string tag chips": "Array reaktif berisi kumpulan chip tag string",
  "Reactive boolean v-model": "Nilai boolean v-model reaktif",
  "Reactive date string v-model in ISO YYYY-MM-DD format": "String tanggal reaktif v-model dalam format ISO (YYYY-MM-DD)",
  "Reactive datetime string v-model (ISO format)": "Nilai string datetime v-model reaktif (format ISO)",
  "Reactive email string v-model": "Nilai string email v-model reaktif",
  "Reactive error dictionary for tracking child field validation errors": "Objek error reaktif untuk melacak pesan error validasi field anak",
  "Reactive error dictionary mapping field paths to validation error messages": "Objek error reaktif yang memetakan jalur field ke pesan error validasi",
  "Reactive file object or remote URL string v-model": "Objek berkas reaktif atau string URL remote untuk binding v-model",
  "Reactive file object or remote image URL string": "Objek file reaktif atau string URL gambar remote",
  "Reactive form data dictionary bound to active sub-schema fields": "Objek data formulir reaktif yang terikat ke field sub-skema aktif",
  "Reactive hex color string (single mode) or array of hex strings (palette mode)": "String kode warna hex reaktif (mode tunggal) atau array string hex (mode palet)",
  "Reactive multi-line string v-model": "Nilai string multi-baris v-model reaktif",
  "Reactive numeric rating score v-model": "Nilai skor rating numerik v-model reaktif",
  "Reactive numeric v-model value": "Nilai numerik v-model reaktif",
  "Reactive numeric value v-model": "Nilai numerik reaktif untuk binding v-model",
  "Reactive password string v-model": "Nilai string kata sandi v-model reaktif",
  "Reactive selected value v-model": "Nilai terpilih v-model reaktif",
  "Reactive state object storing bound values for the nested fields": "Objek reaktif yang menyimpan nilai terikat untuk field-field bersarang",
  "Reactive telephone string v-model": "Nilai string nomor telepon v-model reaktif",
  "Reactive time string v-model (HH:mm format)": "Nilai string waktu v-model reaktif (format JJ:mm)",
  "Reactive v-model binding value": "Nilai binding reaktif v-model",
  "Record data object to display": "Objek rekaman data yang akan ditampilkan",
  "Renders map in read-only pinned mode. Hides search, locks pin dragging, and disables manual inputs.": "Merender peta dalam mode hanya-baca terpasang pin. Menyembunyikan pencarian, mengunci pergeseran pin, dan menonaktifkan input manual.",
  "Repeater section title header": "Judul header seksi pengulang (repeater)",
  "Required indicator marker": "Penanda indikator wajib diisi (bintang merah)",
  "Requires at least one option to be selected": "Mewajibkan setidaknya satu opsi dipilih",
  "Schema mapping defining how fields are formatted": "Pemetaan skema yang menentukan cara pemformatan setiap field data",
  "Sub-schema dictionary defining child field types, labels, and validation rules": "Koleksi sub-skema yang menentukan tipe field anak, label, dan aturan validasi",
  "Table configuration: DB_NAME source, schema definitions (create/update/display/global), table headers, and data mappings": "Konfigurasi tabel: sumber DB_NAME, definisi skema (create/update/display/global), header kolom, dan pemetaan data",
  "Tag count constraints enforcing minimum and maximum number of allowed tags.": "Batasan jumlah tag yang mewajibkan batas minimum dan maksimum tag yang diizinkan.",
  "Tailwind CSS max-width constraint for the modal container": "Batas lebar maksimal Tailwind CSS untuk kontainer modal",
  "Toggles between Add/Create and Edit/Update modal headers and button styles": "Beralih antara header dan gaya tombol Tambah/Buat dan Edit/Perbarui pada modal",
  "Tooltip popover placement position relative to the icon.": "Posisi letak popover tooltip relatif terhadap ikon.",
  "Tooltip popover position": "Posisi jendela popover tooltip",
  "Tooltip popup location": "Posisi letak jendela popover tooltip (top, bottom, left, right)",
  "Tooltip popup orientation": "Posisi letak jendela popover tooltip (top, bottom, left, right)",
  "Tooltip popup position": "Posisi letak popup tooltip",
  "Trigger icon symbol or character": "Simbol karakter atau ikon pemicu tooltip",
  "Two-way reactive coordinate binding object containing latitude and longitude. Property keys default to \"lat\" and \"lng\", or custom keys set via latKey and lngKey.": "Objek pengikatan koordinat dua arah reaktif berisi latitude dan longitude. Nama properti default adalah \"lat\" dan \"lng\", atau nama kustom via latKey dan lngKey.",
  "Unique DOM element ID": "ID elemen DOM unik untuk komponen dan label",
  "Unique DOM element ID for input and label pairing": "ID elemen DOM unik untuk komponen dan label",
  "Unique DOM element ID for label and input binding": "ID elemen DOM unik untuk komponen dan label",
  "Unique element ID for the Leaflet DOM container and map instance.": "ID elemen unik untuk kontainer DOM Leaflet dan instans peta.",
  "Unique entity record ID passed to update handlers and lifecycle hooks": "ID unik rekaman data entitas yang diteruskan ke handler pembaruan",
  "Unique identifier for the group renderer component": "ID elemen DOM unik untuk komponen dan label",
  "Unique identifier for the object container": "ID elemen DOM unik untuk komponen dan label",
  "Unique identifier for the repeater element": "ID elemen DOM unik untuk komponen dan label",
  "When true, selects a single hex color string instead of an array of colors": "Jika true, memilih satu string warna hex alih-alih array warna",
  "Whether the parent form is currently in edit/update mode": "Menentukan apakah formulir induk sedang dalam mode edit/perbarui",
  "Whether the parent form is in edit/update mode": "Menentukan apakah formulir induk sedang dalam mode edit/perbarui.",
  "Whether the parent form is in update/edit mode": "Menentukan apakah formulir induk sedang dalam mode edit/perbarui.",
  "Wrapper element tag": "Tag elemen pembungkus (wrapper)",
  "Zod schemas for create, update, delete, and deleteMany submit pipelines": "Skema Zod untuk pipeline validasi submit create, update, delete, dan deleteMany.",
  "v-model array of row records": "Array reaktif v-model berisi rekaman data baris.",
};

// 80 Event Descriptions Map
export const EVENT_EXACT_MAP: Record<string, string> = {
  "Emitted upon color addition, removal, or change": "Dipancarkan saat penambahan, penghapusan, atau perubahan warna",
  "Emitted upon content updates with raw HTML string": "Dipancarkan saat konten diperbarui dengan string HTML mentah",
  "Emitted upon currency amount changes": "Dipancarkan saat jumlah nominal mata uang berubah",
  "Emitted upon date selection with ISO formatted string": "Dipancarkan saat tanggal dipilih dengan string format ISO",
  "Emitted upon datetime change with formatted timestamp": "Dipancarkan saat tanggal dan waktu berubah dengan timestamp terformat",
  "Emitted upon file additions or removals": "Dipancarkan saat penambahan atau penghapusan berkas",
  "Emitted upon file selection, URL entry, or file deletion": "Dipancarkan saat pemilihan berkas, input URL, atau penghapusan berkas",
  "Emitted upon image selection, URL prompt, or removal": "Dipancarkan saat pemilihan gambar, input URL, atau penghapusan",
  "Emitted upon input text changes with field ID": "Dipancarkan saat nilai input teks berubah bersama ID field",
  "Emitted upon numeric value change": "Dipancarkan saat nilai numerik berubah",
  "Emitted upon option selection": "Dipancarkan saat opsi pilihan dipilih",
  "Emitted upon password typing with input ID": "Dipancarkan saat pengetikan kata sandi bersama ID input",
  "Emitted upon phone number typing": "Dipancarkan saat pengetikan nomor telepon",
  "Emitted upon photo uploads or removals": "Dipancarkan saat foto diunggah atau dihapus",
  "Emitted upon star click (clicking active star resets to 0)": "Dipancarkan saat bintang rating diklik (mengklik bintang aktif mereset ke 0)",
  "Emitted upon tag addition or removal": "Dipancarkan saat penambahan atau penghapusan tag",
  "Emitted upon time change": "Dipancarkan saat waktu dipilih atau berubah",
  "Emitted upon toggle switch click": "Dipancarkan saat sakelar biner (toggle switch) diklik",
  "Emitted upon typing": "Dipancarkan saat pengguna mengetik",
  "Emitted when URL fails format verification": "Dipancarkan saat URL gagal verifikasi format",
  "Emitted when URL is valid": "Dipancarkan saat URL valid",
  "Emitted when a GeoJSON route is parsed and start/finish coordinates are extracted.": "Dipancarkan saat rute GeoJSON berhasil diparsing dan koordinat titik awal/akhir diekstraksi",
  "Emitted when a child field fails validation": "Dipancarkan saat field anak gagal validasi",
  "Emitted when a child field passes validation and error is cleared": "Dipancarkan saat field anak lolos validasi dan error dibersihkan",
  "Emitted when a child field within an active schema updates": "Dipancarkan saat field anak dalam skema aktif diperbarui",
  "Emitted when a child input error is resolved": "Dipancarkan saat error pada input anak telah terselesaikan",
  "Emitted when a child input fails validation": "Dipancarkan saat input anak gagal validasi",
  "Emitted when a custom action button is clicked on a row": "Dipancarkan saat tombol aksi kustom diklik pada suatu baris",
  "Emitted when a nested multi-select changes selection": "Dipancarkan saat pilihan multi-select bersarang berubah",
  "Emitted when a nested select/dropdown changes single selection": "Dipancarkan saat pilihan tunggal select/dropdown bersarang berubah",
  "Emitted when a new option item is dynamically created via withCreate modal": "Dipancarkan saat item opsi baru dibuat secara dinamis melalui modal withCreate",
  "Emitted when a numeric validation rule fails": "Dipancarkan saat aturan validasi numerik gagal",
  "Emitted when a validation rule check fails with error messages array": "Dipancarkan saat pemeriksaan aturan validasi gagal dengan array pesan error",
  "Emitted when all attachments pass validation": "Dipancarkan saat semua lampiran lolos validasi",
  "Emitted when all validation errors are resolved": "Dipancarkan saat semua error validasi telah terselesaikan",
  "Emitted when any nested child input value changes": "Dipancarkan saat nilai input anak bersarang berubah",
  "Emitted when checkbox multi-selection changes": "Dipancarkan saat pilihan multi-kotak centang berubah",
  "Emitted when content fails minLength/maxLength rules": "Dipancarkan saat konten melanggar aturan minLength atau maxLength",
  "Emitted when content satisfies all validation criteria": "Dipancarkan saat konten memenuhi semua kriteria validasi",
  "Emitted when coordinates pass all validation rules and all errors are cleared.": "Dipancarkan saat koordinat memenuhi semua aturan validasi spasial dan semua error dibersihkan",
  "Emitted when creating options inside child select inputs": "Dipancarkan saat membuat opsi di dalam input select anak",
  "Emitted when currency validation check passes": "Dipancarkan saat validasi mata uang berhasil lolos",
  "Emitted when datatable data is refetched or updated": "Dipancarkan saat data tabel dimuat ulang atau diperbarui",
  "Emitted when date fails minDate/maxDate boundaries": "Dipancarkan saat tanggal melanggar batas minDate atau maxDate",
  "Emitted when device GPS synchronization completes successfully with retrieved coordinate details.": "Dipancarkan saat sinkronisasi GPS perangkat berhasil diselesaikan beserta detail koordinat yang diperoleh",
  "Emitted when device GPS synchronization fails due to permission denial, timeout, or lack of support.": "Dipancarkan saat sinkronisasi GPS perangkat gagal akibat izin ditolak, batas waktu habis (timeout), atau ketiadaan dukungan hardware",
  "Emitted when dynamically creating a new option within a nested select": "Dipancarkan saat membuat opsi baru secara dinamis dalam select bersarang",
  "Emitted when dynamically creating options inside select fields in row modals": "Dipancarkan saat membuat opsi secara dinamis dalam field select di modal baris",
  "Emitted when email format is invalid or duplicate is detected": "Dipancarkan saat format email tidak valid atau email duplikat terdeteksi",
  "Emitted when email is valid": "Dipancarkan saat email valid",
  "Emitted when file is valid or cleared": "Dipancarkan saat berkas valid atau dibersihkan",
  "Emitted when file list violates maxFiles, maxSize, or allowedTypes rules": "Dipancarkan saat daftar berkas melanggar aturan maxFiles, maxSize, atau allowedTypes",
  "Emitted when file violates maxSize or allowedTypes rules": "Dipancarkan saat berkas melanggar aturan maxSize atau allowedTypes",
  "Emitted when gallery satisfies all validation rules": "Dipancarkan saat galeri memenuhi semua aturan validasi",
  "Emitted when gallery violates maxFiles, maxSize, or allowedTypes": "Dipancarkan saat galeri melanggar aturan maxFiles, maxSize, atau allowedTypes",
  "Emitted when image passes all validation checks": "Dipancarkan saat gambar lolos semua pemeriksaan validasi",
  "Emitted when image violates size, aspect ratio, or pixel limits": "Dipancarkan saat gambar melanggar batas ukuran, rasio aspek, atau dimensi piksel",
  "Emitted when internal spatial validation fails (e.g. pin is placed outside GeoJSON polygon or bounding box).": "Dipancarkan saat validasi spasial internal gagal (contoh: pin diletakkan di luar poligon GeoJSON atau kotak pembatas)",
  "Emitted when manual.create is true and user clicks Tambah Data": "Dipancarkan saat manual.create aktif dan pengguna mengklik Tambah Data",
  "Emitted when manual.delete is true and user confirms deletion": "Dipancarkan saat manual.delete aktif dan pengguna mengonfirmasi penghapusan",
  "Emitted when manual.display is true and user clicks view detail": "Dipancarkan saat manual.display aktif dan pengguna mengklik lihat detail",
  "Emitted when manual.update is true and user clicks Edit on a row": "Dipancarkan saat manual.update aktif dan pengguna mengklik Edit pada baris",
  "Emitted when min or max validation check fails": "Dipancarkan saat validasi batas min atau max gagal",
  "Emitted when numeric validation passes": "Dipancarkan saat validasi numerik berhasil lolos",
  "Emitted when palette count is valid": "Dipancarkan saat jumlah palet warna valid",
  "Emitted when palette violates min or max color counts": "Dipancarkan saat palet melanggar aturan jumlah warna min atau max",
  "Emitted when password meets all complexity rules": "Dipancarkan saat kata sandi memenuhi semua aturan kompleksitas",
  "Emitted when password violates complexity requirements": "Dipancarkan saat kata sandi melanggar persyaratan kompleksitas",
  "Emitted when phone number format is valid": "Dipancarkan saat format nomor telepon valid",
  "Emitted when phone number format violates regex": "Dipancarkan saat format nomor telepon melanggar regex",
  "Emitted when rows are added, edited, or removed": "Dipancarkan saat baris ditambahkan, diedit, atau dihapus",
  "Emitted when selected date passes all validation checks": "Dipancarkan saat tanggal yang dipilih lolos semua validasi",
  "Emitted when selected time passes validation": "Dipancarkan saat waktu yang dipilih lolos validasi",
  "Emitted when selected timestamp passes validation": "Dipancarkan saat timestamp yang dipilih lolos validasi",
  "Emitted when single dropdown option changes": "Dipancarkan saat opsi pilihan dropdown tunggal berubah",
  "Emitted when submission is blocked by validation failures": "Dipancarkan saat pengiriman formulir diblokir oleh kegagalan validasi",
  "Emitted when tag count is within valid boundaries": "Dipancarkan saat jumlah tag berada dalam batas valid",
  "Emitted when tag count violates min or max rules": "Dipancarkan saat jumlah tag melanggar aturan min atau max",
  "Emitted when text satisfies all validation rules": "Dipancarkan saat teks memenuhi semua aturan validasi",
  "Emitted when text violates minLength or maxLength": "Dipancarkan saat teks melanggar aturan minLength atau maxLength",
  "Emitted when the user explicitly clicks anywhere on the Leaflet map to place a pin marker.": "Dipancarkan saat pengguna mengklik di area peta Leaflet untuk meletakkan pin penanda",
  "Emitted when the user locks the map via the toolbar Lock button to prevent accidental movement.": "Dipancarkan saat pengguna mengunci peta melalui tombol Kunci di toolbar untuk mencegah pergeseran tidak disengaja",
  "Emitted when the user unlocks the map via the toolbar Unlock button to enable editing.": "Dipancarkan saat pengguna membuka kunci peta melalui tombol Buka Kunci di toolbar untuk mengaktifkan pengeditan kembali",
  "Emitted when time violates minTime/maxTime rules": "Dipancarkan saat waktu melanggar aturan minTime atau maxTime",
  "Emitted when timestamp violates min/max boundaries": "Dipancarkan saat timestamp melanggar batas min atau max",
  "Emitted when title changes within editor": "Dipancarkan saat judul berubah di dalam editor",
  "Emitted when user cancels or closes the dialog": "Dipancarkan saat pengguna membatalkan atau menutup dialog",
  "Emitted when user cancels or dismisses": "Dipancarkan saat pengguna membatalkan atau menutup dialog",
  "Emitted when user clicks confirm": "Dipancarkan saat pengguna mengklik tombol konfirmasi",
  "Emitted when user dismisses the dialog": "Dipancarkan saat pengguna menutup dialog",
  "Emitted when user submits the form with fully validated payload": "Dipancarkan saat pengguna menyerahkan formulir dengan payload tervalidasi penuh",
  "Emitted whenever map coordinates change (pin drag, map click, place search, or manual input).": "Dipancarkan setiap kali koordinat peta berubah (pergeseran pin, klik peta, pencarian tempat, atau input manual)",
  "Emitted with the updated latitude string formatted to 6 decimal places.": "Dipancarkan bersama string latitude terbaru yang diformat hingga 6 angka desimal",
  "Emitted with the updated longitude string formatted to 6 decimal places.": "Dipancarkan bersama string longitude terbaru yang diformat hingga 6 angka desimal",
};

export function translatePropDescription(desc: string, name?: string): string {
  if (!desc) return desc
  const normalized = desc.replace(/\s+/g, ' ').trim()

  if (PROP_EXACT_MAP[normalized]) {
    return PROP_EXACT_MAP[normalized]
  }

  // Substring checks for composite descriptions
  if (normalized.includes('Two-way reactive coordinate binding') || normalized.includes('coordinate binding object')) {
    return 'Objek pengikatan koordinat dua arah reaktif berisi latitude dan longitude. Nama properti default adalah "lat" dan "lng", atau nama kustom via latKey dan lngKey.'
  }
  if (normalized.includes('Input title label displayed above the map')) {
    return 'Judul label input yang ditampilkan di atas bilah toolbar kontrol peta.'
  }
  if (normalized.includes('Unique element ID for the Leaflet DOM container')) {
    return 'ID elemen unik untuk kontainer DOM Leaflet dan instans peta.'
  }
  if (normalized.includes('Default center latitude when no modelValue')) {
    return 'Latitude pusat default saat tidak ada modelValue (default Surabaya: -7.245905).'
  }
  if (normalized.includes('Default center longitude when no modelValue')) {
    return 'Longitude pusat default saat tidak ada modelValue (default Surabaya: 112.737821).'
  }
  if (normalized.includes('representing latitude in the emitted modelValue payload')) {
    return 'Nama key objek yang mewakili latitude pada payload modelValue yang dipancarkan (contoh: "latitude").'
  }
  if (normalized.includes('representing longitude in the emitted modelValue payload')) {
    return 'Nama key objek yang mewakili longitude pada payload modelValue yang dipancarkan (contoh: "longitude").'
  }
  if (normalized.includes('CSS height of the rendered Leaflet map canvas')) {
    return 'Tinggi CSS dari kontainer kanvas peta Leaflet yang dirender.'
  }
  if (normalized.includes('Renders map in read-only pinned mode')) {
    return 'Merender peta dalam mode hanya-baca terpasang pin. Menyembunyikan pencarian, mengunci pergeseran pin, dan menonaktifkan input manual.'
  }
  if (normalized.includes('Disables all user interactions, pin dragging')) {
    return 'Menonaktifkan seluruh interaksi pengguna, pergeseran pin, pencarian alamat, dan input koordinat manual.'
  }
  if (normalized.includes('Enforces coordinate selection')) {
    return 'Mewajibkan pemilihan koordinat; memicu error validasi internal jika koordinat kosong.'
  }
  if (normalized.includes('Client-side spatial boundary guard')) {
    return 'Pengaman batas wilayah spasial sisi klien. Menerima koordinat kotak pembatas (bounding box) numerik atau URL/objek poligon GeoJSON dengan validasi ray-casting.'
  }
  if (normalized.includes('Display-layer GeoJSON overlay')) {
    return 'Overlay GeoJSON layer-tampilan untuk rute atau batas area. Otomatis merender jalur rute (cyan), penanda awal/tujuan (A/B), serta HUD jarak dan durasi.'
  }
  if (normalized.includes('Context city appended to address search')) {
    return 'Kota konteks yang ditambahkan ke kueri pencarian alamat untuk memfokuskan hasil tempat lokal.'
  }
  if (normalized.includes('Context country appended to address search')) {
    return 'Negara konteks yang ditambahkan ke kueri pencarian alamat untuk mempersempit akurasi geocoding.'
  }
  if (normalized.includes('External Geocoding provider credentials')) {
    return 'Kredensial penyedia Geocoding eksternal (Google Maps, Geoapify, Mapbox, Geocode.xyz) atau fungsi resolver kueri async kustom.'
  }
  if (normalized.includes('Informational tooltip guidance text displayed on hover beside the label')) {
    return 'Teks panduan tooltip informatif yang ditampilkan saat kursor diarahkan ke samping label.'
  }
  if (normalized.includes('Tooltip popover placement position relative to the icon')) {
    return 'Posisi letak popover tooltip relatif terhadap ikon.'
  }
  if (normalized.includes('Custom icon character or emoji displayed next to the label')) {
    return 'Karakter ikon atau emoji kustom yang ditampilkan di samping label sebagai pemicu tooltip.'
  }
  if (normalized.includes('Language code for internal map tooltips')) {
    return 'Kode bahasa untuk tooltip internal peta, placeholder pencarian, panduan, dan notifikasi error.'
  }
  if (normalized.includes('Enables the device GPS synchronization crosshair button') || normalized.includes('GPS synchronization crosshair')) {
    return 'Mengaktifkan tombol bidik sinkronisasi GPS perangkat pada bilah toolbar header.'
  }
  if (normalized.includes('Custom browser Geolocation API options')) {
    return 'Opsi Geolocation API browser kustom yang diteruskan ke navigator.geolocation.getCurrentPosition.'
  }
  if (normalized.includes('External validation error message(s) from parent form/schema. Renders red outline')) {
    return 'Pesan error validasi eksternal dari formulir atau skema induk. Merender garis tepi merah dan notifikasi peringatan.'
  }
  if (normalized.includes('Client-side validation rules')) {
    return 'Aturan validasi sisi klien. Otomatis memeriksa panjang min/max, pola regex, dan daftar duplikat dengan pesan error terlokalisasi.'
  }
  if (normalized.includes('Client-side calendar date boundary validator')) {
    return 'Validator batas tanggal kalender sisi klien. Memancarkan error jika tanggal yang dipilih mendahului minDate atau melebihi maxDate.'
  }
  if (normalized.includes('Client-side min and max currency value validation')) {
    return 'Batas validasi nilai mata uang min dan max sisi klien dengan pesan peringatan terlokalisasi.'
  }
  if (normalized.includes('Client-side min and max numeric value validation') || normalized.includes('Client-side numeric validation rules')) {
    return 'Batas validasi nilai numerik min dan max sisi klien dengan peringatan terlokalisasi.'
  }
  if (normalized.includes('Client-side time boundary constraints') || normalized.includes('Client-side time boundary validator')) {
    return 'Validator batas waktu sisi klien. Memancarkan peringatan jika waktu yang dipilih mendahului minTime atau melebihi maxTime.'
  }
  if (normalized.includes('Disables') && normalized.includes('selection')) {
    return 'Menonaktifkan interaksi pemilihan dan mengunci kontrol input.'
  }
  if (normalized.includes('Language code used for') || normalized.includes('Active language code') || normalized.includes('Language code')) {
    return 'Kode bahasa yang digunakan untuk label tombol dan pesan notifikasi error.'
  }

  return normalized
}

export function translateEventDescription(desc: string, eventName?: string): string {
  if (!desc) return desc
  const normalized = desc.replace(/\s+/g, ' ').trim()

  if (EVENT_EXACT_MAP[normalized]) {
    return EVENT_EXACT_MAP[normalized]
  }

  // Specific GPS events
  if (normalized.includes('GPS') || normalized.includes('gps')) {
    if (normalized.includes('error') || normalized.includes('fails') || normalized.includes('denial') || normalized.includes('timeout')) {
      return 'Dipancarkan saat sinkronisasi GPS perangkat gagal akibat izin ditolak, batas waktu habis (timeout), atau ketiadaan dukungan hardware'
    }
    if (normalized.includes('synced') || normalized.includes('completes') || normalized.includes('successfully')) {
      return 'Dipancarkan saat sinkronisasi GPS perangkat berhasil diselesaikan beserta detail koordinat yang diperoleh'
    }
  }

  // Specific map & route events
  if (normalized.includes('route') && normalized.includes('endpoints')) {
    return 'Dipancarkan saat rute GeoJSON berhasil diparsing dan koordinat titik awal/akhir diekstraksi'
  }
  if (normalized.includes('locked-coordinates') || normalized.includes('locks the map')) {
    return 'Dipancarkan saat pengguna mengunci peta melalui tombol Kunci di toolbar untuk mencegah pergeseran tidak disengaja'
  }
  if (normalized.includes('unlock-coordinates') || normalized.includes('unlocks the map')) {
    return 'Dipancarkan saat pengguna membuka kunci peta melalui tombol Buka Kunci di toolbar untuk mengaktifkan pengeditan kembali'
  }
  if (normalized.includes('clicks anywhere on the Leaflet map to place a pin')) {
    return 'Dipancarkan saat pengguna mengklik di area peta Leaflet untuk meletakkan pin penanda'
  }
  if (normalized.includes('map coordinates change (pin drag')) {
    return 'Dipancarkan setiap kali koordinat peta berubah (pergeseran pin, klik peta, pencarian tempat, atau input manual)'
  }
  if (normalized.includes('updated latitude string formatted')) {
    return 'Dipancarkan bersama string latitude terbaru yang diformat hingga 6 angka desimal'
  }
  if (normalized.includes('updated longitude string formatted')) {
    return 'Dipancarkan bersama string longitude terbaru yang diformat hingga 6 angka desimal'
  }
  if (normalized.includes('internal spatial validation fails')) {
    return 'Dipancarkan saat validasi spasial internal gagal (contoh: pin diletakkan di luar poligon GeoJSON atau kotak pembatas)'
  }

  if (normalized.startsWith('Emitted upon') || normalized.startsWith('Emitted when')) {
    if (normalized.includes('changes') || normalized.includes('updates')) {
      return 'Dipancarkan saat nilai mengalami perubahan atau pembaruan'
    }
    if (normalized.includes('error') || normalized.includes('fails') || normalized.includes('violates')) {
      return 'Dipancarkan saat pemeriksaan aturan validasi gagal'
    }
    if (normalized.includes('passes') || normalized.includes('resolved') || normalized.includes('valid') || normalized.includes('satisfies')) {
      return 'Dipancarkan saat semua pemeriksaan validasi terpenuhi'
    }
  }

  return normalized
}

export function translateDemoTitle(title: string): string {
  if (!title) return title
  const trimmed = title.trim()
  return DEMO_TITLE_MAP[trimmed] || trimmed
}

export function translateDemoDescription(desc?: string): string {
  if (!desc) return ''
  const trimmed = desc.trim()
  return DEMO_DESC_MAP[trimmed] || trimmed
}

export function getComponentMeta(keyOrPath: string, fallbackTitle?: string, fallbackDesc?: string): ComponentMeta {
  const cleanKey = keyOrPath.toLowerCase().replace(/example$/, '').replace(/input$/, '-input')
  const found = COMPONENT_METADATA[cleanKey] || Object.entries(COMPONENT_METADATA).find(([k]) => cleanKey.includes(k))?.[1]

  if (found) {
    return found
  }

  return {
    name: fallbackTitle || keyOrPath,
    descEn: fallbackDesc || 'Vue 3 component from @zyvnox/vue-pack.',
    descId: fallbackDesc ? `${fallbackTitle || keyOrPath}: Komponen Vue 3 dari @zyvnox/vue-pack.` : 'Komponen Vue 3 dari @zyvnox/vue-pack.',
  }
}
