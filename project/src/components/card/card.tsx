import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type CardProps = {
  id: number;
  name: string;
  previewImage: string;
  onMouseOver?: (id: number | null) => void;
}

function Card({id, name, previewImage, onMouseOver}: CardProps): JSX.Element {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => onMouseOver && onMouseOver(id)}
    >
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={AppRoute.Film.replace(':id', id.toString())} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

export default Card;
