import React, { Fragment } from 'react';

import { Search } from './Search/Search';
import { Header } from './Header/Header';
import { Status } from './Status/Status';
import { Issues } from './Issues/Issues';

export const Home = () => {
  return (
    <Fragment>
      <Status />
      <Header />
      <Search />
      <Issues />
    </Fragment>
  );
};
