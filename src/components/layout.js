import React from 'react';
import  './layout.module.scss';
import Helmet from 'react-helmet';
import Header from './header';
import useSiteMetadata from '../hooks/use-sitemetadata';
import Footer from '../components/footer';
const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="google-site-verification" content="kxL9_E_IZwrBntwkx3mlR044XSb4I34Y4uiYyq8Px44" />
      </Helmet>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>

  );
};

export default Layout;