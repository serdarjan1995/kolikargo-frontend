import { useState } from "react";
import { useNavigate } from "react-router";
import { useLanguage } from "..";
import * as ROUTES from "../../constants/routes";

function useCargoPickerLogic() {
  const history = useNavigate();
  const { fromCities, whereCities } = useLanguage();
  const [fromList, setFromList] = useState(fromCities);
  const [whereList, setWhereList] = useState(whereCities);

  const handleSubmit = (values) => {
    const { where, from, weight } = values;
    if (where && from) {
      const params = new URLSearchParams();
      params.append("where", where);
      params.append("from", from);
      params.append("weight", weight);
      history.push({
        pathname: ROUTES.ALL_COMPANIES,
        search: params.toString(),
      });
    }
  };

  const handlers = {
    handleSubmit,
  };

  return {
    fromList,
    setFromList,
    whereList,
    setWhereList,
    handlers,
  };
}

export default useCargoPickerLogic;
