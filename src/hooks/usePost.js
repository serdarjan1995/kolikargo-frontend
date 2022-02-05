import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useCurrentUser, useLocalStorage, useToast } from ".";
import lnMap from "../languages/language-maps/shared-lang-map";

const defaultState = {
  resp: null,
  error: null,
  isLoading: false,
};

let request = null;

function usePost(options = {}) {
  const { defaultUrl, auto = false, defaultData, specialError } = options;
  request = axios.CancelToken.source();
  const [resource, setResource] = useState(defaultState);
  const [localToken] = useLocalStorage("token");
  const [isMount, setIsMount] = useState(false);
  const { addToastItem } = useToast();
  const { t } = useTranslation();

  const postData = useCallback(
    async (url, data, callback, options) => {
      setResource({ ...defaultState, isLoading: true });
      const { tokenized } = options || {};
      return axios(
        {
          method: "POST",
          url,
          data,
          headers: tokenized
            ? {
                Authorization:
                  "Bearer " +
                  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5MzA1MTA3LCJpYXQiOjE2MzgwMDkxMDcsImp0aSI6IjYwODdlNTU1MDMyZjRiMmI5YWNlYTk4MTA0Nzc5MjU3IiwidXNlcl9pZCI6OX0.c7r6BYn7qCPMlZyTF2rAW94Or2G7iwLncn05QE1QDjw",
              }
            : {},
        },
        { cancelToken: request.token }
      )
        .then((resp) => {
          setResource({ ...resource, resp });
          return resp;
        })
        .then((resp) => (callback ? callback(resp?.data) : resp?.data))
        .catch((error) => {
          setResource({ ...resource, error });
          if (!specialError) {
            addToastItem("error", t(lnMap.toast_error_text));
          }
        });
    },
    [resource, addToastItem, t, specialError, localToken]
  );

  useEffect(() => {
    if (auto && !isMount) {
      postData(defaultUrl, defaultData);
      setIsMount(true);
    }

    return () => request?.cancel();
  }, [auto, postData, defaultUrl, defaultData, isMount]);

  return { postData, resource };
}

export default usePost;
