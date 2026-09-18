'use client';

import React, { useState, useEffect } from 'react';
import { MessageSquare, Send, User, AlertTriangle, Clock, ShieldAlert } from 'lucide-react';
import { StudentComment } from '@/lib/comments';

interface CommentSectionProps {
  studentId: number;
}

export default function CommentSection({ studentId }: CommentSectionProps) {
  const [comments, setComments] = useState<StudentComment[]>([]);
  const [author, setAuthor] = useState('');
  const [commentText, setCommentText] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch comments on load
  useEffect(() => {
    async function loadComments() {
      try {
        setFetching(true);
        const res = await fetch(`/api/students/${studentId}/comments`);
        if (res.ok) {
          const data = await res.json();
          setComments(data);
        }
      } catch (err) {
        console.error('Failed loading comments:', err);
      } finally {
        setFetching(false);
      }
    }
    loadComments();
  }, [studentId]);

  // Handle comment submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) {
      setErrorMessage('Isi komentar tidak boleh kosong.');
      return;
    }

    setErrorMessage('');
    setLoading(true);

    try {
      const res = await fetch(`/api/students/${studentId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          author: author.trim() || 'Siswa XI TKJ 3',
          comment_text: commentText,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Gagal menambahkan komentar.');
      }

      const newComment = await res.json();
      setComments((prev) => [newComment, ...prev]);
      setCommentText('');
    } catch (err: any) {
      setErrorMessage(err.message || 'Terjadi kesalahan server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 space-y-6">
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Komentar & Pesan Kesan</h2>
            <p className="text-xs text-slate-500">Tinggalkan ucapan dan masukan untuk siswa ini</p>
          </div>
        </div>

        {/* SECURITY PRACTICUM BANNER */}
        <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl text-xs font-semibold text-amber-800">
          <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
          <span>Security Practicum: Stored XSS Enabled</span>
        </div>
      </div>

      {/* FORM ADD COMMENT */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
        <h3 className="text-sm font-bold text-slate-800">Tulis Komentar Baru</h3>

        {errorMessage && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 font-semibold flex items-center space-x-2">
            <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Nama / Panggilan</label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Contoh: Dewa XI TKJ 3"
                className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-800 placeholder-slate-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Pesan Komentar</label>
            <textarea
              rows={3}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Tuliskan komentar atau kata semangat di sini..."
              className="w-full px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-800 placeholder-slate-400 resize-none"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition shadow-md disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            <span>{loading ? 'Kirim...' : 'Kirim Komentar'}</span>
          </button>
        </div>
      </form>

      {/* COMMENTS LIST */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-800 flex items-center space-x-2">
          <span>Daftar Komentar ({comments.length})</span>
        </h3>

        {fetching ? (
          <div className="text-center py-6 text-xs text-slate-400">Memuat komentar...</div>
        ) : comments.length === 0 ? (
          <div className="text-center py-8 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200">
            <p className="text-xs text-slate-500 font-medium">Belum ada komentar. Jadilah yang pertama memberikan ucapan!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 bg-indigo-100 text-indigo-700 font-bold text-xs rounded-full flex items-center justify-center uppercase">
                      {comment.author.substring(0, 2)}
                    </div>
                    <span className="text-sm font-bold text-slate-800">{comment.author}</span>
                  </div>

                  <div className="flex items-center space-x-1 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{new Date(comment.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                </div>

import XSSContent from '@/components/XSSContent';

                {/* 
                  SECURITY PRACTICUM VULNERABILITY: Stored XSS (Cross-Site Scripting)
                  The comment text stored in database/memory is rendered directly into the DOM 
                  via XSSContent without HTML escaping or DOM sanitization.
                  This allows students to test XSS vectors (such as <script>, <img>, <iframe>, etc.).
                */}
                <XSSContent
                  className="text-sm text-slate-700 leading-relaxed pl-9 prose max-w-none"
                  content={comment.comment_text}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
