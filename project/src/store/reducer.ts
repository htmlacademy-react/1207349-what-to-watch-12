import { createReducer } from '@reduxjs/toolkit';
import { changeGenre } from './actions';
import { films } from '../mocks/films';

const initialState = {
  genre: 'All genres',
  films: films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    });
});

export default reducer;
