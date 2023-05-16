import { ChangeEvent } from 'react';

type RatingInputProps = {
  count: number;
  currRating: number;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function RatingInput({count, currRating, onChange}: RatingInputProps): JSX.Element {
  return (
    <>
      <input
        onChange={onChange}
        className="rating__input"
        id={`star-${count}`}
        type="radio"
        name="rating"
        value={count}
        checked={count === Number(currRating)}
      />
      <label className="rating__label" htmlFor={`star-${count}`}>Rating {count}</label>
    </>
  );
}

export default RatingInput;
