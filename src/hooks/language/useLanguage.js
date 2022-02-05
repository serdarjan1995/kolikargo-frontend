import { useMemo } from "react";
import lnMap from "../../languages/language-maps/shared-lang-map";

function useLanguage() {
  const companyCardFilterItems = useMemo(
    () => [
      { name: lnMap.smart_sorting },
      { name: lnMap.by_rating },
      { name: lnMap.by_price },
      { name: lnMap.by_delivery_speed },
    ],
    []
  );

  const fromCities = useMemo(
    () => [
      { key: "Ankara", value: "Ankara" },
      { key: "İstanbul", value: "Istanbul" },
      { key: "İzmir", value: "Izmir" },
    ],
    []
  );
  const whereCities = useMemo(
    () => [
      { key: "Aşgabat", value: "Ashgabat" },
      { key: "Marı", value: "Mary" },
      { key: "Lebap", value: "Lebap" },
      { key: "Daşoğuz", value: "Dashoguz" },
      { key: "Balkan", value: "Balkans" },
    ],
    []
  );
  const whereCountries = useMemo(
    () => [{ key: "Türkmenistan", value: "Turkmenistan" }],
    []
  );

  return { companyCardFilterItems, fromCities, whereCities, whereCountries };
}

export default useLanguage;
