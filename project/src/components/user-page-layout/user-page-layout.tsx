import { ReactNode } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

type UserPageLayoutProps = {
  children: ReactNode;
  title: string;
};

function UserPageLayout({children, title}: UserPageLayoutProps): JSX.Element {
  return (
    <div className="user-page">

      <Header className="user-page__head" title={title} />

      {children}

      <Footer />

    </div>
  );
}

export default UserPageLayout;
