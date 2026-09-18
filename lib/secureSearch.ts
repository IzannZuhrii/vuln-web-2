import { getDbPool, MOCK_STUDENTS } from './db';
import { Student } from './students';

/**
 * SECURE IMPLEMENTATION REFERENCE
 * Mitigation for SQL Injection Vulnerability
 * 
 * Instead of string concatenation like:
 * `SELECT * FROM students WHERE full_name LIKE '%${q}%'`
 * 
 * Secure implementation uses Parameterized Queries / Prepared Statements (`?` placeholder).
 */
export async function searchStudentsSecure(q: string): Promise<Student[]> {
  try {
    const pool = getDbPool();
    const searchTerm = `%${q}%`;
    
    // Parameterized query prevents SQL syntax injection by treating user input strictly as data
    const query = `
      SELECT * FROM students 
      WHERE full_name LIKE ? 
         OR nickname LIKE ? 
         OR major LIKE ? 
      ORDER BY id ASC
    `;
    
    const [rows] = await pool.execute(query, [searchTerm, searchTerm, searchTerm]);
    return rows as Student[];
  } catch (error) {
    console.warn('[DB WARNING] MariaDB offline. Performing safe in-memory search filter.');
    const queryLower = q.toLowerCase();
    return MOCK_STUDENTS.filter(s => 
      s.full_name.toLowerCase().includes(queryLower) ||
      s.nickname.toLowerCase().includes(queryLower) ||
      s.major.toLowerCase().includes(queryLower)
    ) as Student[];
  }
}
