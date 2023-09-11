import React from 'react';
import BandContest from '../../pages/BandContest';
import Contact from '../../pages/Contact';
import MajalesKingQueen from '../../pages/MajalesKingQueen';
import NewsFeed from '../../pages/NewsFeed';
import NotFoundPage from '../../pages/NotFoundPage';
import Partners from '../../pages/Partners';

export const ROUTE_PATHS = {
  LINEUP: { path: '/lineup', linkText: 'lineup' },
  BAND_CONTEST: { path: '/soutez-kapel', linkText: 'soutěž kapel' },
  MAJALES_KING_QUEEN: { path: '/kral-a-kralovna', linkText: 'král majálesu' },
  NEWS_FEED: { path: '/aktuality', linkText: 'aktuality' },
  PARTNERS: { path: '/partneri', linkText: 'partneři' },
  CONTACT: { path: '/kontakt', linkText: 'kontakt' },
};

export const ROUTES: {
  path: string;
  linkText: string;
  component: React.ReactNode;
}[] = [
  // {
  //   path: ROUTE_PATHS.CONTACT.path,
  //   linkText: ROUTE_PATHS.CONTACT.linkText,
  //   component: <Contact />,
  // },
  { path: '*', linkText: '', component: <NotFoundPage /> },
];
