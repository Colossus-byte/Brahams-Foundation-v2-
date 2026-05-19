'use client';

import { useState, useEffect } from 'react';

export default function ObfuscatedEmail({ className, style, linkStyle }) {
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Split so the address never appears as a literal string in static HTML
    setEmail('brahamsfoundation2' + '@' + 'gmail' + '.com');
  }, []);

  return (
    <a
      href={email ? 'mailto:' + email : '#'}
      className={className}
      style={linkStyle}
    >
      {email || ' '}
    </a>
  );
}
