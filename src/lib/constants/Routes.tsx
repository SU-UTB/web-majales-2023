import React from "react";
import BandContest from "../../pages/BandContest";
import Contact from "../../pages/Contact";
import Lineup from "../../pages/Lineup";
import MajalesKingQueen from "../../pages/MajalesKingQueen";
import NewsFeed from "../../pages/NewsFeed";
import NotFoundPage from "../../pages/NotFoundPage";
import Partners from "../../pages/Partners";

export const ROUTE_PATHS = {
  LINEUP: { path: "/lineup", linkText: "lineup" },
  BAND_CONTEST: { path: "/soutez-kapel", linkText: "soutěž kapel" },
  MAJALES_KING_QUEEN: { path: "/kral-a-kralovna", linkText: "král majálesu" },
  NEWS_FEED: { path: "/aktuality", linkText: "aktuality" },
  PARTNERS: { path: "/partneri", linkText: "partneři" },
  CONTACT: { path: "/kontakt", linkText: "kontakt" },
};

export const ROUTES: {
  path: string;
  linkText: string;
  component: React.ReactNode;
}[] = [
  // {
  //   path: ROUTE_PATHS.LINEUP.path,
  //   linkText: ROUTE_PATHS.LINEUP.linkText,
  //   component: <Lineup />,
  // },
  // {
  //   path: ROUTE_PATHS.MAJALES_KING_QUEEN.path,
  //   linkText: ROUTE_PATHS.MAJALES_KING_QUEEN.linkText,
  //   component: <MajalesKingQueen />,
  // },
  // {
  //   path: ROUTE_PATHS.NEWS_FEED.path,
  //   linkText: ROUTE_PATHS.NEWS_FEED.linkText,
  //   component: <NewsFeed />,
  // },
  // {
  //   path: ROUTE_PATHS.PARTNERS.path,
  //   linkText: ROUTE_PATHS.PARTNERS.linkText,
  //   component: <Partners />,
  // },
  {
    path: ROUTE_PATHS.CONTACT.path,
    linkText: ROUTE_PATHS.CONTACT.linkText,
    component: <Contact />,
  },
  { path: "*", linkText: "", component: <NotFoundPage /> },
];
