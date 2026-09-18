import { NextResponse } from 'next/server';
import { getAllStudents } from '@/lib/students';

export async function GET() {
  try {
    const students = await getAllStudents();
    return NextResponse.json(students);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
