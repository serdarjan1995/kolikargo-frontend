import * as ROUTES from "../constants/routes";
import { useTranslation } from "react-i18next";
import lnMap from "../languages/language-maps/shared-lang-map";
import lnMapHome from "../languages/language-maps/home-lang-map";
import { useParams } from "react-router";

function useRouteMap() {
  const { t } = useTranslation();
  const { company, blog_name } = useParams();

  const routeMapping = {
    [ROUTES.HOME]: t(lnMap.home_page),
    [ROUTES.ALL_COMPANIES]: t(lnMap.all_companies),
    [ROUTES.CALL_COURIER]: t(lnMap.path_call_courier),
    [ROUTES.BLOG]: t(lnMapHome.blog_title),
    [`/${company}`]: company,
    [`/${blog_name}`]: blog_name,
  };
  return routeMapping;
}

export default useRouteMap;
