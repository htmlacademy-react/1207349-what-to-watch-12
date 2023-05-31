import { useParams } from 'react-router-dom';
import NotFound from '../not-found/not-found';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FilmInfo from '../../components/film-info/film-info';
import Catalog from '../../components/catalog/catalog';
import { RELATED_DISPLAY_COUNT } from '../../const';
import FilmPoster from '../../components/film-poster/film-poster';
import FilmBG from '../../components/film-bg/film-bg';
import FilmTabs from '../../components/film-tabs/film-tabs';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilmAction, fetchFilmReviewsAction, fetchSimilarFilmAction } from '../../store/api-actions';
import { useEffect } from 'react';
import { getFilm, getFilmReviews, getSimilarFilm } from '../../store/films-data/selectors';

function Film(): JSX.Element {
  const dispatch = useAppDispatch();

  const filmId = Number(useParams().id);

  useEffect(() => {
    dispatch(fetchFilmAction(filmId));
    dispatch(fetchSimilarFilmAction(filmId));
    dispatch(fetchFilmReviewsAction(filmId));
  }, [dispatch, filmId]);

  const film = useAppSelector(getFilm);
  const similarFilm = useAppSelector(getSimilarFilm);
  const filmReviews = useAppSelector(getFilmReviews);

  if (film === null) {
    return <NotFound />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">

          <FilmBG filmPoster={film.backgroundImage} filmName={film.name} />

          <h1 className="visually-hidden">WTW</h1>

          <Header className="film-card__head" />

          <div className="film-card__wrap">
            <FilmInfo film={film} />
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">

            <FilmPoster
              filmPoster={film.posterImage}
              filmName={film.name}
              className='film-card__poster--big'
            />

            <FilmTabs film={film} reviews={filmReviews} />

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <Catalog films={similarFilm.slice(0, RELATED_DISPLAY_COUNT)} />

        </section>

        <Footer />

      </div>
    </>
  );
}

export default Film;
