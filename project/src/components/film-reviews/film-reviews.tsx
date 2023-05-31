import { Comments } from '../../types/comments';
import Review from '../review/review';

type FilmReviewsProps = {
  comments: Comments;
}

function FilmReviews({comments}: FilmReviewsProps): JSX.Element {
  const indexToSplit = Math.ceil(comments.length / 2);
  const firstColComments = comments.slice(0, indexToSplit);
  const secondColComments = comments.slice(indexToSplit);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {firstColComments.map((item) => <Review key={item.id} review={item} />)}
      </div>
      <div className="film-card__reviews-col">
        {secondColComments.map((item) => <Review key={item.id} review={item} />)}
      </div>
    </div>
  );
}

export default FilmReviews;
