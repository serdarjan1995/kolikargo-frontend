import { useContext, useEffect } from "react";
import { useLocalStorage, useModal, usePost } from ".";
import { ENDPOINTS } from "../constants/endpoints";
import { UserContext } from "../context";

function useCurrentUser() {
  const { postData, resource } = usePost({ specialError: true });
  const [, setLocalToken] = useLocalStorage("token", "");
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { resetModal } = useModal();

  const login = (values) => {
    const { tel, password } = values;
    postData(ENDPOINTS.POST.LOGIN, {
      phone_number: tel,
      password,
      csrfmiddlewaretoken:
        "PvcFC9lYmK1lU5ZXw8CZv8T03b673zz11cpRJgmskmTUi5trLh9gqhjifPPZ5GLY",
    });
  };

  const logout = () => {
    setLocalToken("");
    setCurrentUser(null);
  };

  useEffect(() => {
    const { status, data: { access: token } = {} } = resource?.resp || {};
    if (status === 200) {
      setLocalToken(token);
      setCurrentUser(token);
      resetModal();
    }
  }, [resetModal, resource, setCurrentUser, setLocalToken]);

  return { login, logout, currentUser, resource, setCurrentUser };
}

export default useCurrentUser;
