import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

// INTENTIONALLY VULNERABLE FOR SECURITY PRACTICUM
// Vulnerability: Path Traversal
// User-controlled file path is not sufficiently validated.
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fileName = searchParams.get('file') || 'default.jpg';

  const BASE_DIR = path.join(process.cwd(), 'public', 'student-photos');

  // INTENTIONALLY VULNERABLE PATH CONCATENATION
  // Input parameter `fileName` is joined with BASE_DIR without sanitization or boundary verification.
  // Attackers can pass `../` sequences to read unauthorized files inside the project scope.
  const filePath = path.join(BASE_DIR, fileName);

  try {
    if (!fs.existsSync(filePath)) {
      return new NextResponse('File not found', { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);
    const ext = path.extname(filePath).toLowerCase();

    // Determine basic content type
    let contentType = 'application/octet-stream';
    if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
    else if (ext === '.png') contentType = 'image/png';
    else if (ext === '.svg') contentType = 'image/svg+xml';
    else if (ext === '.webp') contentType = 'image/webp';
    else if (ext === '.txt') contentType = 'text/plain; charset=utf-8';
    else if (ext === '.json') contentType = 'application/json';
    else if (ext === '.html') contentType = 'text/html';

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error: any) {
    return new NextResponse(`Error reading file: ${error.message}`, { status: 500 });
  }
}
