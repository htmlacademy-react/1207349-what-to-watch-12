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

          <Header className="film-card__head" isAuth />

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

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="/" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="/" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="/" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">8,9</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">240 ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.</p>

                <p>Gustave prides himself on providing first-className service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

                <p className="film-card__director"><strong>Director: Wes Anderson</strong></p>

                <p className="film-card__starring"><strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other</strong></p>
              </div>
            </div>
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
