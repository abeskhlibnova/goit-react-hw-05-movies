import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      <p>404</p>
      <p>Сторінку не знайдено </p>
      <p>Спробуйте головну сторінку</p>
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
}
