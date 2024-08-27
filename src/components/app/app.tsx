import React from 'react';
import {Route, Routes, HashRouter} from 'react-router-dom';
import Sitemap from '../../pages/sitemap';
import MainPage from '../../pages';
import FormPage from '../../pages/form';
import CatalogPage from '../../pages/catalog';
import UiKit from '../../pages/ui-kit';
import {AppRoute} from '../../utils/const';
import '../../sass/style.scss';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={AppRoute.root} element={<MainPage/>}/>
        <Route path={AppRoute.form} element={<FormPage/>}/>
        <Route path={AppRoute.catalog} element={<CatalogPage/>}/>
        <Route path={AppRoute.uiKit} element={<UiKit/>}/>
        <Route path={AppRoute.notFound} element={<Sitemap/>}/>
      </Routes>
    </HashRouter>
  );
}

App.displayName = 'App';

export default App;
