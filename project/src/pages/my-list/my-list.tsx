import Catalog from '../../components/catalog/catalog';
import Header from '../../components/header/header';
import Layout from '../../components/layout/layout';
import { CARD_DISPLAY_COUNT } from '../../const';
import { films } from '../../mocks/films';

function MyList(): JSX.Element {
  return (
    <Layout>

      <Header className="user-page__head" isAuth title="My list" />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <Catalog films={films.slice(0, CARD_DISPLAY_COUNT)} />

      </section>

    </Layout>
  );
}

export default MyList;
