'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, Globe } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Ringkasan', icon: <Shield className="w-4 h-4" /> },
    { id: 'collection', title: 'Pengumpulan Data', icon: <Database className="w-4 h-4" /> },
    { id: 'usage', title: 'Penggunaan Data', icon: <Eye className="w-4 h-4" /> },
    { id: 'protection', title: 'Perlindungan Data', icon: <Lock className="w-4 h-4" /> },
    { id: 'rights', title: 'Hak Pengguna', icon: <UserCheck className="w-4 h-4" /> },
    { id: 'international', title: 'Transfer Internasional', icon: <Globe className="w-4 h-4" /> }
  ];

  const content = {
    overview: {
      title: 'Kebijakan Privasi',
      subtitle: 'CV PUTRA UNGGUL BERSAMA',
      lastUpdated: '1 Desember 2024',
      content: `
        <p class="mb-4">Selamat datang di <strong>CV PUTRA UNGGUL BERSAMA</strong>. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda sesuai dengan peraturan perundang-undangan yang berlaku di Indonesia.</p>
        
        <p class="mb-4">Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda ketika Anda menggunakan layanan kami, termasuk namun tidak terbatas pada:</p>
        
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Mengunjungi website kami</li>
          <li>Menghubungi kami melalui formulir kontak</li>
          <li>Menggunakan layanan konsultasi produk</li>
          <li> melakukan transaksi pembelian motor</li>
          <li>Berlangganan newsletter kami</li>
        </ul>
        
        <p class="mb-4">Dengan menggunakan layanan kami, Anda menyatakan telah membaca, memahami, dan menyetujui Kebijakan Privasi ini.</p>
      `
    },
    collection: {
      title: 'Pengumpulan Data Pribadi',
      content: `
        <p class="mb-4">Kami dapat mengumpulkan berbagai jenis informasi pribadi dari Anda, antara lain:</p>
        
        <h3 class="text-xl font-semibold mb-3">Data Identifikasi Pribadi</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Nama lengkap</li>
          <li>Alamat email</li>
          <li>Nomor telepon</li>
          <li>Alamat lengkap</li>
          <li>Nomor KTP/Identitas</li>
          <li>Nomor NPWP (jika diperlukan)</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Data Transaksional</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Riwayat pembelian</li>
          <li>Informasi pembayaran</li>
          <li>Data pengiriman</li>
          <li>Preferensi produk</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Data Teknis</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Alamat IP</li>
          <li>Data browser dan perangkat</li>
          <li>Cookie dan data tracking</li>
          <li>Riwayat kunjungan website</li>
        </ul>
        
        <p class="mb-4">Kami mengumpulkan data melalui:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>Formulir pendaftaran dan kontak</li>
          <li>Interaksi langsung dengan tim kami</li>
          <li>Analytics website</li>
          <li>Cookie dan teknologi tracking lainnya</li>
        </ul>
      `
    },
    usage: {
      title: 'Penggunaan Data Pribadi',
      content: `
        <p class="mb-4">Kami menggunakan data pribadi Anda untuk tujuan-tujuan berikut:</p>
        
        <h3 class="text-xl font-semibold mb-3">Layanan Pelanggan</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Memproses permintaan informasi produk</li>
          <li>Menangani transaksi pembelian</li>
          <li>Memberikan layanan purna jual</li>
          <li>Merespons pertanyaan dan keluhan</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Pemasaran dan Komunikasi</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Mengirim informasi produk terbaru</li>
          <li>Memberikan penawaran khusus</li>
          <li>Newsletter dan update layanan</li>
          <li>Survei kepuasan pelanggan</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Penyempurnaan Layanan</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Analisis perilaku pengguna</li>
          <li>Penelitian pasar</li>
          <li>Pengembangan produk baru</li>
          <li>Perbaikan pengalaman pengguna</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Kepatuhan Hukum</h3>
        <ul class="list-disc pl-6 space-y-2">
          <li>Memenuhi kewajiban hukum dan peraturan</li>
          <li>Perlindungan terhadap penipuan</li>
          <li>Penegakan hak hukum kami</li>
          <li>Keamanan transaksi</li>
        </ul>
      `
    },
    protection: {
      title: 'Perlindungan Data Pribadi',
      content: `
        <p class="mb-4"><strong>CV PUTRA UNGGUL BERSAMA</strong> berkomitmen untuk melindungi data pribadi Anda dengan:</p>
        
        <h3 class="text-xl font-semibold mb-3">Teknologi Keamanan</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Enkripsi data sensitif</li>
          <li>Firewall dan sistem deteksi intrusi</li>
          <li>SSL/TLS untuk transmisi data</li>
          <li>Backup data terenkripsi</li>
          <li>Access control yang ketat</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Kebijakan Internal</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Pelatihan reguler staf tentang privasi data</li>
          <li>Kebijakan akses minimum perlu</li>
          <li>Audit keamanan berkala</li>
          <li>Protokol respons insiden</li>
          <li>Kontrak kerahasiaan dengan pihak ketiga</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Penyimpanan Data</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Data disimpan di server aman di Indonesia</li>
          <li>Perioda retensi data sesuai peraturan</li>
          <li>Penghapusan data aman setelah perioda retensi</li>
          <li>Backup data dengan keamanan berlapis</li>
        </ul>
        
        <p class="mb-4">Meskipun kami telah menerapkan langkah-langkah keamanan yang komprehensif, kami tidak dapat menjamin keamanan data 100% karena risiko yang melekat pada transmisi data melalui internet.</p>
      `
    },
    rights: {
      title: 'Hak Pengguna Data',
      content: `
        <p class="mb-4">Sebagai pemilik data, Anda memiliki hak-hak berikut sesuai peraturan perundang-undangan yang berlaku:</p>
        
        <h3 class="text-xl font-semibold mb-3">Hak Akses</h3>
        <p class="mb-4">Anda berhak untuk:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Meminta salinan data pribadi yang kami simpan</li>
          <li>Mengetahui tujuan penggunaan data Anda</li>
          <li>Memperoleh informasi tentang pihak ketiga yang menerima data Anda</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Hak Koreksi</h3>
        <p class="mb-4">Anda berhak untuk:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Memperbaiki data pribadi yang tidak akurat</li>
          <li>Melengkapi data yang tidak lengkap</li>
          <li>Memperbarui informasi yang telah berubah</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Hak Penghapusan</h3>
        <p class="mb-4">Anda berhak meminta penghapusan data pribadi Anda dalam kondisi:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Data tidak lagi diperlukan untuk tujuan pengumpulan</li>
          <li>Anda menarik persetujuan dan tidak ada basis hukum lain</li>
          <li>Data diproses secara ilegal</li>
          <li>Ada kewajiban hukum untuk menghapus data</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Cara Mengajukan Hak Anda</h3>
        <p class="mb-4">Untuk mengajukan hak-hak Anda, silakan:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>Hubungi kami melalui email: privacy@putraunggulbersama.co.id</li>
          <li>Telepon: 0853-5388-7273</li>
          <li>Kunjungi kantor kami di Jakarta Timur</li>
          <li>Isi formulir permintaan yang tersedia di website</li>
        </ul>
        
        <p class="mb-4">Kami akan merespons permintaan Anda dalam waktu 14 hari kerja.</p>
      `
    },
    international: {
      title: 'Transfer Data Internasional',
      content: `
        <p class="mb-4">Sebagai perusahaan Indonesia, <strong>CV PUTRA UNGGUL BERSAMA</strong> berkomitmen untuk:</p>
        
        <h3 class="text-xl font-semibold mb-3">Penyimpanan Data Lokal</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Data pribadi Anda terutama disimpan di server di Indonesia</li>
          <li>Kami mematuhi peraturan perlindungan data Indonesia</li>
          <li>Transfer data hanya dilakukan jika diperlukan untuk layanan</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Transfer Data ke Luar Negeri</h3>
        <p class="mb-4">Jika kami perlu mentransfer data ke luar negeri, kami akan:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Memastikan negara tujuan memiliki standar perlindungan data yang setara</li>
          <li>Menggunakan kontrak transfer data yang aman</li>
          <li>Meminta persetujuan eksplisit dari Anda</li>
          <li>Memberikan informasi transparan tentang tujuan transfer</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Pihak Ketiga Internasional</h3>
        <p class="mb-4">Kami hanya berbagi data dengan pihak ketiga internasional yang:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Memiliki sertifikasi perlindungan data yang valid</li>
          <li>Menandatangani perjanjian kerahasiaan data</li>
          <li>Mematuhi standar keamanan data internasional</li>
          <li>Terikat oleh peraturan perlindungan data yang ketat</li>
        </ul>
        
        <p class="mb-4">Anda berhak menolak transfer data internasional dengan memberitahu kami secara tertulis.</p>
      `
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img src="/logo.png" alt="CV PUTRA UNGGUL BERSAMA" className="h-8 w-auto mr-3" />
                <div>
                  <h1 className="text-lg font-bold text-blue-900">CV PUTRA UNGGUL BERSAMA</h1>
                  <p className="text-xs text-gray-600">Privacy Policy</p>
                </div>
              </Link>
            </div>
            
            <div className="flex items-center">
              <Link href="/">
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Kembali ke Beranda
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-gray-600">
              <strong>CV PUTRA UNGGUL BERSAMA</strong> - Perlindungan Data Pribadi Anda
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg">Navigasi Kebijakan</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="space-y-1">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${
                          activeSection === section.id
                            ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        {section.icon}
                        <span className="text-sm font-medium">{section.title}</span>
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {content[activeSection].title}
                  </CardTitle>
                  {content[activeSection].subtitle && (
                    <p className="text-lg text-gray-600">
                      {content[activeSection].subtitle}
                    </p>
                  )}
                  {content[activeSection].lastUpdated && (
                    <p className="text-sm text-gray-500">
                      Terakhir diperbarui: {content[activeSection].lastUpdated}
                    </p>
                  )}
                </CardHeader>
                <CardContent>
                  <div 
                    className="prose prose-lg max-w-none text-gray-700"
                    dangerouslySetInnerHTML={{ __html: content[activeSection].content }}
                  />
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="text-xl">Pertanyaan tentang Privasi?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Hubungi Privacy Officer:</h4>
                      <p className="text-gray-600">Email: privacy@putraunggulbersama.co.id</p>
                      <p className="text-gray-600">Telepon: 0853-5388-7273</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Alamat Kantor:</h4>
                      <p className="text-gray-600">
                        GEDUNG PEMBINA GRAHA<br />
                        Jl. DI. PANJAITAN NO.45<br />
                        Jakarta Timur, DKI Jakarta 13350
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 CV PUTRA UNGGUL BERSAMA. Hak Cipta Dilindungi.</p>
          <div className="mt-4 space-x-4">
            <Link href="/privacy" className="text-gray-400 hover:text-white">Kebijakan Privasi</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white">Syarat & Ketentuan</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}