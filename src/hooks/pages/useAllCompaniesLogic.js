import { useEffect, useMemo } from "react";
import { useLocation } from "react-router";
import { useGetData } from "..";
import { ENDPOINTS } from "../../constants/endpoints";
import lnMap from "../../languages/language-maps/shared-lang-map";

function useAllCompaniesLogic() {
  const { data, getData } = useGetData();
  const search = useLocation().search;
  const where = new URLSearchParams(search).get("where");
  const from = new URLSearchParams(search).get("from");
  const query = new URLSearchParams(search).get("q");

  const tabs = useMemo(
    () => [
      {
        name: lnMap.highlights,
      },
      { name: lnMap.fast_delivery },
      { name: lnMap.new_companies },
    ],
    []
  );

  useEffect(() => {
    if (where && from && !query) {
      return getData(
        `${ENDPOINTS.GET.SERVICES}?to_city=${where}&from_city=${from}`
      );
    }
    if (!query) getData(ENDPOINTS.GET.SERVICES);
  }, [from, where]);

  useEffect(() => {
    if (!where && !from && query) {
      return getData(`${ENDPOINTS.GET.SERVICES}?q=${query}`);
    }
  }, [query]);
  return { data, tabs };
}

export default useAllCompaniesLogic;
