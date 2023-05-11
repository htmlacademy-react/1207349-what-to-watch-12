import classNames from 'classnames';

type HeaderProps = {
  className?: string;
  isAuth?: boolean;
  title?: string;
  addBreadCrumb?: boolean;
};

function Header({className, isAuth = false, title, addBreadCrumb = false}: HeaderProps): JSX.Element {
  return (
    <header className={classNames('page-header', className)}>
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      {title &&
        <h1 className="page-title user-page__title">
          {title}
        </h1>}

      {addBreadCrumb &&
        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <a href="film-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link">Add review</a>
            </li>
          </ul>
        </nav>}

      {isAuth &&
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>}
    </header>
  );
}

export default Header;
