import { usePost } from "..";
import { ENDPOINTS } from "../../constants/endpoints";

function useAddAddressLogic() {
  const { postData } = usePost();
  /*   address_name: "",
  city: "",
  district: "",
  address_details: "", */
  const handleSubmit = (values) => {
    const { address_name, city, district, address_details } = values;
    postData(
      ENDPOINTS.POST.USER_ADDRESSES,
      {
        title: address_name,
        line1: `${city} - ${district} - ${address_details}`,
        first_name: "test",
        last_name: "test",
        country: "https://kolaykargo.herokuapp.com/api/countries/TR/",
        phone_number: "+905511234565",
      },
      false,
      { tokenized: true }
    );
  };
  const handlers = {
    handleSubmit,
  };
  return { handlers };
}

export default useAddAddressLogic;
