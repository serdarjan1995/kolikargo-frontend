import React from "react";
import { TrackNumberDisplay } from "../../components";
import { CopyIcon } from "../../components/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";

function TrackNumberDisplayContainer(props) {
  const { text, trackNumber } = props;
  return (
    <TrackNumberDisplay>
      <TrackNumberDisplay.Text>{text}</TrackNumberDisplay.Text>
      <TrackNumberDisplay.No>{trackNumber}</TrackNumberDisplay.No>
      <CopyToClipboard text={trackNumber}>
        <TrackNumberDisplay.Button>
          <CopyIcon />
        </TrackNumberDisplay.Button>
      </CopyToClipboard>
    </TrackNumberDisplay>
  );
}

export default TrackNumberDisplayContainer;
