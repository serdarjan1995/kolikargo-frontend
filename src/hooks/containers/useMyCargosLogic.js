import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { useEffect } from "react/cjs/react.development";
import { useGetData } from "..";
import { ENDPOINTS } from "../../constants/endpoints";
import * as ROUTES from "../../constants/routes";

function useMyCargosLogic() {
  const history = useHistory();
  const location = useLocation();
  const { search } = useLocation();
  const { data, getData } = useGetData(ENDPOINTS.GET.ORDERS, true, {
    tokenized: true,
  });
  const [displayedCargos, setDisplayedCargos] = useState([]);
  const order = new URLSearchParams(search).get("order");

  useEffect(() => {
    const cargos = data?.hits?.data || [];
    if (cargos) setDisplayedCargos(cargos);
  }, [data]);

  useEffect(() => {
    if (order !== undefined) {
      getData(
        `${ENDPOINTS.GET.ORDERS}${order ? `?number=${order}` : ""}`,
        true,
        {
          tokenized: true,
        }
      ).then((data) => setDisplayedCargos(data));
    }
  }, [order]);

  const handleSubmit = (values) => {
    const { track_no: order } = values;
    if (order !== undefined) {
      const params = new URLSearchParams();
      order ? params.append("order", order) : params.delete("order");
      history.replace({
        pathname: location.pathname,
        search: params.toString(),
      });
    }
  };

  const handlers = { handleSubmit };
  return { cargos: displayedCargos, handlers };
}

export default useMyCargosLogic;
