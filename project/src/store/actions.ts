import { createAction } from '@reduxjs/toolkit';
import { Films } from '../types/films';
import { AppRoute, AuthStatus } from '../const';

export const changeGenre = createAction<string>('films/changeGenre');
export const loadFilms = createAction<Films>('data/loadFilms');
export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');
export const requireAuthorization = createAction<AuthStatus>('user/requireAuthorization');
export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
