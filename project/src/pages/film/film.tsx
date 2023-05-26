import { useParams } from 'react-router-dom';
import { films } from '../../mocks/films';
import NotFound from '../not-found/not-found';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FilmInfo from '../../components/film-info/film-info';
import Catalog from '../../components/catalog/catalog';
import { RELATED_DISPLAY_COUNT } from '../../const';
import FilmPoster from '../../components/film-poster/film-poster';
import FilmBG from '../../components/film-bg/film-bg';
import FilmTabs from '../../components/film-tabs/film-tabs';

function Film(): JSX.Element {
  const filmId = Number(useParams().id);
  const film = films.find((element) => element.id === filmId);

  if (film === undefined) {
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

            <FilmTabs film={film} />

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <Catalog films={films.slice(0, RELATED_DISPLAY_COUNT)} />

        </section>

        <Footer />

      </div>
    </>
  );
}

export default Film;
