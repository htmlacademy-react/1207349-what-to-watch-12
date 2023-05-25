export function getTextByRating(rating: number) {
  switch (true) {
    case rating >= 0 && rating < 3:
      return 'Bad';
    case rating < 5:
      return 'Normal';
    case rating < 8:
      return 'Good';
    case rating < 10:
      return 'Very good';
    case rating === 10:
      return 'Awesome';
    default:
      return '';
  }
}
