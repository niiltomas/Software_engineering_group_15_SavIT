import React from 'react';

export default function Button({ variant, children, onClick }) {
  const base = 'button';
  return (
    <button className={`${base} ${base}--${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}