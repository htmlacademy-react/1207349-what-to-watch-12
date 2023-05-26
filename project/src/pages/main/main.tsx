import { ALL_GENRES, CARD_DISPLAY_COUNT, GENRE_DISPLAY_COUNT } from '../../const';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Catalog from '../../components/catalog/catalog';
import Genres from '../../components/genres/genres';
import FilmInfo from '../../components/film-info/film-info';
import FilmPoster from '../../components/film-poster/film-poster';
import FilmBG from '../../components/film-bg/film-bg';
import { useAppSelector } from '../../hooks';
import MoreButton from '../../components/more-button/more-butten';
import { useState } from 'react';


function Main(): JSX.Element {
  const [showCount, setShowCount] = useState<number>(CARD_DISPLAY_COUNT);

  const films = useAppSelector((state) => state.films);
  const selectedGenre = useAppSelector((state) => state.genre);

  const genres = [ALL_GENRES, ...new Set(films.map((film) => film.genre))];

  const filmsByGenre = selectedGenre === ALL_GENRES ? films : films.filter((film) => film.genre === selectedGenre);

  const mainFilm = films[0];

  return (
    <>
      <section className="film-card">

        <FilmBG filmPoster={mainFilm.backgroundImage} filmName={mainFilm.name} />

        <h1 className="visually-hidden">WTW</h1>

        <Header className="film-card__head" isAuth />

        <div className="film-card__wrap">
          <div className="film-card__info">

            <FilmPoster filmPoster={mainFilm.posterImage} filmName={mainFilm.name} />

            <FilmInfo film={mainFilm} />

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <Genres genres={genres.slice(0, GENRE_DISPLAY_COUNT)} selectedGenre={selectedGenre} />

          <Catalog films={filmsByGenre.slice(0, showCount)} />

          {filmsByGenre.length > showCount && (
            <MoreButton showCount={showCount} setShowCount={setShowCount} />
          )}

        </section>

        <Footer />

      </div>
    </>
  );
}

export default Main;
