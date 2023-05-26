import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks';

type HeaderProps = {
  className?: string;
  title?: string;
  addBreadCrumb?: boolean;
};

function Header({className, title, addBreadCrumb = false}: HeaderProps): JSX.Element {
  const isAuth = useAppSelector((state) => state.authorizationStatus === AuthStatus.Auth);
  const location = useLocation();
  const isMyListPage = AppRoute.MyList === location.pathname;

  return (
    <header className={classNames('page-header', className)}>
      <div className="logo">
        <Link to={AppRoute.Main} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      {title &&
        <h1 className="page-title user-page__title">
          {title}
          {isMyListPage && <span className="user-page__film-count">9</span>}
        </h1>}

      {addBreadCrumb &&
        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link to={AppRoute.Film.replace(':id', '1')} className="breadcrumbs__link">The Grand Budapest Hotel</Link>
            </li>
            <li className="breadcrumbs__item">
              <Link to={AppRoute.AddReview.replace(':id', '1')} className="breadcrumbs__link">Add review</Link>
            </li>
          </ul>
        </nav>}

      {isAuth ? (
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link to={AppRoute.SignIn} className="user-block__link">Sign out</Link>
          </li>
        </ul>
      ) : (
        <div className="user-block">
          <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
        </div>
      )}
    </header>
  );
}

export default Header;
