import React from "react";
import { useTranslation } from "react-i18next";
import lnMap from "../../../languages/language-maps/shared-lang-map";
import { TrackCargoUserInfo } from "../../../components";

const user = {
  sender: "Atabay Kuliyev",
  sender_tel: "+90 553 156 9445",
  receiver: "Emin kuliyev",
  receiver_tel: "+993 62 72 55 65",
  weight: "25 kg",
  sum: "37.5$ / 280 TL",
};

function TrackCargoUserInfoContainer() {
  const { sender, sender_tel, receiver, receiver_tel, weight, sum } = user;
  const { t } = useTranslation();

  return (
    <TrackCargoUserInfo>
      <TrackCargoUserInfo.List>
        <TrackCargoUserInfo.Item>
          <TrackCargoUserInfo.InnerList>
            <TrackCargoUserInfo.InnerItem>
              <TrackCargoUserInfo.Title>
                {t(lnMap.form_shipper)}
              </TrackCargoUserInfo.Title>
              <TrackCargoUserInfo.Text>{sender}</TrackCargoUserInfo.Text>
            </TrackCargoUserInfo.InnerItem>
            <TrackCargoUserInfo.InnerItem>
              <TrackCargoUserInfo.Title>
                {t(lnMap.cargo_track_tel)}
              </TrackCargoUserInfo.Title>
              <TrackCargoUserInfo.Text>{sender_tel}</TrackCargoUserInfo.Text>
            </TrackCargoUserInfo.InnerItem>
          </TrackCargoUserInfo.InnerList>
        </TrackCargoUserInfo.Item>
        <TrackCargoUserInfo.Item>
          <TrackCargoUserInfo.HR />
        </TrackCargoUserInfo.Item>
        {/* --- */}
        <TrackCargoUserInfo.Item>
          <TrackCargoUserInfo.InnerList>
            <TrackCargoUserInfo.InnerItem>
              <TrackCargoUserInfo.Title>
                {t(lnMap.form_recipient)}
              </TrackCargoUserInfo.Title>
              <TrackCargoUserInfo.Text>{receiver}</TrackCargoUserInfo.Text>
            </TrackCargoUserInfo.InnerItem>
            <TrackCargoUserInfo.InnerItem>
              <TrackCargoUserInfo.Title>
                {t(lnMap.cargo_track_tel)}
              </TrackCargoUserInfo.Title>
              <TrackCargoUserInfo.Text>{receiver_tel}</TrackCargoUserInfo.Text>
            </TrackCargoUserInfo.InnerItem>
          </TrackCargoUserInfo.InnerList>
        </TrackCargoUserInfo.Item>
        <TrackCargoUserInfo.Item>
          <TrackCargoUserInfo.HR dashed />
        </TrackCargoUserInfo.Item>
        {/* --- */}
        <TrackCargoUserInfo.Item>
          <TrackCargoUserInfo.InnerList>
            <TrackCargoUserInfo.InnerItem>
              <TrackCargoUserInfo.Title>
                {t(lnMap.total_shipment_weight)}
              </TrackCargoUserInfo.Title>
              <TrackCargoUserInfo.Text>{weight}</TrackCargoUserInfo.Text>
            </TrackCargoUserInfo.InnerItem>
            <TrackCargoUserInfo.InnerItem>
              <TrackCargoUserInfo.Title>
                {t(lnMap.cargo_track_sum)}
              </TrackCargoUserInfo.Title>
              <TrackCargoUserInfo.Text>{sum}</TrackCargoUserInfo.Text>
            </TrackCargoUserInfo.InnerItem>
          </TrackCargoUserInfo.InnerList>
        </TrackCargoUserInfo.Item>
      </TrackCargoUserInfo.List>
    </TrackCargoUserInfo>
  );
}

export default TrackCargoUserInfoContainer;
