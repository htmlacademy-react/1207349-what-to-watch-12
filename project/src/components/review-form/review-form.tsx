import { useState, ChangeEvent, FormEvent } from 'react';
import RatingInput from '../rating-input/rating-input';
import { RATING_INPUT_COUNT } from '../../const';
import { publishFilmReviewAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';

type ReviewFormProps = {
  filmId: number;
}

function ReviewForm({filmId}: ReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    rating: 0,
    comment: '',
    filmId: filmId,
  });

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(publishFilmReviewAction(formData));
    setFormData({
      rating: 0,
      comment: '',
      filmId: filmId,
    });
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {[...Array(RATING_INPUT_COUNT).keys()].map((title, i, arr) => (
            <RatingInput
              key={title}
              count={arr.length - i}
              currRating={formData.rating}
              onChange={handleInputChange}
            />
          ))}
        </div>
      </div>
      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="comment"
          id="comment"
          placeholder="Review text"
          value={formData.comment}
          onChange={handleInputChange}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
