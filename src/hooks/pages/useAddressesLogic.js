import { useGetData } from "..";
import { ENDPOINTS } from "../../constants/endpoints";

function useAddressesLogic() {
  const { data } = useGetData(ENDPOINTS.GET.USER_ADDRESSES, true, {
    tokenized: true,
  });
  console.log(data);
  return {};
}

export default useAddressesLogic;
