import React from 'react';
import { IconContext } from 'react-icons';
import { ImSearch } from 'react-icons/im';

export default function SearchMovieForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="search" autoFocus placeholder="Search movies" />
      <button type="submit">
        <IconContext.Provider value={{ color: '#3f51b5', size: '20px' }}>
          <ImSearch />
        </IconContext.Provider>
      </button>
    </form>
  );
}
