import React, { useState } from "react";
import { ToastContext } from "../context";

export default function ToastProvider(props) {
  const [toastList, setToastList] = useState([]);
  const toastState = { toastList, setToastList };
  return <ToastContext.Provider value={toastState} {...props} />;
}
