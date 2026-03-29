import * as React from 'react';

export function PostLayout({ title, children }) {
  return (
    <main>
      <h1>{title}</h1>
      {children}
    </main>
  );
}
