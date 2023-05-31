import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { loadFilm, loadFilmComments, loadFilmSimilar, loadFilms, redirectToRoute, requireAuthorization, setFilmsDataLoadingStatus } from './actions';
import { APIRoute, AppRoute, AuthStatus } from '../const';
import { Film, Films } from '../types/films';
import { AuthData, UserData } from '../types/data';
import { saveToken } from '../services/token';
import { Comments } from '../types/comments.js';

function createAsyncThunkTeamplate<ThunkArg = undefined>() {
  return createAsyncThunk<void, ThunkArg, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>;
}

export const fetchFilmsAction = createAsyncThunkTeamplate()(
  'data/loadFilms',
  async (_, {dispatch, extra: api}) => {
    dispatch(setFilmsDataLoadingStatus(true));
    const {data} = await api.get<Films>(APIRoute.Films);
    dispatch(setFilmsDataLoadingStatus(false));
    dispatch(loadFilms(data));
  },
);

export const fetchFilmAction = createAsyncThunkTeamplate<number>()(
  'data/loadFilm',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(APIRoute.Film.replace('{filmId}', filmId.toString()));
    dispatch(loadFilm(data));
  },
);

export const fetchFilmSimilarAction = createAsyncThunkTeamplate<number>()(
  'data/loadFilmSimilar',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.FilmSimilar.replace('{filmId}', filmId.toString()));
    dispatch(loadFilmSimilar(data));
  },
);

export const fetchFilmCommentsAction = createAsyncThunkTeamplate<number>()(
  'data/loadFilmComments',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<Comments>(APIRoute.Comments.replace('{filmId}', filmId.toString()));
    dispatch(loadFilmComments(data));
  },
);

export const checkAuthAction = createAsyncThunkTeamplate()(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunkTeamplate<AuthData>()(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    // dispatch(loadUser(data));
    dispatch(requireAuthorization(AuthStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);
