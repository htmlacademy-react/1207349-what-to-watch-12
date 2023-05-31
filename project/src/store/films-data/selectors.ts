import { NameSpace, RequestStatus } from '../../const';
import { Film, Films } from '../../types/films';
import { Reviews } from '../../types/reviews';
import { State } from '../../types/state';

export const getFilms = (state: State): Films => state[NameSpace.Data].films;
export const getFilm = (state: State): Film | null => state[NameSpace.Data].film;
export const getPromoFilm = (state: State): Film | null => state[NameSpace.Data].promoFilm;
export const getSimilarFilm = (state: State): Films => state[NameSpace.Data].similarFilms;
export const getFilmReviews = (state: State): Reviews => state[NameSpace.Data].filmReviews;
export const getFilmsDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isFilmsDataLoading;
export const getReviewsPublishStatus = (state: State): RequestStatus => state[NameSpace.Data].reviewsPublishStatus;
