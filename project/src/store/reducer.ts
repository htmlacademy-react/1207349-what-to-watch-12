import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, loadFilms, setFilmsDataLoadingStatus } from './actions';
import { films } from '../mocks/films';

const initialState = {
  genre: 'All genres',
  films: films,
  isFilmsDataLoading: false,
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
    });
});

export default reducer;
