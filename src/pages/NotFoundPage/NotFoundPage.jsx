import React from 'react';
import { Link } from 'react-router-dom';
import notfoundpage from 'images/notfoundpage.png';

export default function NotFoundPage() {
  return (
    <div>
      <p>404</p>
      <p>Сторінку не знайдено </p>
      <p>Спробуйте головну сторінку</p>
      <img src={notfoundpage} alt="" width="250" />
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
}
