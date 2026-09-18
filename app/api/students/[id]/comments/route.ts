import { NextResponse } from 'next/server';
import { getCommentsByStudentId, addComment } from '@/lib/comments';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const studentId = parseInt(params.id, 10);
    if (isNaN(studentId)) {
      return NextResponse.json({ error: 'ID siswa tidak valid.' }, { status: 400 });
    }

    const comments = await getCommentsByStudentId(studentId);
    return NextResponse.json(comments);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const studentId = parseInt(params.id, 10);
    if (isNaN(studentId)) {
      return NextResponse.json({ error: 'ID siswa tidak valid.' }, { status: 400 });
    }

    const body = await request.json();
    const { author, comment_text } = body;

    if (!comment_text || typeof comment_text !== 'string' || comment_text.trim() === '') {
      return NextResponse.json({ error: 'Isi komentar tidak boleh kosong.' }, { status: 400 });
    }

    /* 
      SECURITY PRACTICUM NOTE:
      Unsanitized Input Processing (Stored XSS Root Cause)
      `comment_text` is stored directly into database without HTML escaping or sanitization.
      When subsequently rendered via `dangerouslySetInnerHTML` on the frontend, standard HTML tags/scripts can execute.
    */
    const newComment = await addComment(studentId, author || 'Anonim XI TKJ 3', comment_text);

    return NextResponse.json(newComment, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
