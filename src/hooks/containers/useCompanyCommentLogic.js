import { useState } from "react";
import { useParams } from "react-router";
import { useEffect } from "react/cjs/react.development";
import { useGetData } from "..";
import { ENDPOINTS } from "../../constants/endpoints";

function useCompanyCommentLogic() {
  const { company } = useParams();
  const [displayedComments, setDisplayedComments] = useState([]);

  const { data } = useGetData(
    `${ENDPOINTS.GET.SERVICES}${company}/reviews`,
    true
  );

  useEffect(() => {
    const comments = data?.hits?.data || [];

    if (comments) {
      setDisplayedComments(comments);
    }
  }, [data]);

  return { displayedComments, setDisplayedComments };
}

export default useCompanyCommentLogic;
