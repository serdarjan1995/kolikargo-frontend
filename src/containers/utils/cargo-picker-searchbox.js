import React from "react";
import { CargoPicker, CargoPickerSearchbox } from "../../components";
import { RouteIcon } from "../../components/icons";
import { SearchboxLogic } from "../../helpers";

function CargoPickerSearchboxContainer(props) {
  const { cargoPicker} = props;

  return (
    <SearchboxLogic
      Container={CargoPicker.ContentWrapper}
      List={CargoPickerSearchbox.List}
      Item={CargoPickerSearchbox.Item}
      searchboxIcon={
        <CargoPickerSearchbox.IconContainer>
          <RouteIcon />
        </CargoPickerSearchbox.IconContainer>
      }
      Button={CargoPickerSearchbox.Button}
      cargoPicker={cargoPicker}
      {...props}
    />
  );
}
export default CargoPickerSearchboxContainer;
