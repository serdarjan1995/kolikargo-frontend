import React from "react";
import { LanguageDropdown } from "../../components";
import languages from "../../constants/languages.json";

const LanguageDropdownContainer = React.forwardRef((props, ref) => {
  const { handleItemClick } = props;
  return (
    <LanguageDropdown>
      <LanguageDropdown.List ref={ref}>
        {languages.map(({ name, code }) => (
          <LanguageDropdown.Item key={name}>
            <LanguageDropdown.Button onClick={() => handleItemClick(code)}>
              <LanguageDropdown.Text>{name}</LanguageDropdown.Text>
            </LanguageDropdown.Button>
          </LanguageDropdown.Item>
        ))}
      </LanguageDropdown.List>
    </LanguageDropdown>
  );
});

export default LanguageDropdownContainer;
