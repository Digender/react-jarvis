// src/Parent1.tsx
import React from 'react';
import Parent2 from './Parent2';

function Parent1() {
  return (
    <div>
      <h1>Parent 1</h1>
      <Parent2 />
    </div>
  );
}

export default Parent1;
