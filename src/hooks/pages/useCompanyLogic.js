import { useParams } from "react-router";
import { useGetData } from "..";
import { ENDPOINTS } from "../../constants/endpoints";

function useCompanyLogic() {
  const { company } = useParams();
  const url = `${ENDPOINTS.GET.SERVICES}${company}`;
  const { data } = useGetData(url, true);

  return { data };
}

export default useCompanyLogic;
