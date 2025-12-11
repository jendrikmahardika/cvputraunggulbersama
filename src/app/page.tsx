'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, Star, Shield, Truck, Award, Menu, X, ChevronRight } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProducts = [
    {
      name: "Honda Beat Sport",
      price: "Rp 18.500.000",
      image: "/motor-scooter.jpg",
      badge: "Best Seller",
      category: "Scooter",
      specs: ["110cc", "Automatic", "50 km/l"]
    },
    {
      name: "Yamaha NMAX",
      price: "Rp 32.500.000",
      image: "/motor-matic.jpg",
      badge: "Premium",
      category: "Maxi Scooter",
      specs: ["155cc", "Automatic", "45 km/l"]
    },
    {
      name: "Honda CB150R",
      price: "Rp 28.500.000",
      image: "/motor-sport.jpg",
      badge: "Sporty",
      category: "Sport",
      specs: ["150cc", "Manual", "40 km/l"]
    }
  ];

  const companyStats = [
    { value: "1000+", label: "Motor Terjual" },
    { value: "15+", label: "Merek Motor" },
    { value: "10+", label: "Tahun Pengalaman" },
    { value: "98%", label: "Kepuasan Pelanggan" }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Garansi Resmi",
      description: "Semua motor yang kami jual dilengkapi dengan garansi resmi dari pabrik"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Pengiriman Aman",
      description: "Layanan pengiriman motor yang aman dan terpercaya ke seluruh Indonesia"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Harga Terbaik",
      description: "Harga kompetitif dengan kualitas terbaik di pasaran"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Pelayanan Prima",
      description: "Tim profesional siap membantu Anda memilih motor yang tepat"
    }
  ];

  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Pengusaha",
      content: "Pelayanan sangat memuaskan, motor yang saya beli sesuai harapan dan prosesnya cepat.",
      rating: 5
    },
    {
      name: "Siti Nurhaliza",
      role: "Ibu Rumah Tangga",
      content: "Harga terjangkau dan kualitas motor bagus. Recommended untuk keluarga.",
      rating: 5
    },
    {
      name: "Ahmad Fauzi",
      role: "Karyawan Swasta",
      content: "Proses pembelian mudah, staffnya ramah dan helpful. Sangat puas!",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img src="/logo.png" alt="CV PUTRA UNGGUL BERSAMA" className="h-10 w-auto mr-3" />
                <div>
                  <h1 className="text-xl font-bold text-blue-900">CV PUTRA UNGGUL BERSAMA</h1>
                  <p className="text-xs text-gray-600">Motorcycle Trading Company</p>
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors">Produk</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang Kami</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</a>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Hubungi Kami
              </Button>
            </div>

            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Beranda</a>
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Produk</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Tentang Kami</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Kontak</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
                🏍️ Perdagangan Motor Baru Terpercaya
              </Badge>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Temukan <span className="text-blue-600">Motor Impian</span> Anda Bersama Kami
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                CV PUTRA UNGGUL BERSAMA adalah mitra terpercaya Anda dalam perdagangan motor baru berkualitas tinggi. 
                Kami menyediakan berbagai merek motor dengan harga kompetitif dan pelayanan terbaik.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Lihat Katalog Produk
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Hubungi Sales
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl p-8 text-white text-center">
                <div className="text-6xl mb-4">🏍️</div>
                <h3 className="text-2xl font-bold mb-2">Kualitas Terjamin</h3>
                <p>100% Motor Baru dengan Garansi Resmi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-100 text-orange-800">Produk Unggulan</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Motor Baru <span className="text-blue-600">Berkualitas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pilihan motor baru dari berbagai merek ternama dengan harga terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center p-4">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 right-2 bg-blue-100 text-blue-800 hover:bg-blue-200">
                      {product.badge}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="mb-2">
                    {product.category}
                  </Badge>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>
                    <div className="flex flex-wrap gap-2 justify-center mt-2">
                      {product.specs.map((spec, specIndex) => (
                        <Badge key={specIndex} variant="secondary" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-3">
                      <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Lihat Detail
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="text-blue-600">CV PUTRA UNGGUL BERSAMA</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen memberikan pelayanan terbaik untuk kepuasan pelanggan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 text-blue-600">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-100 text-orange-800">Testimoni Pelanggan</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Apa Kata <span className="text-blue-600">Pelanggan Kami</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kepuasan pelanggan adalah prioritas utama kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-semibold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-800">Tentang Kami</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Profesional dalam <span className="text-blue-600">Perdagangan Motor</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                CV PUTRA UNGGUL BERSAMA adalah perusahaan yang bergerak di bidang perdagangan besar sepeda motor baru. 
                Dengan pengalaman lebih dari 10 tahun, kami telah menjadi mitra terpercaya bagi ribuan pelanggan di seluruh Indonesia.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Kami menyediakan berbagai merek motor baru dengan kualitas terjamin dan harga yang kompetitif. 
                Setiap pembelian dilengkapi dengan dokumen lengkap dan garansi resmi.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Terpercaya</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Berkualitas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">Terpercaya</span>
                </div>
              </div>
            </div>
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-blue-900">Informasi Perusahaan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Alamat</p>
                    <p className="text-gray-600 text-sm">
                      GEDUNG PEMBINA GRAHA Jl. DI. PANJAITAN NO.45<br />
                      Kel. Rawa Bunga, Kec. Jatinegara<br />
                      Jakarta Timur, DKI Jakarta 13350
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Telepon</p>
                    <p className="text-gray-600">0853-5388-7273</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">info@putraunggulbersama.co.id</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-100 text-orange-800">Hubungi Kami</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Siap Melayani <span className="text-blue-600">Kebutuhan Motor</span> Anda
            </h2>
            <p className="text-xl text-gray-600">
              Tim profesional kami siap membantu Anda menemukan motor yang tepat
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl">Kirim Pesan</CardTitle>
                <CardDescription>
                  Isi formulir di bawah ini dan tim kami akan segera menghubungi Anda
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
                  <input 
                    type="tel" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Masukkan nomor telepon"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Masukkan email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <textarea 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                    placeholder="Tuliskan pesan Anda"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Kirim Pesan
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-blue-600" />
                    Hubungi Langsung
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-blue-600">0853-5388-7273</p>
                  <p className="text-gray-600">Senin - Sabtu: 08:00 - 17:00</p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    Kunjungi Kantor Kami
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    GEDUNG PEMBINA GRAHA<br />
                    Jl. DI. PANJAITAN NO.45<br />
                    Kel. Rawa Bunga, Kec. Jatinegara<br />
                    Jakarta Timur, DKI Jakarta 13350
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-blue-600" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600">info@putraunggulbersama.co.id</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/logo.png" alt="CV PUTRA UNGGUL BERSAMA" className="h-8 w-auto mr-2" />
                <h3 className="text-xl font-bold">CV PUTRA UNGGUL BERSAMA</h3>
              </div>
              <p className="text-gray-400">
                Perusahaan perdagangan motor baru terpercaya dengan kualitas terjamin.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Penjualan Motor Baru</a></li>
                <li><a href="#" className="hover:text-white">Konsultasi Produk</a></li>
                <li><a href="#" className="hover:text-white">Pengiriman Nasional</a></li>
                <li><a href="#" className="hover:text-white">Layanan Purna Jual</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white">Tentang Kami</a></li>
                <li><a href="#contact" className="hover:text-white">Kontak</a></li>
                <li><a href="/privacy" className="hover:text-white">Kebijakan Privasi</a></li>
                <li><a href="/terms" className="hover:text-white">Syarat & Ketentuan</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  0853-5388-7273
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@putraunggulbersama.co.id
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1" />
                  Jakarta Timur, DKI Jakarta
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CV PUTRA UNGGUL BERSAMA. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}