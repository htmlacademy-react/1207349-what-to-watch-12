export const CARD_DISPLAY_COUNT = 20;
export const RELATED_DISPLAY_COUNT = 4;
export const RATING_INPUT_COUNT = 10;

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
