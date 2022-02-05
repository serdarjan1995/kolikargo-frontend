import React from "react";
import "styled-components/macro";
import lnMap from "../../../languages/language-maps/shared-lang-map";
import { TrackCargoNo } from "../../../components";
import { CopyIcon } from "../../../components/icons";
import { useTranslation } from "react-i18next";
import CopyToClipboard from "react-copy-to-clipboard";

function TrackCargoNoContainer() {
  const { t } = useTranslation();

  return (
    <TrackCargoNo>
      <TrackCargoNo.Title>{t(lnMap.cargo_track_no)}</TrackCargoNo.Title>
      <TrackCargoNo.InputContainer>
        <TrackCargoNo.Input value={"AK296450"} />
        <CopyToClipboard text={"AK296450"}>
          <TrackCargoNo.Button>
            <CopyIcon />
          </TrackCargoNo.Button>
        </CopyToClipboard>
      </TrackCargoNo.InputContainer>
    </TrackCargoNo>
  );
}

export default TrackCargoNoContainer;
