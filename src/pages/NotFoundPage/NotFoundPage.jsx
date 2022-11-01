import React from 'react';
import { Link } from 'react-router-dom';
import { NotFoundWrapper, NotfoundTitle, Button } from './NotFoundPage.styled';
import notfoundpage from 'images/notfoundpage.png';

export default function NotFoundPage() {
  return (
    <NotFoundWrapper>
      <div>
        <NotfoundTitle>404</NotfoundTitle>
        <NotfoundTitle>
          Сторінку не знайдено, cпробуйте головну сторінку{' '}
        </NotfoundTitle>
        <Button>
          <Link to="/">Home</Link>
        </Button>
      </div>

      <img src={notfoundpage} alt="" width="250" />
    </NotFoundWrapper>
  );
}
