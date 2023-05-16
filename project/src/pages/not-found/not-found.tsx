import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function NotFound(): JSX.Element {
  return (
    <div className="user-page">

      <Header className="user-page__head" title="Not Found" />

      <div className="sign-in user-page__content">
        <div className="sign-in__message">
          <Link className="user-block__link" to={AppRoute.Main}>Go to home 🏠</Link>
        </div>
      </div>

      <Footer />

    </div>
  );
}

export default NotFound;
