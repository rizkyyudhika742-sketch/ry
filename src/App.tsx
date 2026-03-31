/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Anchor, 
  Ship, 
  Globe, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ArrowRight, 
  Instagram, 
  Linkedin, 
  Facebook,
  Clock,
  Award,
  Users
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Layanan', href: '#services' },
    { name: 'Armada', href: '#fleet' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Anchor className={`w-8 h-8 ${isScrolled ? 'text-gold' : 'text-white'}`} />
          <span className={`serif text-2xl font-bold tracking-widest ${isScrolled ? 'text-navy' : 'text-white'}`}>
            SAMUDERA KENCANA
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:text-gold ${isScrolled ? 'text-navy' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <button className={`px-6 py-2 border text-xs uppercase tracking-widest transition-all hover:bg-gold hover:text-white hover:border-gold ${isScrolled ? 'border-gold text-gold' : 'border-white text-white'}`}>
            Hubungi Kami
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className={isScrolled ? 'text-navy' : 'text-white'} /> : <Menu className={isScrolled ? 'text-navy' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-10 px-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-navy text-lg serif border-b border-gray-100 pb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Cargo Ship" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/80" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gold uppercase tracking-[0.4em] text-sm mb-6 font-semibold"
        >
          Navigasi Unggul • Semarang, Indonesia
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="serif text-white text-5xl md:text-8xl lg:text-9xl leading-tight mb-8"
        >
          Menghubungkan <br /> <span className="italic font-light">Dunia Melalui</span> Samudera
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button className="bg-gold text-white px-10 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-gold transition-all duration-300">
            Jelajahi Layanan
          </button>
          <button className="border border-white/30 text-white px-10 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-white/10 transition-all duration-300">
            Tentang Kami
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-white/30" />
        <span className="text-[10px] text-white/50 uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-paper overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=2067&auto=format&fit=crop" 
              alt="Semarang Port" 
              className="w-full h-[600px] object-cover shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold/10 -z-0" />
          <div className="absolute top-10 -left-10 border border-gold w-full h-full -z-0" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gold uppercase tracking-widest text-xs font-bold mb-4 block">Warisan & Visi</span>
          <h2 className="serif text-5xl md:text-6xl text-navy mb-8 leading-tight">
            Dedikasi Tanpa Batas di <span className="italic">Kota Semarang</span>
          </h2>
          <p className="text-navy/70 leading-relaxed mb-8 text-lg">
            Berdiri di jantung kota Semarang, PT Samudera Kencana telah menjadi pilar utama dalam industri pelayaran Indonesia selama lebih dari dua dekade. Kami menggabungkan kearifan lokal dengan standar operasional global untuk menghadirkan solusi logistik maritim yang tak tertandingi.
          </p>
          <div className="grid grid-cols-2 gap-8 mb-10">
            <div>
              <h4 className="serif text-3xl text-gold mb-2">25+</h4>
              <p className="text-[10px] uppercase tracking-widest font-bold text-navy/50">Tahun Pengalaman</p>
            </div>
            <div>
              <h4 className="serif text-3xl text-gold mb-2">500+</h4>
              <p className="text-[10px] uppercase tracking-widest font-bold text-navy/50">Klien Global</p>
            </div>
          </div>
          <button className="flex items-center gap-4 text-navy font-bold uppercase text-xs tracking-widest group">
            Selengkapnya <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Freight Forwarding",
      desc: "Layanan pengiriman barang internasional dengan rute tercepat dan teraman.",
      icon: <Globe className="w-8 h-8" />,
    },
    {
      title: "Ship Agency",
      desc: "Manajemen keagenan kapal yang komprehensif di seluruh pelabuhan utama Indonesia.",
      icon: <Ship className="w-8 h-8" />,
    },
    {
      title: "Logistics Solution",
      desc: "Solusi rantai pasok terintegrasi mulai dari pergudangan hingga distribusi.",
      icon: <Award className="w-8 h-8" />,
    },
    {
      title: "Custom Clearance",
      desc: "Penanganan dokumen kepabeanan yang efisien untuk kelancaran bisnis Anda.",
      icon: <ShieldCheck className="w-8 h-8" />,
    }
  ];

  return (
    <section id="services" className="py-24 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold uppercase tracking-widest text-xs font-bold mb-4 block">Layanan Kami</span>
          <h2 className="serif text-5xl md:text-6xl mb-6">Solusi Maritim <span className="italic">Terintegrasi</span></h2>
          <div className="w-20 h-[1px] bg-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 border border-white/10 hover:border-gold/50 transition-all duration-500 group"
            >
              <div className="text-gold mb-8 group-hover:scale-110 transition-transform duration-500">
                {s.icon}
              </div>
              <h3 className="serif text-2xl mb-4">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {s.desc}
              </p>
              <div className="h-[1px] w-0 group-hover:w-full bg-gold transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Fleet = () => {
  return (
    <section id="fleet" className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-20 items-center">
        <div className="md:w-1/2">
          <span className="text-gold uppercase tracking-widest text-xs font-bold mb-4 block">Armada Kami</span>
          <h2 className="serif text-5xl md:text-6xl text-navy mb-8">Kekuatan di <span className="italic text-gold">Lautan Luas</span></h2>
          <p className="text-navy/70 mb-8 leading-relaxed">
            Kami mengoperasikan berbagai jenis kapal modern yang dirancang untuk efisiensi dan keamanan maksimal. Dari kapal kontainer hingga tanker, armada kami siap melayani kebutuhan logistik global Anda.
          </p>
          <ul className="space-y-4 mb-10">
            {['Kapal Kontainer Modern', 'Tanker Minyak & Gas', 'Kapal Kargo Curah', 'Kapal Tunda & Tongkang'].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-navy/80 font-medium">
                <div className="w-2 h-2 bg-gold rounded-full" />
                {item}
              </li>
            ))}
          </ul>
          <button className="bg-navy text-white px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-gold transition-colors">
            Lihat Spesifikasi
          </button>
        </div>
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2070&auto=format&fit=crop" alt="Fleet 1" className="w-full h-64 object-cover rounded-tl-[100px]" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=2067&auto=format&fit=crop" alt="Fleet 2" className="w-full h-80 object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="space-y-4 pt-12">
            <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop" alt="Fleet 3" className="w-full h-80 object-cover" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?q=80&w=2069&auto=format&fit=crop" alt="Fleet 4" className="w-full h-64 object-cover rounded-br-[100px]" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
        <div>
          <span className="text-gold uppercase tracking-widest text-xs font-bold mb-4 block">Hubungi Kami</span>
          <h2 className="serif text-5xl md:text-6xl text-navy mb-10">Mari <span className="italic">Berlayar</span> Bersama</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-paper flex items-center justify-center text-gold">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="serif text-xl text-navy mb-1">Kantor Pusat</h4>
                <p className="text-navy/60 text-sm">Jl. Pemuda No. 123, Kota Semarang,<br />Jawa Tengah, Indonesia 50132</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-paper flex items-center justify-center text-gold">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="serif text-xl text-navy mb-1">Telepon</h4>
                <p className="text-navy/60 text-sm">+62 (24) 1234 5678</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-paper flex items-center justify-center text-gold">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="serif text-xl text-navy mb-1">Email</h4>
                <p className="text-navy/60 text-sm">info@samuderakencana.com</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex gap-4">
            {[Instagram, Linkedin, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 border border-navy/10 flex items-center justify-center text-navy hover:bg-gold hover:text-white hover:border-gold transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="bg-paper p-10 shadow-sm">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-navy/40">Nama Lengkap</label>
                <input type="text" className="w-full bg-transparent border-b border-navy/10 py-2 focus:border-gold outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-navy/40">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-navy/10 py-2 focus:border-gold outline-none transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-navy/40">Subjek</label>
              <input type="text" className="w-full bg-transparent border-b border-navy/10 py-2 focus:border-gold outline-none transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-navy/40">Pesan</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-navy/10 py-2 focus:border-gold outline-none transition-colors resize-none"></textarea>
            </div>
            <button className="w-full bg-navy text-white py-4 text-xs uppercase tracking-widest font-bold hover:bg-gold transition-colors">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <Anchor className="w-8 h-8 text-gold" />
              <span className="serif text-3xl font-bold tracking-widest">
                SAMUDERA KENCANA
              </span>
            </div>
            <p className="text-white/40 max-w-md leading-relaxed mb-8">
              Menjadi mitra terpercaya dalam industri pelayaran global, memberikan solusi logistik yang efisien, aman, dan berkelas dari Semarang untuk dunia.
            </p>
          </div>
          <div>
            <h4 className="serif text-xl mb-6">Tautan Cepat</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-gold transition-colors">Beranda</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">Tentang Kami</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Layanan</a></li>
              <li><a href="#fleet" className="hover:text-gold transition-colors">Armada</a></li>
            </ul>
          </div>
          <div>
            <h4 className="serif text-xl mb-6">Informasi</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-gold transition-colors">Karir</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-white/30">
            © 2026 PT Samudera Kencana Semarang. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] uppercase tracking-widest text-white/30 flex items-center gap-2">
              <Clock className="w-3 h-3" /> 24/7 Support
            </span>
            <span className="text-[10px] uppercase tracking-widest text-white/30 flex items-center gap-2">
              <Users className="w-3 h-3" /> Global Network
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Fleet />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
