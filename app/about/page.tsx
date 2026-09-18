import Link from 'next/link';
import { ShieldCheck, Cpu, Server, Code2, GraduationCap, Award, Users, BookOpen, Layers } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* HEADER HERO */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full">
          Tentang Kelas Kami
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Profil Kelas XI TKJ 3
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Mengenal Visi, Misi, Fokus Pembelajaran, serta Struktur Portofolio Siswa XI TKJ 3 di SMK Telkom Malang.
        </p>
      </div>

      {/* OVERVIEW CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xl shadow-md">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Visi Keahlian</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Menjadi angkatan teknisi dan teknolog muda yang unggul di bidang Teknik Komputer dan Jaringan, siap bersaing di industri infrastruktur teknologi, cloud computing, serta keamanan sistem informasi secara profesional.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-md">
            <Award className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Misi Pembelajaran</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Mengembangkan penguasaan praktis pada konfigurasi perutean Cisco/MikroTik, administrasi server Linux, otomatisasi deployment, manajemen basis data relasional, serta analisis audit keamanan sistem berbasis kurikulum berbasis industri.
          </p>
        </div>
      </div>

      {/* SPECIALIZATION TRACKS */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900">Peminatan & Spesialisasi</h2>
          <p className="text-sm text-slate-500 mt-1">Empat pilar keahlian utama siswa XI TKJ 3</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Network & Systems</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Konfigurasi perutean OSPF/BGP, VLAN trunking, switching Cisco, dan manajemen MikroTik RouterOS.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Cyber Security</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Pengaturan firewall pfSense, pengawasan log SIEM, deteksi intrusi Snort, dan audit keamanan web.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Cloud & Linux</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Pengelolaan server Debian/Ubuntu, kontainer Docker, otomatisasi Ansible, dan virtualisasi Proxmox.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Web & Database</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Pengembangan antarmuka Next.js/React, perancangan skema relasional MariaDB, dan integrasi API.
            </p>
          </div>
        </div>
      </div>

      {/* CLASS LEADERSHIP & SUMMARY */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col sm:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Informasi Kelas</span>
          <h3 className="text-2xl font-bold mt-1">XI TKJ 3 — SMK Telkom Malang</h3>
          <p className="text-slate-400 text-sm mt-2 max-w-xl">
            Wali Kelas: Pak Ahmad S.T., M.Kom. | Ketua Kelas: Muhammad Hamizan Zuhri
          </p>
        </div>
        <Link
          href="/students"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition shadow-lg shrink-0"
        >
          Lihat Daftar Siswa
        </Link>
      </div>
    </div>
  );
}
