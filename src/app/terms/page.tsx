'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, FileText, ShoppingCart, Shield, AlertCircle, Users, CreditCard } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState('general');

  const sections = [
    { id: 'general', title: 'Ketentuan Umum', icon: <FileText className="w-4 h-4" /> },
    { id: 'products', title: 'Produk & Layanan', icon: <ShoppingCart className="w-4 h-4" /> },
    { id: 'payment', title: 'Pembayaran', icon: <CreditCard className="w-4 h-4" /> },
    { id: 'warranty', title: 'Garansi', icon: <Shield className="w-4 h-4" /> },
    { id: 'responsibility', title: 'Tanggung Jawab', icon: <AlertCircle className="w-4 h-4" /> },
    { id: 'disputes', title: 'Sengketa', icon: <Users className="w-4 h-4" /> }
  ];

  const content = {
    general: {
      title: 'Ketentuan Umum',
      subtitle: 'Syarat dan Ketentuan Penggunaan Layanan',
      lastUpdated: '1 Desember 2024',
      content: `
        <p class="mb-4">Selamat datang di <strong>CV PUTRA UNGGUL BERSAMA</strong>. Syarat dan Ketentuan ini mengatur penggunaan layanan kami dan hubungan hukum antara Anda dan perusahaan kami.</p>
        
        <h3 class="text-xl font-semibold mb-3">1. Penerimaan Syarat</h3>
        <p class="mb-4">Dengan mengakses atau menggunakan layanan kami, Anda menyatakan telah membaca, memahami, dan menyetujui untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, Anda tidak boleh menggunakan layanan kami.</p>
        
        <h3 class="text-xl font-semibold mb-3">2. Informasi Perusahaan</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Nama Perusahaan:</strong> CV PUTRA UNGGUL BERSAMA</li>
          <li><strong>Alamat:</strong> GEDUNG PEMBINA GRAHA Jl. DI. PANJAITAN NO.45, Jakarta Timur, DKI Jakarta 13350</li>
          <li><strong>Telepon:</strong> 0853-5388-7273</li>
          <li><strong>Email:</strong> info@putraunggulbersama.co.id</li>
          <li><strong>Bidang Usaha:</strong> Perdagangan besar sepeda motor baru</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">3. Definisi</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>"Layanan"</strong> mengacu pada semua produk dan jasa yang kami sediakan</li>
          <li><strong>"Pelanggan"</strong> mengacu pada individu atau entitas yang menggunakan layanan kami</li>
          <li><strong>"Produk"</strong> mengacu pada sepeda motor baru yang kami jual</li>
          <li><strong>"Website"</strong> mengacu pada situs web resmi kami</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">4. Perubahan Syarat</h3>
        <p class="mb-4">Kami berhak mengubah Syarat dan Ketentuan ini sewaktu-waktu. Perubahan akan berlaku efektif sejak tanggal dipublikasikan di website kami. Penggunaan layanan yang berkelanjutan setelah perubahan merupakan persetujuan Anda terhadap syarat yang diperbarui.</p>
      `
    },
    products: {
      title: 'Produk dan Layanan',
      content: `
        <h3 class="text-xl font-semibold mb-3">1. Deskripsi Produk</h3>
        <p class="mb-4">CV PUTRA UNGGUL BERSAMA menyediakan:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Sepeda motor baru dari berbagai merek ternama</li>
          <li>Konsultasi produk dan pemilihan motor yang sesuai</li>
          <li>Layanan purna jual dan dukungan teknis</li>
          <li>Pengiriman motor ke seluruh Indonesia</li>
          <li>Asuransi dan perlindungan tambahan (opsional)</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">2. Ketersediaan Produk</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Ketersediaan produk dapat berubah sewaktu-waktu</li>
          <li>Harga dapat berubah tanpa pemberitahuan sebelumnya</li>
          <li>Kami berhak menolak pesanan jika stok tidak tersedia</li>
          <li>Informasi produk di website bersifat informatif</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">3. Spesifikasi Produk</h3>
        <p class="mb-4">Kami berusaha untuk menyediakan informasi produk yang akurat, namun:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Warna dan spesifikasi dapat sedikit berbeda dengan gambar</li>
          <li>Kami tidak bertanggung jawab atas kesalahan ketik</li>
          <li>Pelanggan disarankan untuk konfirmasi spesifikasi sebelum pembelian</li>
          <li>Perubahan spesifikasi dari produsen dapat terjadi</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">4. Proses Pembelian</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Pelanggan harus memberikan informasi yang akurat dan lengkap</li>
          <li>Pembayaran harus dilakukan sesuai dengan metode yang disepakati</li>
          <li>Dokumen lengkap diperlukan untuk proses administrasi</li>
          <li>Proses pengiriman akan dimulai setelah pembayaran lunas</li>
        </ul>
      `
    },
    payment: {
      title: 'Pembayaran',
      content: `
        <h3 class="text-xl font-semibold mb-3">1. Metode Pembayaran</h3>
        <p class="mb-4">Kami menerima berbagai metode pembayaran:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Transfer bank ke rekening perusahaan</li>
          <li>Tunai di kantor (dengan batasan tertentu)</li>
          <li>Kartu kredit/debit (untuk transaksi tertentu)</li>
          <li>Financing melalui mitra leasing</li>
          <li>Cicilan 0% (syarat dan ketentuan berlaku)</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">2. Harga dan Biaya</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Harga yang tercantum adalah harga on the road (OTR)</li>
          <li>Harga sudah termasuk pajak dan biaya administrasi</li>
          <li>Biaya pengiriman ditanggung pembeli (kecuali promo)</li>
          <li>Harga tidak mengikat dan dapat berubah sewaktu-waktu</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">3. Pembayaran Cicilan</h3>
        <p class="mb-4">Untuk pembelian dengan cicilan:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Perlu persetujuan dari perusahaan leasing</li>
          <li>Dokumen lengkap diperlukan untuk proses aplikasi</li>
          <li>Waktu proses aplikasi 1-3 hari kerja</li>
          <li>DP minimal sesuai ketentuan leasing</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">4. Konfirmasi Pembayaran</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Pembayaran harus dikonfirmasi dengan bukti transfer</li>
          <li>Kami tidak bertanggung jawab atas kesalahan transfer</li>
          <li>Pembayaran dianggap sah setelah konfirmasi dari kami</li>
          <li>Harap menyimpan bukti pembayaran untuk arsip</li>
        </ul>
      `
    },
    warranty: {
      title: 'Garansi dan Purna Jual',
      content: `
        <h3 class="text-xl font-semibold mb-3">1. Garansi Pabrik</h3>
        <p class="mb-4">Semua motor baru yang kami jual dilengkapi dengan:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Garansi resmi dari produsen (sesuai ketentuan masing-masing merek)</li>
          <li>Buku servis dan manual pengguna</li>
          <li>Kartu garansi yang harus diaktifkan</li>
          <li>Layanan servis gratis di bengkel resmi</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">2. Syarat Garansi</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Garansi berlaku untuk kerusakan pabrik</li>
          <li>Servis rutin harus dilakukan di bengkel resmi</li>
          <li>Penggunaan suku cadang resmi wajib</li>
          <li>Modifikasi tidak resmi dapat membatalkan garansi</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">3. Klaim Garansi</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Klaim dapat diajukan di bengkel resmi terdekat</li>
          <li>Perlu menunjukkan buku servis dan kartu garansi</li>
          <li>Waktu proses klaim 1-7 hari kerja</li>
          <li>Keputusan garansi sepenuhnya menjadi hak produsen</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">4. Layanan Purna Jual</h3>
        <p class="mb-4">Kami menyediakan layanan tambahan:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Bantuan proses klaim asuransi</li>
          <li>Rekomendasi bengkel resmi terdekat</li>
          <li>Informasi promo dan program resmi</li>
          <li>Bantuan pengurusan dokumen kendaraan</li>
        </ul>
      `
    },
    responsibility: {
      title: 'Tanggung Jawab',
      content: `
        <h3 class="text-xl font-semibold mb-3">1. Tanggung Jawab Kami</h3>
        <p class="mb-4">CV PUTRA UNGGUL BERSAMA bertanggung jawab untuk:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Menyediakan produk baru dan asli</li>
          <li>Memastikan dokumen kendaraan lengkap dan sah</li>
          <li>Memberikan informasi produk yang akurat</li>
          <li>Menjaga kerahasiaan data pelanggan</li>
          <li>Memberikan layanan pelanggan yang profesional</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">2. Tanggung Jawab Pelanggan</h3>
        <p class="mb-4">Pelanggan bertanggung jawab untuk:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Memberikan informasi yang benar dan lengkap</li>
          <li>Melakukan pembayaran tepat waktu</li>
          <li>Merawat kendaraan sesuai manual</li>
          <li>Mematuhi peraturan lalu lintas</li>
          <li>Menjaga keamanan kendaraan</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">3. Batasan Tanggung Jawab</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Kami tidak bertanggung jawab atas kecelakaan</li>
          <li>Kerusakan akibat penggunaan yang salah tidak ditanggung</li>
          <li>Kami tidak bertanggung jawab atas kerugian tidak langsung</li>
          <li>Force majeur (bencana alam, kerusuhan, dll) di luar kendali kami</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">4. Asuransi</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Asuransi opsional tersedia untuk perlindungan tambahan</li>
          <li>Premi asuransi ditanggung oleh pemilik kendaraan</li>
          <li>Klaim asuransi mengikuti ketentuan perusahaan asuransi</li>
          <li>Kami dapat membantu proses klaim asuransi</li>
        </ul>
      `
    },
    disputes: {
      title: 'Penyelesaian Sengketa',
      content: `
        <h3 class="text-xl font-semibold mb-3">1. Komunikasi</h3>
        <p class="mb-4">Jika terjadi masalah atau keluhan:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Hubungi layanan pelanggan kami terlebih dahulu</li>
          <li>Sampaikan keluhan secara jelas dan tertulis</li>
          <li>Sertakan bukti pendukung yang relevan</li>
          <li>Beri kami waktu untuk menindaklanjuti keluhan</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">2. Mediasi</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Kami akan berusaha menyelesaikan masalah secara musyawarah</li>
          <li>Mediasi dapat dilakukan melalui telepon, email, atau tatap muka</li>
          <li>Kedua belah pihak harus terbuka untuk solusi win-win</li>
          <li>Proses mediasi maksimal 14 hari kerja</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">3. Prosedur Pengaduan</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Langkah 1:</strong> Hubungi Customer Service (0853-5388-7273)</li>
          <li><strong>Langkah 2:</strong> Kirim email keluhan ke info@putraunggulbersama.co.id</li>
          <li><strong>Langkah 3:</strong> Jika tidak terselesaikan, ajukan ke manajemen</li>
          <li><strong>Langkah 4:</strong> Terakhir, dapat mengajukan ke lembaga penyelesaian sengketa</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">4. Yurisdiksi</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Syarat dan Ketentuan ini diatur oleh hukum Indonesia</li>
          <li>Sengketa akan diselesaikan di Pengadilan Negeri Jakarta Timur</li>
          <li>Kedua belah pihak setuju pada yurisdiksi ini</li>
          <li>Biaya hukum ditanggung masing-masing pihak</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">5. Kebijakan Pengembalian</h3>
        <ul class="list-disc pl-6 space-y-2">
          <li>Produk yang sudah dibeli tidak dapat dikembalikan</li>
          <li>Pengembalian hanya untuk produk cacat pabrik</li>
          <li>Proses pengembalian mengikuti kebijakan produsen</li>
          <li>Biaya pengembalian ditanggung pembeli</li>
        </ul>
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
                  <p className="text-xs text-gray-600">Terms & Conditions</p>
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
            <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Syarat & Ketentuan
            </h1>
            <p className="text-xl text-gray-600">
              <strong>CV PUTRA UNGGUL BERSAMA</strong> - Ketentuan Penggunaan Layanan
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
                  <CardTitle className="text-lg">Navigasi Syarat</CardTitle>
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
                  <CardTitle className="text-xl">Pertanyaan tentang Syarat & Ketentuan?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Hubungi Kami:</h4>
                      <p className="text-gray-600">Email: info@putraunggulbersama.co.id</p>
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