import React, { Suspense } from "react";
import { Route, Switch } from "react-router";
import { FooterContainer, HeaderContainer, LoaderContainer, ModalContainer } from "./containers";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { ScrollToTopOnRouteChange } from "./helpers";

const AllCompanies = React.lazy(() => import("./pages/all-companies"));
const CallCourier = React.lazy(() => import("./pages/call-courier"));
const Company = React.lazy(() => import("./pages/company"));
const Confirmation = React.lazy(() => import("./pages/confirmation"));
const Home = React.lazy(() => import("./pages/home"));
const NotFound = React.lazy(() => import("./pages/not-found"));
const Profile = React.lazy(() => import("./pages/profile"));
const TrackCargo = React.lazy(() => import("./pages/track-cargo"));
const FAQ = React.lazy(() => import("./pages/faq"));
const About = React.lazy(() => import("./pages/about"));
const Blog = React.lazy(() => import("./pages/blog"));

function AppRoute() {
  return (
    <>
      <HeaderContainer />
      <ScrollToTopOnRouteChange>
        <Suspense fallback={<LoaderContainer />}>
          <Switch>
            <Route path={ROUTES.HOME} exact>
              <Home />
            </Route>
            <Route path={ROUTES.ALL_COMPANIES}>
              <AllCompanies />
            </Route>
            <ProtectedRoute
              path={`${ROUTES.COMPANY}/:company${ROUTES.CALL_COURIER}`}
            >
              <CallCourier />
            </ProtectedRoute>
            <Route path={`${ROUTES.COMPANY}/:company`}>
              <Company />
            </Route>
            <ProtectedRoute path={ROUTES.CONFIRMATION}>
              <Confirmation />
            </ProtectedRoute>
            <ProtectedRoute path={ROUTES.PROFILE}>
              <Profile />
            </ProtectedRoute>
            <ProtectedRoute path={`${ROUTES.TRACK_CARGO}/:order`}>
              <TrackCargo />
            </ProtectedRoute>
            <Route path={ROUTES.FAQ}>
              <FAQ />
            </Route>
            <Route path={ROUTES.ABOUT}>
              <About />
            </Route>
            <Route path={`${ROUTES.BLOG}/:blog_name`}>
              <Blog />
            </Route>
            <IsUserRedirect
              loggedInPath={ROUTES.HOME}
              path={`${ROUTES.HOME}:redirect`}
              exact
            >
              <Home />
            </IsUserRedirect>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </ScrollToTopOnRouteChange>
      <ModalContainer />
      <FooterContainer />
    </>
  );
}

export default AppRoute;
