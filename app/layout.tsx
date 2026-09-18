import Link from 'next/link';
import './globals.css';
import { Network, Users, Info, Menu, X, GraduationCap, ShieldCheck } from 'lucide-react';
import React from 'react';

export const metadata = {
  title: 'XI TKJ 3 — Student Profile & Class Portfolio | SMK Telkom Malang',
  description: 'Mengenal lebih dekat siswa-siswa XI TKJ 3 SMK Telkom Malang, keahlian, minat, dan potensi mereka.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-800 min-h-screen flex flex-col font-sans">
        <NavigationHeader />
        <main className="flex-grow">{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}

function NavigationHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-200 group-hover:bg-indigo-700 transition">
              <span className="font-bold text-lg tracking-wider">TKJ</span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-lg text-slate-900 tracking-tight">XI TKJ 3</span>
                <span className="bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Official</span>
              </div>
              <p className="text-xs text-slate-500 font-medium">SMK Telkom Malang</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-indigo-600 hover:bg-slate-100 transition"
            >
              Home
            </Link>
            <Link
              href="/students"
              className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-indigo-600 hover:bg-slate-100 transition"
            >
              Students
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-indigo-600 hover:bg-slate-100 transition"
            >
              About
            </Link>
          </nav>

          {/* Mobile Menu */}
          <MobileNavMenu />
        </div>
      </div>
    </header>
  );
}

function MobileNavMenu() {
  return (
    <div className="md:hidden flex items-center">
      <details className="group relative">
        <summary className="list-none p-2 rounded-lg text-slate-600 hover:text-indigo-600 hover:bg-slate-100 cursor-pointer">
          <Menu className="w-6 h-6 group-open:hidden" />
          <X className="w-6 h-6 hidden group-open:block" />
        </summary>
        <div className="absolute right-0 top-12 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50">
          <Link
            href="/"
            className="block px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"
          >
            Home
          </Link>
          <Link
            href="/students"
            className="block px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"
          >
            Students
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"
          >
            About
          </Link>
        </div>
      </details>
    </div>
  );
}

function FooterSection() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                TKJ
              </div>
              <h3 className="text-white font-bold text-lg">XI TKJ 3</h3>
            </div>
            <p className="text-sm text-slate-400 mb-2">Student Profile & Class Portfolio</p>
            <p className="text-sm text-indigo-400 font-semibold">SMK Telkom Malang</p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link href="/students" className="hover:text-white transition">Students Directory</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">About Class</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Konsentrasi Keahlian</h4>
            <ul className="space-y-1 text-sm text-slate-400">
              <li>• Network & System Administration</li>
              <li>• Cyber Security & Ethical Hacking</li>
              <li>• Cloud Infrastructure & DevOps</li>
              <li>• Web Development & Database Systems</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} XI TKJ 3 — SMK Telkom Malang. All rights reserved.</p>
          <p className="text-slate-600 font-mono text-[11px]">Teknik Komputer dan Jaringan</p>
        </div>
      </div>
    </footer>
  );
}
