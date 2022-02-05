import { useFormikContext } from "formik";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { useGetData } from "..";
import { ENDPOINTS } from "../../constants/endpoints";
import lnMap from "../../languages/language-maps/shared-lang-map";

function useSumCardLogic() {
  const { t } = useTranslation();
  const { values } = useFormikContext();
  const { company } = useParams();
  const { data } = useGetData(`${ENDPOINTS.GET.SERVICES}${company}`, true);
  const {
    records = [],
    title,
    reviews = [],
    rating,
    images = [],
  } = data?.hits?.data || {};
  const { price } = records[0] || {};
  const {
    shipper_name,
    recipient_name,
    shipping_address_city,
    delivery_address_city,
    box_weight,
    coupon_code,
  } = values;

  console.log(data);

  const info = useMemo(
    () => ({
      shipper_name,
      recipient_name,
      cargo_route: `${shipping_address_city} - ${delivery_address_city}`,
      box_weight,
      price_info: {
        cargo_price: `${box_weight * price}$`,
        service_price: t(lnMap.total_free),
        total_sum: `${box_weight * price}$`,
      },
      coupon_code,
    }),
    [
      t,
      recipient_name,
      shipper_name,
      box_weight,
      delivery_address_city,
      shipping_address_city,
      coupon_code,
      price,
    ]
  );

  const cardData = useMemo(() => {
    return {
      title,
      reviews,
      rating,
      image: images[0]?.original || "",
    };
  }, [images, rating, title, reviews]);

  return { info, cardData };
}

export default useSumCardLogic;
