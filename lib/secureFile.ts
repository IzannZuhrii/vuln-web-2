import path from 'path';
import fs from 'fs';

/**
 * SECURE IMPLEMENTATION REFERENCE
 * Mitigation for Path Traversal Vulnerability
 * 
 * Secure file retrieval enforces:
 * 1. Fixed BASE_DIR resolution
 * 2. Absolute path checking via `path.resolve()`
 * 3. Validation that target path stays strictly inside BASE_DIR (`startsWith`)
 * 4. Extension allowlist checking
 */
export function getStudentPhotoSecure(fileParam: string): { success: boolean; filePath?: string; error?: string } {
  const BASE_DIR = path.resolve(process.cwd(), 'public', 'student-photos');
  
  // Sanitization: strip leading slashes or null bytes
  const sanitizedParam = (fileParam || '').replace(/[\0]/g, '').trim();
  
  // Resolve absolute target path
  const targetPath = path.resolve(BASE_DIR, sanitizedParam);
  
  // 1. Enforce directory boundary security check
  if (!targetPath.startsWith(BASE_DIR)) {
    return {
      success: false,
      error: 'Access denied: Target path traverses outside authorized photo directory.',
    };
  }
  
  // 2. File extension allowlist
  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.svg', '.webp'];
  const ext = path.extname(targetPath).toLowerCase();
  if (!allowedExtensions.includes(ext)) {
    return {
      success: false,
      error: 'Access denied: Invalid or unapproved file extension.',
    };
  }
  
  // 3. Verify file existence
  if (!fs.existsSync(targetPath)) {
    return {
      success: false,
      error: 'File not found.',
    };
  }
  
  return {
    success: true,
    filePath: targetPath,
  };
}
