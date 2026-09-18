import { getDbPool } from './db';

export interface StudentComment {
  id: number;
  student_id: number;
  author: string;
  comment_text: string;
  created_at: string;
}

// In-memory fallback mock dataset for comments
const MOCK_COMMENTS: StudentComment[] = [
  {
    id: 1,
    student_id: 1,
    author: 'Adinda',
    comment_text: 'Semangat terus bro Badsah di lab MikroTik!',
    created_at: new Date(Date.now() - 3600000 * 2).toISOString(),
  },
  {
    id: 2,
    student_id: 1,
    author: 'Gusti',
    comment_text: 'Routing OSPF-nya mantap sekali. <script>console.log("Comment Stored XSS Demo Payload Executed!");</script><span style="color: #4f46e5; font-weight: bold;">Verified Lab Comment</span>',
    created_at: new Date(Date.now() - 3600000).toISOString(),
  },
];

let nextCommentId = 3;

/**
  Fetch all comments for a specific student ID
 */
export async function getCommentsByStudentId(studentId: number): Promise<StudentComment[]> {
  try {
    const pool = getDbPool();
    const [rows] = await pool.execute(
      'SELECT * FROM comments WHERE student_id = ? ORDER BY created_at DESC',
      [studentId]
    );
    return rows as StudentComment[];
  } catch (error) {
    console.warn('[DB WARNING] MariaDB offline. Using fallback memory comment dataset.');
    return MOCK_COMMENTS.filter((c) => c.student_id === studentId).sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }
}

/**
  Add a new comment for a student
  Note: Comment text is stored raw without HTML sanitization for security practicum testing.
 */
export async function addComment(
  studentId: number,
  author: string,
  commentText: string
): Promise<StudentComment> {
  const authorName = author.trim() || 'Anonim XI TKJ 3';
  const text = commentText.trim();

  try {
    const pool = getDbPool();
    const [result]: any = await pool.execute(
      'INSERT INTO comments (student_id, author, comment_text) VALUES (?, ?, ?)',
      [studentId, authorName, text]
    );
    return {
      id: result.insertId,
      student_id: studentId,
      author: authorName,
      comment_text: text,
      created_at: new Date().toISOString(),
    };
  } catch (error) {
    console.warn('[DB WARNING] MariaDB offline. Saving comment into in-memory store.');
    const newComment: StudentComment = {
      id: nextCommentId++,
      student_id: studentId,
      author: authorName,
      comment_text: text,
      created_at: new Date().toISOString(),
    };
    MOCK_COMMENTS.unshift(newComment);
    return newComment;
  }
}
