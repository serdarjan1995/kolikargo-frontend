import React from "react";
import { OverlayDropdown } from "../../components";
import { DropdownLogic } from "../../helpers";

function OverlayDropdownContainer(props) {
  const { items=[], width = "200px" } = props;
  return (
    <DropdownLogic
      ToggleContainer={OverlayDropdown}
      List={OverlayDropdown.List}
      Item={OverlayDropdown.Item}
      ToggleButton={OverlayDropdown.ToggleButton}
      Button={OverlayDropdown.Button}
      IconContainer={OverlayDropdown.IconContainer}
      absolute
      items={items}
      width={width}
    />
  );
}

export default OverlayDropdownContainer;
