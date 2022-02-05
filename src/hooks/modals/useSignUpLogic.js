import { useCurrentUser, useLocalStorage, usePost } from "..";
import { ENDPOINTS } from "../../constants/endpoints";

function useSignUpLogic(props) {
  const { postData, resource } = usePost({specialError:true});
  const [, setValue] = useLocalStorage("token", "");
  const { successHandler } = props;
  const { setCurrentUser } = useCurrentUser();

  const handleSignUp = (values) => {
    const { tel, password, password_again, name_surname } = values;
    const [first_name, last_name] = name_surname.split(" ");
    const formattedValue = {
      phone_number: "+" + tel,
      first_name,
      last_name,
      password1: password,
      password2: password_again,
    };
    postData(ENDPOINTS.POST.REGISTER, { ...formattedValue }, (data) => {
      if (data) {
        const { access } = data;
        setCurrentUser(data);
        setValue(access);
      }
      successHandler && successHandler();
    });
  };

  const handlers = { handleSignUp };
  return { handlers, resource };
}

export default useSignUpLogic;
