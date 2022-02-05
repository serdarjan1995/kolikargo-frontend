import { useParams } from "react-router";
import { useGetData } from "..";
import { ENDPOINTS } from "../../constants/endpoints";

function useTrackCargoLogic() {
  const { order } = useParams();
  const { data } = useGetData(`${ENDPOINTS.GET.ORDERS}${order}/`,true);
  return {};
}

export default useTrackCargoLogic;
