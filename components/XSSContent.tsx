'use client';

import React, { useEffect, useRef } from 'react';

interface XSSContentProps {
  content: string;
  className?: string;
}

/**
 * XSS Content Rendering Component for Security Practicum
 * 
 * Standard React `dangerouslySetInnerHTML` uses `element.innerHTML`, 
 * which by browser specification does NOT execute `<script>` tags inserted dynamically.
 * 
 * This component intentionally extracts and executes `<script>` tags in addition to 
 * letting browser inline event handlers (e.g. `onerror`, `onload`, `onclick`) run,
 * enabling full Stored XSS exploitation testing for educational auditing.
 */
export default function XSSContent({ content, className }: XSSContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Find all <script> elements inside the rendered HTML container
    const scriptElements = containerRef.current.querySelectorAll('script');

    scriptElements.forEach((oldScript) => {
      // Create a fresh <script> node to bypass browser innerHTML script execution restrictions
      const newScript = document.createElement('script');

      // Copy attributes (src, type, async, etc.)
      Array.from(oldScript.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value);
      });

      // Copy inner script content
      newScript.textContent = oldScript.textContent;

      // Replace non-executing script node with the executable script node
      if (oldScript.parentNode) {
        oldScript.parentNode.replaceChild(newScript, oldScript);
      }
    });
  }, [content]);

  return (
    <div
      ref={containerRef}
      className={className}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
