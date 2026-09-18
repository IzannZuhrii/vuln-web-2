import { getDbPool, MOCK_STUDENTS } from './db';

export interface Student {
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
  created_at?: string;
}

// Fetch all students safely
export async function getAllStudents(): Promise<Student[]> {
  try {
    const pool = getDbPool();
    const [rows] = await pool.query('SELECT * FROM students ORDER BY id ASC');
    return rows as Student[];
  } catch (error) {
    console.warn('[DB WARNING] MariaDB connection failed or offline. Using fallback memory student data.');
    return MOCK_STUDENTS as Student[];
  }
}

// Securely fetch a single student by ID using parameterized query
export async function getStudentById(id: number): Promise<Student | null> {
  try {
    const pool = getDbPool();
    // Prepared / Parameterized statement for safe query
    const [rows] = await pool.execute('SELECT * FROM students WHERE id = ? LIMIT 1', [id]);
    const studentList = rows as Student[];
    return studentList.length > 0 ? studentList[0] : null;
  } catch (error) {
    console.warn('[DB WARNING] MariaDB offline. Searching fallback memory student data by ID.');
    const found = MOCK_STUDENTS.find(s => s.id === Number(id));
    return found ? (found as Student) : null;
  }
}
