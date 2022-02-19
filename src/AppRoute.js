import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
  AddAddressContainer,
  AddressesContainer,
  FooterContainer,
  HeaderContainer,
  LoaderContainer,
  ModalContainer, MyCargosContainer,
  SettingsContainer
} from "./containers";
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
          <Routes>
            <Route path={ROUTES.HOME} exact element={<Home />}/>
            <Route path={ROUTES.ALL_COMPANIES} exact element={<AllCompanies />}/>
            <Route path={`${ROUTES.COMPANY}/:company${ROUTES.CALL_COURIER}`} exact
                   element={<ProtectedRoute><CallCourier /></ProtectedRoute>}
            />

            <Route path={`${ROUTES.COMPANY}/:company`} exact element={<Company />}/>
            <Route path={ROUTES.CONFIRMATION} exact element={<ProtectedRoute><Confirmation /></ProtectedRoute>}/>

            {/*<Route path={ROUTES.PROFILE} exact element={<ProtectedRoute><Profile /></ProtectedRoute>}/>*/}
            <Route path={`${ROUTES.PROFILE}${ROUTES.SETTINGS}`} exact element={
              <ProtectedRoute><Profile><SettingsContainer /></Profile></ProtectedRoute>
            }/>
            <Route path={`${ROUTES.PROFILE}${ROUTES.MY_ADDRESSES}`} exact element={
              <ProtectedRoute><Profile><AddressesContainer /></Profile></ProtectedRoute>
            }/>
            <Route path={`${ROUTES.PROFILE}${ROUTES.ADD_ADDRESS}`} exact element={
              <ProtectedRoute><Profile><AddAddressContainer /></Profile></ProtectedRoute>
            }/>
            <Route path={`${ROUTES.PROFILE}${ROUTES.MY_CARGOS}`} exact element={
              <ProtectedRoute><Profile><MyCargosContainer /></Profile></ProtectedRoute>
            }/>

            <Route path={`${ROUTES.TRACK_CARGO}/:order`} exact element={
              <ProtectedRoute><TrackCargo /></ProtectedRoute>
            }/>

            <Route path={ROUTES.FAQ} element={<FAQ />}/>
            <Route path={ROUTES.ABOUT} element={<About />}/>
            <Route path={`${ROUTES.BLOG}/:blog_name`} element={<Blog />}/>
            <Route path={`${ROUTES.HOME}:redirect`} exact
                   element={<IsUserRedirect loggedInPath={ROUTES.HOME}><Home /></IsUserRedirect>}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </Suspense>
      </ScrollToTopOnRouteChange>
      <ModalContainer />
      <FooterContainer />
    </>
  );
}

export default AppRoute;
