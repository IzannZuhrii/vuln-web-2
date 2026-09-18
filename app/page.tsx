import Link from 'next/link';
import { getAllStudents, Student } from '@/lib/students';
import { ArrowRight, Server, ShieldCheck, Code, Cpu, Award, Users, BookOpen, CheckCircle2 } from 'lucide-react';

export default async function HomePage() {
  const students = await getAllStudents();
  // Display top 6 featured students
  const featuredStudents = students.slice(0, 6);

  return (
    <div className="space-y-20 pb-16">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden hero-gradient text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-indigo-100 text-xs sm:text-sm font-medium mb-6 border border-white/20">
            <Award className="w-4 h-4 text-indigo-300" />
            <span>SMK Telkom Malang — Portofolio Profil Siswa</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-4 drop-shadow-sm">
            XI TKJ 3
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-indigo-200 mb-6 tracking-wide">
            Student Profile & Class Portfolio
          </p>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-indigo-100 leading-relaxed mb-10">
            Mengenal lebih dekat siswa-siswa XI TKJ 3, keahlian, minat, dan potensi mereka dalam bidang Administrasi Jaringan, Cloud Infrastructure, Keamanan Sistem, dan Pengembangan Web.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/students"
              className="inline-flex items-center space-x-2 bg-white text-indigo-900 font-bold px-7 py-3.5 rounded-xl shadow-lg hover:bg-indigo-50 transition transform hover:-translate-y-0.5"
            >
              <span>Explore Students</span>
              <ArrowRight className="w-5 h-5 text-indigo-600" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 bg-indigo-800/60 hover:bg-indigo-800/80 text-white font-semibold px-7 py-3.5 rounded-xl border border-indigo-400/30 transition"
            >
              <span>Tentang Kelas</span>
            </Link>
          </div>
        </div>
      </section>

      {/* STATISTICS COUNTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">{students.length}</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Students</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Server className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">14</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Computer Network</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Code className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">10</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Programming</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">8</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Cyber Security</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED STUDENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full">
              Siswa Berbakat
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">Featured Students</h2>
            <p className="text-slate-600 text-sm mt-1">Beberapa talenta unggulan dari kelas XI TKJ 3</p>
          </div>
          <Link
            href="/students"
            className="inline-flex items-center space-x-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition"
          >
            <span>Lihat Semua 32 Siswa</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredStudents.map((student: Student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </section>

      {/* ABOUT OUR CLASS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 rounded-3xl text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/10">
                About Our Class
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 mb-6">
                Selamat Datang di XI TKJ 3 <br />
                <span className="text-indigo-300">SMK Telkom Malang</span>
              </h2>
              <p className="text-indigo-100 text-sm sm:text-base leading-relaxed mb-6">
                Kelas XI TKJ 3 merupakan salah satu rombel unggulan jurusan Teknik Komputer dan Jaringan di SMK Telkom Malang. Para siswa dilatih secara terstruktur untuk menguasai kompetensi infrastruktur jaringan modern, administrasi server Linux, cloud computing, keamanan informasi, serta pembuatan aplikasi web.
              </p>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-300 shrink-0 mt-0.5" />
                  <p className="text-sm text-indigo-100">Praktikum Laboratorium Jaringan Enterprise & Routing Protocol</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-300 shrink-0 mt-0.5" />
                  <p className="text-sm text-indigo-100">Eksperimen Sistem Operasi Server Linux, Docker & Virtualisasi Proxmox</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-300 shrink-0 mt-0.5" />
                  <p className="text-sm text-indigo-100">Pengembangan Antarmuka Web Interaktif & Manajemen Database MariaDB</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-indigo-300" />
                <span>Ringkasan Keahlian Kelas</span>
              </h3>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-indigo-200">Network Administration</span>
                  <span className="font-bold text-white">MikroTik, Cisco, OSPF</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-indigo-200">System & Cloud</span>
                  <span className="font-bold text-white">Debian, NGINX, Docker</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-indigo-200">Web & Database</span>
                  <span className="font-bold text-white">Next.js, MariaDB, React</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-200">Cyber Security</span>
                  <span className="font-bold text-white">Firewall, Audit & Forensics</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/students"
                  className="w-full inline-flex justify-center items-center space-x-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 rounded-xl transition"
                >
                  <span>Cari Profile Siswa</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StudentCard({ student }: { student: Student }) {
  const skillList = (student.skills || '').split(',').map(s => s.trim()).slice(0, 3);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-slate-100 card-hover-effect flex flex-col justify-between">
      <div>
        <div className="flex items-center space-x-4 mb-4">
          <img
            src={`/api/students/photo?file=${student.photo}`}
            alt={student.full_name}
            className="w-16 h-16 rounded-xl object-cover border-2 border-indigo-100 shadow-sm shrink-0"
          />
          <div className="min-w-0 flex-1">
            <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2.5 py-0.5 rounded-full inline-block mb-1 truncate max-w-full">
              {student.major}
            </span>
            <h3 className="font-bold text-slate-900 text-base leading-snug truncate">
              {student.full_name}
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Panggilan: <span className="text-slate-700 font-semibold">{student.nickname}</span>
            </p>
          </div>
        </div>

        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
          {student.bio.replace(/<[^>]*>?/gm, '')}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {skillList.map((skill, i) => (
            <span
              key={i}
              className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <Link
        href={`/students/${student.id}`}
        className="w-full inline-flex justify-center items-center space-x-1.5 bg-slate-50 hover:bg-indigo-600 text-slate-700 hover:text-white font-semibold text-xs py-2.5 rounded-xl border border-slate-200 hover:border-indigo-600 transition"
      >
        <span>Lihat Profil</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}
