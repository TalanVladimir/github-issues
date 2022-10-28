import React, { Fragment } from 'react';

import { Search } from './Search/Search';
import { Header } from './Header/Header';
import { Status } from './Status/Status';
import { Issues } from './Issues/Issues';

export const Home: React.FC = (): JSX.Element => {
  return (
    <Fragment>
      <Status />
      <Header />
      <Search />
      <Issues />
    </Fragment>
  );
};
