import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { useGetData, useModal } from "..";
import { ENDPOINTS } from "../../constants/endpoints";
import lnMap from "../../languages/language-maps/shared-lang-map";

function useHomeLogic() {
  const { t } = useTranslation();
  const { redirect } = useParams();
  const { data } = useGetData(ENDPOINTS.GET.SERVICES,true);
  const { openLoginModal } = useModal();
  const [currentSortingItem, setCurrentSortingItem] = useState(
    t(lnMap.smart_sorting)
  );


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
    if (redirect) {
      openLoginModal();
    }
  }, [redirect]);

  return { tabs, currentSortingItem, setCurrentSortingItem, data };
}

export default useHomeLogic;
