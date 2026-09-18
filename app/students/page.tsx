'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ArrowRight, UserCheck, Loader2 } from 'lucide-react';

interface Student {
  id: number;
  full_name: string;
  nickname: string;
  class: string;
  major: string;
  bio: string;
  skills: string;
  hobbies: string;
  dream: string;
  photo: string;
}

export default function StudentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch initial student list
  useEffect(() => {
    fetchStudents('');
  }, []);

  const fetchStudents = async (query: string) => {
    setLoading(true);
    try {
      // Connects directly to student search API
      const endpoint = query.trim()
        ? `/api/students/search?q=${encodeURIComponent(query)}`
        : '/api/students';

      const res = await fetch(endpoint);
      if (res.ok) {
        const data = await res.json();
        setStudents(Array.isArray(data) ? data : []);
      } else {
        setStudents([]);
      }
    } catch (error) {
      console.error('Failed to fetch students:', error);
      setStudents([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchStudents(searchQuery);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full">
          Daftar Siswa Kelas
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
          Students of XI TKJ 3
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Kenali teman-teman dan potensi siswa XI TKJ 3. Cari berdasarkan nama, nama panggilan, atau keahlian utama.
        </p>
      </div>

      {/* SEARCH BAR */}
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSearchSubmit} className="flex gap-2 bg-white p-2 rounded-2xl shadow-lg border border-slate-200">
          <div className="relative flex-grow flex items-center">
            <Search className="w-5 h-5 text-slate-400 absolute left-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nama siswa..."
              className="w-full pl-10 pr-4 py-3 bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition flex items-center space-x-2 shrink-0"
          >
            <span>Search</span>
          </button>
        </form>
      </div>

      {/* STUDENT CARDS GRID */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="w-10 h-10 text-indigo-600 animate-spin mb-4" />
          <p className="text-sm font-semibold text-slate-500">Memuat data siswa XI TKJ 3...</p>
        </div>
      ) : students.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-lg mx-auto">
          <UserCheck className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-800">Siswa Tidak Ditemukan</h3>
          <p className="text-xs text-slate-500 mt-1">Coba kata kunci pencarian yang lain.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {students.map((student) => {
            const skillList = (student.skills || '')
              .split(',')
              .map((s) => s.trim())
              .slice(0, 3);

            return (
              <div
                key={student.id}
                className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl border border-slate-100 card-hover-effect flex flex-col justify-between"
              >
                <div>
                  <div className="relative mb-4">
                    <img
                      src={`/api/students/photo?file=${student.photo}`}
                      alt={student.full_name}
                      className="w-full h-48 rounded-xl object-cover border border-slate-100 bg-slate-100"
                    />
                    <span className="absolute bottom-2 left-2 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md">
                      {student.class || 'XI TKJ 3'}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2 py-0.5 rounded-md inline-block mb-1.5 truncate max-w-full">
                    {student.major}
                  </span>

                  <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-1">
                    {student.full_name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mb-3">
                    Panggilan: <span className="text-slate-800 font-semibold">{student.nickname}</span>
                  </p>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {student.bio ? student.bio.replace(/<[^>]*>?/gm, '') : '-'}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-5">
                    {skillList.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded"
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
          })}
        </div>
      )}
    </div>
  );
}
