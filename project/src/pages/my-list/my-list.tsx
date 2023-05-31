import Catalog from '../../components/catalog/catalog';
import UserPageLayout from '../../components/user-page-layout/user-page-layout';
import { CARD_DISPLAY_COUNT } from '../../const';
import { films } from '../../mocks/films';

function MyList(): JSX.Element {
  return (
    <UserPageLayout title="My list">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <Catalog films={films.slice(0, CARD_DISPLAY_COUNT)} />
      </section>
    </UserPageLayout>
  );
}

export default MyList;
