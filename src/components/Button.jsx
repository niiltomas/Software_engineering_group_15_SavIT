import React from 'react';

export default function Button({ variant, children }) {
  const base = 'button';
  return (
    <button className={`${base} ${base}--${variant}`}>{children}</button>
  );
}