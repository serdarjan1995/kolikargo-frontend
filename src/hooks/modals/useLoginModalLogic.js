import { useCurrentUser } from "..";

function useLoginModalLogic(props) {
  const { login, resource } = useCurrentUser();

  const handleLoginClick = (values) => {
    login(values);
  };

  const handlers = { handleLoginClick };

  return { handlers, resource };
}

export default useLoginModalLogic;
