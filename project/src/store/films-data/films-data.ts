import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { FilmsData } from '../../types/state';
import { fetchFilmReviewsAction, fetchSimilarFilmsAction, fetchFilmsAction, publishFilmReviewAction, fetchFilmAction, fetchPromoFilmAction, fetchFavoriteFilmsAction } from '../api-actions';

const initialState: FilmsData = {
  films: [],
  film: null,
  promoFilm: null,
  similarFilms: [],
  favoriteFilms: [],
  filmReviews: [],
  isFilmsDataLoading: false,
  reviewsPublishStatus: RequestStatus.Idle,
};

export const filmsData = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isFilmsDataLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isFilmsDataLoading = false;
      })
      .addCase(fetchFilmsAction.rejected, (state) => {
        state.films = [];
        state.isFilmsDataLoading = false;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
      })
      .addCase(fetchFilmReviewsAction.fulfilled, (state, action) => {
        state.filmReviews = action.payload;
      })
      .addCase(publishFilmReviewAction.pending, (state) => {
        state.reviewsPublishStatus = RequestStatus.Pending;
      })
      .addCase(publishFilmReviewAction.fulfilled, (state, action) => {
        state.filmReviews = action.payload;
        state.reviewsPublishStatus = RequestStatus.Fulfilled;
      })
      .addCase(publishFilmReviewAction.rejected, (state) => {
        state.reviewsPublishStatus = RequestStatus.Rejected;
      });
  }
});
