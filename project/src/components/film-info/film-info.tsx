import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Film } from '../../types/films';
import { AppRoute, AuthStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/user-process/selectors';
import { getFavoriteFilms } from '../../store/films-data/selectors';
import { changeFavoriteFilmStatusAction } from '../../store/api-actions';

type FilmInfoProps = {
  film: Film;
}

function FilmInfo({film}: FilmInfoProps): JSX.Element {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAuth = useAppSelector(getAuthStatus) === AuthStatus.Auth;

  const isFilmPage = AppRoute.Film.replace(':id', film.id.toString()) === location.pathname;

  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const isFavorite = favoriteFilms.some((element) => element.id === film.id);

  const handleMyListClick = () => {
    if (isAuth) {
      dispatch(changeFavoriteFilmStatusAction({
        filmId: film.id,
        status: Number(!isFavorite),
      }));
    } else {
      navigate(AppRoute.SignIn);
    }
  };

  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">{film.name}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{film.genre}</span>
        <span className="film-card__year">{film.released}</span>
      </p>
      <div className="film-card__buttons">
        <Link to={AppRoute.Player.replace(':id', film.id.toString())} className="btn btn--play film-card__button" type="button">
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </Link>
        <button className="btn btn--list film-card__button" type="button" onClick={handleMyListClick}>
          {isFavorite ?
            <svg viewBox="0 0 18 14" width="18" height="14">
              <use xlinkHref="#in-list"></use>
            </svg> :
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add"></use>
            </svg>}
          <span>My list</span>
          {favoriteFilms.length > 0 && <span className="film-card__count">{favoriteFilms.length}</span>}
        </button>
        {isFilmPage && isAuth &&
          <Link
            to={AppRoute.AddReview.replace(':id', film.id.toString())}
            className="btn film-card__button"
          >
            Add review
          </Link>}
      </div>
    </div>
  );
}

export default FilmInfo;
