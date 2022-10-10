import React from 'react';
import BandContest from '../../pages/BandContest';
import Contact from '../../pages/Contact';
import Lineup from '../../pages/Lineup';
import MajalesKingQueen from '../../pages/MajalesKingQueen';
import NewsFeed from '../../pages/NewsFeed';
import NotFoundPage from '../../pages/NotFoundPage';
import Partners from '../../pages/Partners';

export const ROUTES: {
  path: string;
  linkText: string;
  component: React.ReactNode;
}[] = [
  { path: '/lineup', linkText: 'lineup', component: <Lineup /> },
  {
    path: '/soutez-kapel',
    linkText: 'soutěž kapel',
    component: <BandContest />,
  },
  {
    path: '/kral-a-kralovna',
    linkText: 'král majálesu',
    component: <MajalesKingQueen />,
  },
  { path: '/aktuality', linkText: 'aktuality', component: <NewsFeed /> },
  { path: '/partneri', linkText: 'partneři', component: <Partners /> },
  { path: '/konakt', linkText: 'konakt', component: <Contact /> },
  { path: '*', linkText: '', component: <NotFoundPage /> },
];
