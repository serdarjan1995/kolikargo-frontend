import React, { useRef, useState } from "react";
import "styled-components/macro";
import { Dropdown2 } from "../../components";
import { Flex, Form } from "../../components";
import { useWindowKey } from "../../hooks";

function DropdownSearchboxContainer(props) {
  const {
    items,
    children,
    placeholder = "",
    handleKeyDown = () => {},
    focusHandler,
    inputCSS,
    autoFocus,
    disabled,
    name,
    inputProps,
    setFieldValue,
    setFieldTouched,
    readOnly,
    ...rest
  } = props;
  const [showDropdown, setShowDropdown] = useState(false);
  //const [value, setValue] = useState("");
  const [displayedValue, setDisplayedValue] = useState("");
  const dropDownRef = useRef();

  useWindowKey({
    keys: ["Escape"],
    handlers: [() => setShowDropdown(false)],
    condition: showDropdown,
  });
  const handleFocus = () => {
    setShowDropdown(true);
    focusHandler && focusHandler();
  };

  const handleBlur = (e) => {
    setTimeout(() => setFieldTouched(name, true), 100);
    if (dropDownRef?.current?.contains(e.relatedTarget)) return;
    setTimeout(() => setShowDropdown(false), 100);
    // !!! Dropdown kapatmazdan önce itemBtnClick'in çalışması için timeout eklendi.
  };

  const handleListClick = (e) => {
    e.stopPropagation();
    setShowDropdown(false);
  };

  const handleChange = (e) => {
    setDisplayedValue(e.target.value);
    //setValue(e.target.value);
    setFieldValue(name, e.target.value);
  };

  const handleItemClick = (key, value) => {
    //setValue(value);
    setDisplayedValue(key)
    setFieldValue(name, value);
  };

  return (
    <Flex
      ref={dropDownRef}
      {...rest}
      onBlur={handleBlur}
      css={`
        position: relative;
        z-index: 300;
      `}
    >
      <Dropdown2.Wrapper css="width:100%;">
        <Form.InputContainer>
          <Form.Input
            autoFocus={autoFocus}
            type="search"
            onChange={handleChange}
            value={displayedValue}
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            autoComplete="new-password"
            disabled={disabled}
            name={name}
            readOnly={readOnly}
            css={
              `
              margin-top: 0;
              &:focus + div {
                display: none;
              }
              
            ` + inputCSS
            }
            {...inputProps}
          />
        </Form.InputContainer>
        {showDropdown && items?.length ? (
          <Dropdown2 css="width:100%">
            <Dropdown2.List
              css="max-height:300px; overflow-x:hidden; overflow-y:auto;"
              onClick={handleListClick}
            >
              <Dropdown2.Item>
                {items.map(({ key, value }) => (
                  <Dropdown2.Button
                    key={value}
                    onClick={() => handleItemClick(key, value)}
                  >
                    {key}
                  </Dropdown2.Button>
                ))}
              </Dropdown2.Item>
            </Dropdown2.List>
          </Dropdown2>
        ) : null}
      </Dropdown2.Wrapper>
    </Flex>
  );
}

export default DropdownSearchboxContainer;
