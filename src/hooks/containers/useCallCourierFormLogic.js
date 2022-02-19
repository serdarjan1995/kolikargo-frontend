import React, { useCallback, /*useEffect,*/ useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import lnMap from "../../languages/language-maps/shared-lang-map";
import * as Yup from "yup";
import { fonts } from "../../styles/variables";
import { usePost } from "..";
import { ENDPOINTS } from "../../constants/endpoints";

function useCallCourierFormLogic() {
  const { t } = useTranslation();
  const [selectedDay, setSelectedDay] = useState(null);
  const { postData } = usePost();

  const handleCallCourierClick = (values) => {
    const {
      box_weight,
      recipient_name,
      note,
      recipient_tel,
      delivery_address_city,
      delivery_address_details,
    } = values;

    const basketData = {
      url: `${ENDPOINTS.GET.SERVICES}9/`,
      quantity: box_weight,
    };


    //const [first_name, last_name = ""] = recipient_name.split(" ");

    const shipping_address = {
      country: "https://kolaykargo.herokuapp.com/api/countries/TR/",
      recipient_full_name: recipient_name,
      phone_number: recipient_tel,
      line1: delivery_address_city,
      line2: delivery_address_details,
      line3: "",
      line4: "",
      note,
    };

    postData(ENDPOINTS.POST.ADD_SERVICE, basketData).then((basket) => {
      const checkoutData = {
        basket: basket.url,
        shipping_address,
      };
      // eslint-disable-next-line no-undef
      postData(ENDPOINTS.POST.CHECKOUT, checkoutData, false, {
        tokenized: true,
      });
    });

    // !!! Post values
    // !!! If no error redirect to "CONFIRMATION" page.
    /*   history.push(ROUTES.CONFIRMATION); */
  };

  const handleAcceptTermsClick = (e, handler) => {
    if (e.key === "Escape") {
      handler();
    }
  };
  const validationSchema = useMemo(
    () =>
      Yup.object({
        shipper_name: Yup.string().required(t(lnMap.form_warn_empty)),
        shipper_tel: Yup.string()
          .required(t(lnMap.form_warn_empty))
          .min(10, t(lnMap.form_warn_tel_invalid)),
        shipping_address_city: Yup.string().required(t(lnMap.form_warn_empty)),
        shipping_address_country: Yup.string().required(
          t(lnMap.form_warn_empty)
        ),
        shipping_address_details: Yup.string().required(
          t(lnMap.form_warn_empty)
        ),
        what_to_ship: Yup.string().required(t(lnMap.form_warn_empty)),
        recipient_name: Yup.string().required(t(lnMap.form_warn_empty)),
        recipient_tel: Yup.string()
          .required(t(lnMap.form_warn_empty))
          .min(10, t(lnMap.form_warn_tel_invalid)),
        delivery_address_country: Yup.string().required(
          t(lnMap.form_warn_empty)
        ),
        delivery_address_city: Yup.string().required(t(lnMap.form_warn_empty)),
        delivery_address_details: Yup.string().required(
          t(lnMap.form_warn_empty)
        ),
        box_weight: Yup.string().required(t(lnMap.form_warn_empty)),
        password: Yup.string()
          .required(t(lnMap.form_warn_empty))
          .min(8, "Parola 8 karakterden uzun olmalıdır."),
        acceptTerms: Yup.bool().oneOf(
          [true],
          "Terms & Conditions are required"
        ),
      }),
    [t]
  );

  const customDatePickerInput = useCallback(
    ({ ref }) => (
      <input
        readOnly
        ref={ref}
        placeholder={t(lnMap.form_date_custom)}
        value={
          selectedDay
            ? `${selectedDay.day}/${selectedDay.month}/${selectedDay.year}`
            : ""
        }
        style={{
          textAlign: "center",
          padding: "17px 23px",
          fontSize: "1.7rem",
          fontFamily: fonts.BaiJamjuree,
          border: "2px solid #E6E8EC",
          borderRadius: "15px",
          color: "#777E90",
          outline: "none",
        }}
      />
    ),
    [selectedDay, t]
  );

  const handleDateRadioClick = () => {
    setSelectedDay("");
  };

  const handlers = {
    handleCallCourierClick,
    handleAcceptTermsClick,
    handleDateRadioClick,
  };
  return {
    handlers,
    validationSchema,
    customDatePickerInput,
    selectedDay,
    setSelectedDay,
  };
}

export default useCallCourierFormLogic;
