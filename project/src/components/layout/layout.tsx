import { ReactNode } from 'react';
import Footer from '../footer/footer';

type LayoutProps = {
  children: ReactNode;
};

function Layout({children}: LayoutProps): JSX.Element {
  return (
    <div className="user-page">

      {children}

      <Footer />

    </div>
  );
}

export default Layout;
