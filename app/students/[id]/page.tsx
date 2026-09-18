import Link from 'next/link';
import { getStudentById, Student } from '@/lib/students';
import { ArrowLeft, User, Sparkles, Target, Heart, Shield, Award, UserX } from 'lucide-react';
import CommentSection from './CommentSection';

import XSSContent from '@/components/XSSContent';

export default async function StudentProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const studentId = parseInt(params.id, 10);
  let student: Student | null = null;

  if (!isNaN(studentId)) {
    student = await getStudentById(studentId);
  }

  if (!student) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-4">
        <UserX className="w-16 h-16 text-slate-300 mx-auto" />
        <h1 className="text-2xl font-bold text-slate-800">Siswa Tidak Ditemukan</h1>
        <p className="text-sm text-slate-500">
          Data siswa XI TKJ 3 dengan ID tersebut tidak ditemukan dalam database.
        </p>
        <Link
          href="/students"
          className="inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm px-6 py-2.5 rounded-xl transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Daftar Siswa</span>
        </Link>
      </div>
    );
  }

  const skillsList = (student.skills || '').split(',').map((s) => s.trim());
  const hobbiesList = (student.hobbies || '').split(',').map((h) => h.trim());

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* NAVIGATION BACK */}
      <div>
        <Link
          href="/students"
          className="inline-flex items-center space-x-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 transition group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>← Back to Students</span>
        </Link>
      </div>

      {/* PROFILE HEADER CARD */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start">
        <div className="relative shrink-0">
          <img
            src={`/api/students/photo?file=${student.photo}`}
            alt={student.full_name}
            className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl object-cover border-4 border-indigo-50 shadow-md bg-slate-100"
          />
          <span className="absolute bottom-2 right-2 bg-indigo-600 text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow-sm">
            {student.class || 'XI TKJ 3'}
          </span>
        </div>

        <div className="space-y-3 text-center sm:text-left flex-grow">
          <div>
            <span className="inline-block bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              {student.major}
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {student.full_name}
            </h1>
            <p className="text-sm font-medium text-slate-500 mt-1">
              Nama Panggilan: <span className="text-slate-800 font-bold">{student.nickname}</span>
            </p>
          </div>

          <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-2">
            <div className="flex items-center space-x-1.5 bg-slate-100 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700">
              <Award className="w-4 h-4 text-indigo-600" />
              <span>SMK Telkom Malang</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-indigo-50 px-3 py-1.5 rounded-lg text-xs font-semibold text-indigo-700">
              <Shield className="w-4 h-4 text-indigo-600" />
              <span>Teknik Komputer & Jaringan</span>
            </div>
          </div>
        </div>
      </div>

      {/* DETAILS GRID: SKILLS, HOBBIES, DREAM */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* SKILLS */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 space-y-3">
          <div className="flex items-center space-x-2 text-indigo-600">
            <Sparkles className="w-5 h-5" />
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">SKILLS</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillsList.map((skill, i) => (
              <span
                key={i}
                className="bg-indigo-50 text-indigo-800 font-semibold text-xs px-3 py-1 rounded-lg border border-indigo-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* HOBBIES */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 space-y-3">
          <div className="flex items-center space-x-2 text-pink-600">
            <Heart className="w-5 h-5" />
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">HOBBIES</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {hobbiesList.map((hobby, i) => (
              <span
                key={i}
                className="bg-pink-50 text-pink-800 font-semibold text-xs px-3 py-1 rounded-lg border border-pink-100"
              >
                {hobby}
              </span>
            ))}
          </div>
        </div>

        {/* DREAM */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 space-y-3">
          <div className="flex items-center space-x-2 text-emerald-600">
            <Target className="w-5 h-5" />
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">DREAM</h3>
          </div>
          <p className="text-sm font-bold text-slate-800 bg-emerald-50 text-emerald-900 p-3 rounded-xl border border-emerald-100">
            {student.dream}
          </p>
        </div>
      </div>

      {/* ABOUT ME SECTION (STORED XSS VULNERABLE RENDERING) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 space-y-4">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center space-x-2">
          <User className="w-5 h-5 text-indigo-600" />
          <span>ABOUT ME</span>
        </h2>

        {/* 
          INTENTIONALLY VULNERABLE FOR SECURITY PRACTICUM
          Vulnerability: Stored XSS (Cross-Site Scripting)
          Database content (student.bio) is rendered via XSSContent wrapper to dynamically 
          evaluate both HTML element event handlers and embedded script tags.
        */}
        <XSSContent
          className="prose text-slate-700 text-sm leading-relaxed"
          content={student.bio}
        />
      </div>

      {/* STUDENT COMMENT SECTION (STORED XSS VULNERABLE FEATURE) */}
      <CommentSection studentId={studentId} />
    </div>
  );
}

