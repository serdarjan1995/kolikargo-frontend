import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocalStorage, useToast } from ".";
import lnMap from "../languages/language-maps/shared-lang-map";

const defaultState = {
  hits: null,
  error: null,
  isLoading: false,
};

let request = null;

function useGetData(defaultUrl, auto = false, options = {}) {
  const [data, setData] = useState(defaultState);
  const { addToastItem } = useToast();
  const [token] = useLocalStorage("token");
  const { t } = useTranslation();

  const getData = useCallback(
    async (url = defaultUrl) => {
      request = axios.CancelToken.source();
      setData({ ...defaultState, isLoading: true });
      return axios(
        {
          method: "GET",
          url,
          headers: options.tokenized
            ? {
                Authorization: `Bearer ${token}`,
              }
            : {},
        },
        {
          cancelToken: request.token,
        }
      )
        .then((resp) => {
          setData((prevData) => ({
            ...prevData,
            isLoading: false,
            hits: resp,
          }));
          return resp.data;
        })
        .catch((error) => {
          addToastItem("error", t(lnMap.toast_error_text));
          setData((prevData) => ({ ...prevData, isLoading: false, error }));
        });
    },
    [defaultUrl, addToastItem, t]
  );

  useEffect(() => {
    if (auto) getData();
    return () => request?.cancel();
  }, [auto]);

  return { getData, data };
}

export default useGetData;
