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