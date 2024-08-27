import React from 'react';
import Header from '../components/base/header';
import Footer from '../components/base/footer';
import TravelersCatalog from '../components/travelers-catalog/travelers-catalog';

const CatalogPage: React.FC = () => (
  <div className='wrapper'>
    <Header/>
    <main>
      <TravelersCatalog/>
    </main>
    <Footer/>
  </div>
);

CatalogPage.displayName = 'Попутчики';

export default CatalogPage;
