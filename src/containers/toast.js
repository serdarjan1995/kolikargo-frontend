import React from "react";
import { Toast } from "../components";
import { useToast } from "../hooks";

function ToastContainer() {
  const { toastList, removeToastItem } = useToast();

  return (
    <Toast>
      {toastList.map(({ id, type, title, text, startDelete }, index) => (
        <Toast.Content id={id} key={id} type={type} startDelete={startDelete}>
          <Toast.Icon variant={type} />
          <div style={{ textAlign: "left" }}>
            <Toast.Title>{title}</Toast.Title>
            <Toast.Text>
              {text} {index}
            </Toast.Text>
          </div>
          <Toast.Button onClick={() => removeToastItem(id)} />
        </Toast.Content>
      ))}
    </Toast>
  );
}

export default ToastContainer;
