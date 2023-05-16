import FilmBG from '../../components/film-bg/film-bg';
import FilmPoster from '../../components/film-poster/film-poster';
import Header from '../../components/header/header';
import ReviewForm from '../../components/review-form/review-form';
import { films } from '../../mocks/films';

function Review(): JSX.Element {
  const mainFilm = films[0];

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <FilmBG filmPoster={mainFilm.backgroundImage} filmName={mainFilm.name} />

        <h1 className="visually-hidden">WTW</h1>

        <Header isAuth addBreadCrumb />

        <FilmPoster
          filmPoster={mainFilm.posterImage}
          filmName={mainFilm.name}
          className='film-card__poster--small'
        />
      </div>

      <div className="add-review">
        <ReviewForm />
      </div>

    </section>
  );
}

export default Review;
