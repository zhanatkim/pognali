import React from 'react';
import Header from '../components/base/header';
import Footer from '../components/base/footer';

const MainPage: React.FunctionComponent = () => (
  <div className="wrapper">
    <Header />
    <main>
    </main>
    <Footer />
  </div>
);

MainPage.displayName = 'Index';

export default MainPage;
