import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, loadFilm, loadFilmComments, loadFilmSimilar, loadFilms, loadUser, requireAuthorization, setFilmsDataLoadingStatus } from './actions';
import { ALL_GENRES, AuthStatus } from '../const';
import { Film, Films } from '../types/films';
import { Comments } from '../types/comments';
import { UserData } from '../types/data';

type InitialState = {
  genre: string;
  films: Films;
  film: Film | null;
  filmSimilar: Films;
  filmComments: Comments;
  user: UserData | null;
  isFilmsDataLoading: boolean;
  authorizationStatus: AuthStatus;
}

const initialState:InitialState = {
  genre: ALL_GENRES,
  films: [],
  film: null,
  filmSimilar: [],
  filmComments: [],
  user: null,
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
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(loadFilmSimilar, (state, action) => {
      state.filmSimilar = action.payload;
    })
    .addCase(loadFilmComments, (state, action) => {
      state.filmComments = action.payload;
    })
    .addCase(loadUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export default reducer;
