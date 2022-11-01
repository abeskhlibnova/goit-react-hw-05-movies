import { IconContext } from 'react-icons';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';
import {
  SearchForm,
  SearchFormInput,
  SearchFormButton,
} from './SearchMovieForm.styled';

export default function SearchMovieForm({ onSubmit }) {
  return (
    <SearchForm onSubmit={onSubmit}>
      <SearchFormInput
        type="text"
        name="search"
        autoFocus
        placeholder="Search movies"
      />
      <SearchFormButton type="submit">
        <IconContext.Provider value={{ color: '#3f51b5', size: '20px' }}>
          <ImSearch />
        </IconContext.Provider>
      </SearchFormButton>
    </SearchForm>
  );
}

SearchMovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
