import { createAction } from '@reduxjs/toolkit';
import { Film, Films } from '../types/films';
import { AppRoute, AuthStatus } from '../const';
import { Reviews } from '../types/reviews';
import { UserData } from '../types/data';

export const changeGenre = createAction<string>('films/changeGenre');
export const loadFilms = createAction<Films>('data/loadFilms');
export const loadFilm = createAction<Film>('data/loadFilm');
export const loadFilmSimilar = createAction<Films>('data/loadFilmSimilar');
export const loadFilmReviews = createAction<Reviews>('data/loadFilmReviews');
export const loadUser = createAction<UserData | null>('data/loadUser');
export const publishFilmReview = createAction<Reviews>('data/publishFilmReview');
export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');
export const requireAuthorization = createAction<AuthStatus>('user/requireAuthorization');
export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
