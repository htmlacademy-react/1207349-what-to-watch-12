import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, loadFilms, requireAuthorization, setFilmsDataLoadingStatus } from './actions';
import { ALL_GENRES, AuthStatus } from '../const';
import { Films } from '../types/films';

type InitialState = {
  genre: string;
  films: Films;
  isFilmsDataLoading: boolean;
  authorizationStatus: AuthStatus;
}

const initialState:InitialState = {
  genre: ALL_GENRES,
  films: [],
  isFilmsDataLoading: false,
  authorizationStatus: AuthStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export default reducer;
