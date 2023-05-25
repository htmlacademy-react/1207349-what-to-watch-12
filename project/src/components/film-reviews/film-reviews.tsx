import { comments } from '../../mocks/comments';
import { format } from 'date-fns';

function FilmReviews(): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.map((item) => {
          const {id, comment, date, rating, user} = item;
          const dateObj = new Date(date);

          return (
            <div key={id} className="review">
              <blockquote className="review__quote">
                <p className="review__text">{comment}</p>
                <footer className="review__details">
                  <cite className="review__author">{user.name}</cite>
                  <time className="review__date" dateTime={format(dateObj, 'yyyy-MM-dd')}>
                    {format(dateObj, 'MMMM dd, yyyy')}
                  </time>
                </footer>
              </blockquote>
              <div className="review__rating">{rating}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FilmReviews;
