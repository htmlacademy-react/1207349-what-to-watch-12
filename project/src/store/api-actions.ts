import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { loadFilm, loadFilmReviews, loadFilmSimilar, loadFilms, loadUser, publishFilmReview, redirectToRoute, requireAuthorization, setFilmsDataLoadingStatus } from './actions';
import { APIRoute, AppRoute, AuthStatus } from '../const';
import { Film, Films } from '../types/films';
import { AuthData, ReviewData, UserData } from '../types/data';
import { dropToken, saveToken } from '../services/token';
import { Reviews } from '../types/reviews.js';

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

export const fetchFilmReviewsAction = createAsyncThunkTeamplate<number>()(
  'data/loadFilmReviews',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<Reviews>(APIRoute.Reviews.replace('{filmId}', filmId.toString()));
    dispatch(loadFilmReviews(data));
  },
);

export const publishFilmReviewAction = createAsyncThunkTeamplate<ReviewData>()(
  'data/publishFilmReview',
  async ({rating, comment, filmId}, {dispatch, extra: api}) => {
    const {data} = await api.post<Reviews>(APIRoute.Reviews.replace('{filmId}', filmId.toString()), {rating, comment});
    dispatch(publishFilmReview(data));
  },
);

export const checkAuthAction = createAsyncThunkTeamplate()(
  'user/checkAuth',
  async (_, {dispatch, extra: api}) => {
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
    dispatch(loadUser(data));
    dispatch(requireAuthorization(AuthStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunkTeamplate()(
  'user/logout',
  async (_, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(loadUser(null));
    dispatch(requireAuthorization(AuthStatus.NoAuth));
    dispatch(redirectToRoute(AppRoute.SignIn));
  },
);
