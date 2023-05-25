import { ALL_GENRES, CARD_DISPLAY_COUNT } from '../../const';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Catalog from '../../components/catalog/catalog';
import Genres from '../../components/genres/genres';
import FilmInfo from '../../components/film-info/film-info';
import FilmPoster from '../../components/film-poster/film-poster';
import FilmBG from '../../components/film-bg/film-bg';
import { useAppSelector } from '../../hooks';


function Main(): JSX.Element {
  const films = useAppSelector((state) => state.films);
  const genre = useAppSelector((state) => state.genre);

  const filmsByGenre = genre === ALL_GENRES ? films : films.filter((film) => film.genre === genre);

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

          <Genres films={films} selectedGenre={genre} />

          <Catalog films={filmsByGenre.slice(0, CARD_DISPLAY_COUNT)} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />

      </div>
    </>
  );
}

export default Main;
