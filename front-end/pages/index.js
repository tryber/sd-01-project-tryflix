import React from 'react';
import Link from 'next/link';

const App = () => {
  return (
    <div>
      <Link href='/series'>series</Link>
      <Link href='/favoritos'>favoritos</Link>
    </div>
  );
};

export default App;
