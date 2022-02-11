import React, { useRef } from "react";
import { Modal } from "../../components";

function DigitInputContainer(props) {
  const { handleChange, values } = props;
  const digit2Ref = useRef();
  const digit3Ref = useRef();
  const digit4Ref = useRef();

  const handleDigit_1Change = (e) => {
    const { current } = digit2Ref;
    handleChange(e);
    if (e.target.value.length >= 1) current?.focus();
  };

  
  const handleDigit_2Change = (e) => {
    const { current } = digit3Ref;
    handleChange(e);
    if (e.target.value.length >= 1) current?.focus();
  };

  const handleDigit_3Change = (e) => {
    const { current } = digit4Ref;
    handleChange(e);
    if (e.target.value.length >= 1) current?.focus();
  };

  const handleDigit_4Change = (e) => {
    const { current } = digit4Ref;
    handleChange(e);
    if (e.target.value.length >= 1) current?.blur();
  };



  return (
    <Modal.DigitInputWrapper>
      <Modal.DigitInput
        name="digit_1"
        onChange={handleDigit_1Change}
        value={values.digit_1}
        variant=""
      />
      <Modal.DigitInput
        name="digit_2"
        onChange={handleDigit_2Change}
        value={values.digit_2}
        variant=""
        ref={digit2Ref}
      />
      <Modal.DigitInput
        name="digit_3"
        onChange={handleDigit_3Change}
        value={values.digit_3}
        variant=""
        ref={digit3Ref}
      />
      <Modal.DigitInput
        name="digit_4"
        onChange={handleDigit_4Change}
        value={values.digit_4}
        variant=""
        ref={digit4Ref}
      />
    </Modal.DigitInputWrapper>
  );
}

export default DigitInputContainer;
