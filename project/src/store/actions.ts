import { createAction } from '@reduxjs/toolkit';
import { Films } from '../types/films';

export const changeGenre = createAction<string>('films/changeGenre');
export const loadFilms = createAction<Films>('data/loadFilms');
export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');
