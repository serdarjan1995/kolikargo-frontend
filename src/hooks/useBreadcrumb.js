import { useLocation } from "react-router";
import { createBreadcrumb } from "../helpers";
import * as ROUTES from "../constants/routes";
import { useTranslation } from "react-i18next";
import lnMap from "../languages/language-maps/shared-lang-map";

function useBreadcrumb() {
  const location = useLocation();
  const { t } = useTranslation();

  const createBreadCrumbs = () => {
    const slicedPaths = location.pathname.split(/(?=\/)/);
    const baseURLCrumb = { name: t(lnMap.home_page), path: ROUTES.HOME };
    return [baseURLCrumb, ...createBreadcrumb(slicedPaths)];
  };
  
  return createBreadCrumbs();
}

export default useBreadcrumb;
