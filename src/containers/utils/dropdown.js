import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "styled-components/macro";
import { Dropdown } from "../../components";
import { ChevronDownIcon } from "../../components/icons";
import lnMap from "../../languages/language-maps/shared-lang-map";
import lnMapHome from "../../languages/language-maps/home-lang-map";

function DropdownContainer(props) {
  const { items, currentItem, onItemClick, circledIcon, bg = false } = props;
  const [showMenu, setShowMenu] = useState(false);
  const { t } = useTranslation();

  const handleItemClick = (e, name, handler) => {
    e.stopPropagation();
    onItemClick(name);
    setShowMenu(!showMenu);
    handler && handler();
  };

  return (
    <Dropdown>
      <Dropdown.Menu circledIcon={circledIcon} bg={bg}>
        {items.map(
          ({ name, handler }, i) =>
            (currentItem === name || showMenu) && (
              <Dropdown.MenuItem
                key={name}
                active={currentItem === name}
                onClick={(e) => handleItemClick(e, name, handler)}
              >
                <Dropdown.Button>
                  {t(lnMap[name]) || t(lnMapHome[name])}
                  {(i === 0 || (!showMenu && name === currentItem)) && (
                    <Dropdown.IconContainer
                      css={`
                        ${showMenu && "transform:rotate(180deg)"}
                      `}
                    >
                      <ChevronDownIcon size="18" />
                    </Dropdown.IconContainer>
                  )}
                </Dropdown.Button>
              </Dropdown.MenuItem>
            )
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownContainer;
