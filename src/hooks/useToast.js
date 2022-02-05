import { useContext, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ToastContext } from "../context";
import lnMap from "../languages/language-maps/shared-lang-map";
import { v4 as uuid } from "uuid";

function useToast() {
  const { toastList, setToastList } = useContext(ToastContext);
  const { t } = useTranslation();

  const getTitleByType = useMemo(
    () => ({
      success: t(lnMap.toast_success_title),
      error: t(lnMap.toast_error_title),
      warn: t(lnMap.toast_warn_title),
      info: t(lnMap.toast_info_title),
    }),
    [t]
  );
  const getTextByType = useMemo(
    () => ({
      success: t(lnMap.toast_success_text),
      error: t(lnMap.toast_error_text),
      warn: t(lnMap.toast_warn_text),
      info: t(lnMap.toast_info_text),
    }),
    [t]
  );

  const createToastItem = (type, text) => {
    const removeTimer = 5000;
    const id = uuid();
    const newItem = {
      id,
      title: getTitleByType[type],
      text: text || getTextByType[type],
      type
    };
    setTimeout(() => startToDeleteItem(id), removeTimer);
    return newItem;
  };

  const addToastItem = (type, text) => {
    setToastList((prevList) => [...prevList, createToastItem(type, text)]);
  };

  const startToDeleteItem = (id) => {
    setToastList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, startDelete: true } : item
      )
    );
  };

  const removeToastItem = (itemId) => {
    setToastList((prevList) => prevList.filter(({ id }) => id !== itemId));
  };

  return { toastList, addToastItem, removeToastItem };
}

export default useToast;
