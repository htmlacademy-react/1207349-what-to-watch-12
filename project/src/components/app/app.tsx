import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import MyList from '../../pages/my-list/my-list';
import Film from '../../pages/film/film';
import Review from '../../pages/review/review';
import Player from '../../pages/player/player';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<Login />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authStatus={AuthStatus.NoAuth}>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<Film />}
        />
        <Route
          path={AppRoute.AddReview}
          element={<Review />}
        />
        <Route
          path={AppRoute.Player}
          element={<Player />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
