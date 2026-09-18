/**
 * SECURE IMPLEMENTATION REFERENCE
 * Mitigation for Stored XSS (Cross-Site Scripting) Vulnerability
 * 
 * To mitigate Stored XSS vulnerabilities when displaying user input:
 * 1. Default to standard React JSX data binding (`{content}`), which automatically escapes HTML entities.
 * 2. If rich text or HTML markup is required, sanitize user inputs using HTML entity encoding
 *    or a trusted HTML sanitizer library before storing/rendering (e.g. DOMPurify or sanitize-html).
 */

/**
 * Escapes unsafe HTML characters into safe HTML entities.
 */
export function escapeHTML(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Example secure rendering function for student comments or bio.
 */
export function renderSecureCommentText(rawComment: string): string {
  // Option A: Full HTML escaping (strips all tag formatting safely)
  return escapeHTML(rawComment);
}
