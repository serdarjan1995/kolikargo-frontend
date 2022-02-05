import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import lnMap from "../../languages/language-maps/shared-lang-map";

function DropdownLogic({
  items,
  List,
  Item,
  Button,
  ToggleButton,
  ToggleContainer,
  IconContainer,
  absolute,
  width,
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentItem, setCurrentItem] = useState(items[0]?.name || "");


  const closeDropdown = () => setShowDropdown(false);

  const { t } = useTranslation();

  const handleItemClick = (_, name, clickHandler) => {
    setCurrentItem(name);
    clickHandler && clickHandler();
    closeDropdown();
  };

  const handleToggleClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div
        style={{
          position: absolute ? "relative" : "static",
          width,
          maxWidth: "100%",
        }}
      >
        <ToggleContainer style={{ position: "relative" }} active={showDropdown}>
          <ToggleButton value={currentItem} onClick={handleToggleClick}>
            {t(lnMap[currentItem])}
          </ToggleButton>
          {IconContainer && <IconContainer active={showDropdown} />}
        </ToggleContainer>
        {showDropdown && (
          <List style={{ position: absolute }}>
            {items.map(({ name, handlers = {}, clickHandler }) => (
              <Item key={name}>
                <Button
                  onClick={(e) => {
                    handleItemClick(e, name, clickHandler);
                  }}
                  {...handlers}
                >
                  {t(lnMap[name])}
                </Button>
              </Item>
            ))}
          </List>
        )}
      </div>
    </>
  );
}

export default DropdownLogic;
