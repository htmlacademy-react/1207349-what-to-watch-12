import { ALL_GENRES } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeGenre } from '../../store/actions';
import { Films } from '../../types/films';
import classNames from 'classnames';

type GenresProps = {
  films: Films;
  selectedGenre: string;
}

function Genres({films, selectedGenre}: GenresProps): JSX.Element {
  const genres = Array.from(new Set(films.map((film) => film.genre)));
  genres.unshift(ALL_GENRES);

  const dispatch = useAppDispatch();

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li key={genre} className={classNames('catalog__genres-item', {'catalog__genres-item--active': genre === selectedGenre})}>
          <a
            href="/"
            className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(changeGenre(genre));
            }}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Genres;
