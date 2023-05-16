import { Films } from '../../types/films';
import Card from '../card/card';

type CatalogProps = {
  films: Films;
  onMouseOver?: (id: number | null) => void;
}

function Catalog({films, onMouseOver}: CatalogProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => <Card key={film.id} id={film.id} name={film.name} previewImage={film.previewImage} onMouseOver={onMouseOver} />)}
    </div>
  );
}

export default Catalog;
