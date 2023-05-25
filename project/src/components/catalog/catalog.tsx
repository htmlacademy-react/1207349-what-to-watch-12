import { Films } from '../../types/films';
import Card from '../card/card';

type CatalogProps = {
  films: Films;
}

function Catalog({films}: CatalogProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <Card
          key={film.id}
          id={film.id}
          name={film.name}
          previewImage={film.previewImage}
          previewVideoLink={film.previewVideoLink}
        />
      ))}
    </div>
  );
}

export default Catalog;
