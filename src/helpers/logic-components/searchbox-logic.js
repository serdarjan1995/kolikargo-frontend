import React, { /*useEffect,*/ useRef, useState } from "react";
import { /*useGetData,*/ useWindowKey } from "../../hooks";
import { CargoPicker } from "../../components";
import { CircledCrossIcon } from "../../components/icons";

/*   const resetList = () => {
    setDisplayedList([]);
  };
 */

/*   const debouncedChange = debounce((e) => updateQuery(e), 200); */

/*   const { data, getData } = useGetData(); */

function SearchboxLogic(props) {
  const {
    //url,
    name,
    list,
    //setList,
    Container,
    List,
    Item,
    Button,
    InputContainer,
    Input,
    searchboxIcon,
    cargoPicker,
    setFieldValue,
    inputProps,
    inputStyle,
  } = props;
  const [value, setValue] = useState("");
  const [displayedList, setDisplayedList] = useState(list);
  const [showList, setShowList] = useState(false);
  const containerRef = useRef(null);
  const openList = () => setShowList(true);
  const resetValue = () => setValue("");
  const closeList = () => setShowList(false);

  useWindowKey({ keys: ["Escape"], handlers: [closeList] });
  const { text, title, icon } = cargoPicker || {};

  const updateQuery = (e) => {
    const { value } = e.target;
    setValue(value);
    setFieldValue(name, value);

    const formattedValue = value.trim().toLocaleLowerCase();
    if (formattedValue || formattedValue === "") {
      const filteredList = list.filter(({ key }) =>
        key.toLocaleLowerCase().includes(formattedValue)
      );
      return setDisplayedList(filteredList);
    }
    setDisplayedList([]);
  };

  const handleItemBtnClick = (e, key, value) => {
    e.preventDefault();

    setValue(key);
    setFieldValue(name, value);
  };

  const handleFocus = () => {
    openList();
  };

  const handleBlur = (e) => {
    setTimeout(() => {
      closeList();
    }, 100);
    /*   console.log(e.relatedTarget);
      if (!containerRef?.current.contains(e.relatedTarget)) {
      console.log("hello");
    }  */
  };

  const handleCloseClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeList();
    resetValue();
  };
  return (
    <Container ref={containerRef} style={{ position: "relative" }}>
      {cargoPicker && icon}
      {cargoPicker ? (
        <CargoPicker.ContentInnerWrapper>
          <CargoPicker.Input
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(e) => updateQuery(e)}
            placeholder={title}
            value={value}
            style={inputStyle}
            {...inputProps}
            className="search-padding"
          />
          <CargoPicker.Text>{text}</CargoPicker.Text>
        </CargoPicker.ContentInnerWrapper>
      ) : (
        <InputContainer>
          <Input onChange={(e) => updateQuery(e)} className="search-padding"/>
        </InputContainer>
      )}

      {showList && displayedList?.length ? (
        <List>
          {displayedList.map(({ key, value }) => (
            <Item key={key}>
              <Button onClick={(e) => handleItemBtnClick(e, key, value)}>
                {searchboxIcon ? searchboxIcon : null}
                <p>{key}</p>
              </Button>
            </Item>
          ))}
        </List>
      ) : null}
      {cargoPicker && showList && list?.length ? (
        <CargoPicker.ButtonSmall onClick={handleCloseClick}>
          <CircledCrossIcon />
        </CargoPicker.ButtonSmall>
      ) : null}
    </Container>
  );
}

export default SearchboxLogic;
