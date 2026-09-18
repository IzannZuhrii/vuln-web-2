import { NextResponse } from 'next/server';
import { getDbPool, MOCK_STUDENTS } from '@/lib/db';
import { Student } from '@/lib/students';

// INTENTIONALLY VULNERABLE FOR SECURITY PRACTICUM
// Vulnerability: SQL Injection
// This endpoint intentionally demonstrates unsafe SQL query construction using string concatenation.
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') || '';

  try {
    const pool = getDbPool();

    // INTENTIONALLY VULNERABLE SQL QUERY CONSTRUCTION
    // User query parameter `q` is directly concatenated into the SQL statement without parameterization or escaping.
    const sqlQuery = `SELECT * FROM students WHERE full_name LIKE '%${q}%' OR nickname LIKE '%${q}%' OR major LIKE '%${q}%' ORDER BY id ASC`;
    
    // Executing raw query string
    const [rows] = await pool.query(sqlQuery);
    return NextResponse.json(rows as Student[]);
  } catch (error: any) {
    // If MariaDB connection fails or is offline, perform fall-back search for standard queries
    console.warn('[DB WARNING] MariaDB search failed or offline:', error?.message);
    const queryLower = q.toLowerCase();
    const filtered = MOCK_STUDENTS.filter(s => 
      s.full_name.toLowerCase().includes(queryLower) ||
      s.nickname.toLowerCase().includes(queryLower) ||
      s.major.toLowerCase().includes(queryLower)
    );
    return NextResponse.json(filtered as Student[]);
  }
}
