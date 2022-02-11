import React, { useEffect, useRef, useState } from "react";
// import { ref } from "yup";
// import { LoginModalContainer } from "../../containers";
import {
  Container,
  Title,
  Fieldset,
  FieldTitle,
  InputContainer,
  Input,
  Legend,
  Warn,
  Text,
  RadioLabel,
  Radio,
  Label,
  Textarea,
  InputBox,
  Section,
  CheckboxLabel,
} from "./styles/form";

const inputFieldVariants = {
  active: "active",
  warn: "warn",
  disabled: "disabled",
  filled: "filled",
};

function Form({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Form.Title = function FormTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Form.Fieldset = function FormFieldset({ children, ...rest }) {
  return <Fieldset {...rest}>{children}</Fieldset>;
};

Form.Legend = function FormLegend({ children, ...rest }) {
  return <Legend {...rest}>{children}</Legend>;
};

Form.Label = function FormLabel({ children, ...rest }) {
  return <Label {...rest}>{children}</Label>;
};

Form.InputBox = function FormInputBox({ children, ...rest }) {
  return <InputBox {...rest}>{children}</InputBox>;
};

Form.Section = function FormSection({ children, ...rest }) {
  return <Section {...rest}>{children}</Section>;
};

Form.CheckboxLabel = function FormCheckboxLabel({ children, ...rest }) {
  return <CheckboxLabel {...rest}>{children}</CheckboxLabel>;
};

Form.Warn = function FormWarn({ children, ...rest }) {
  return <Warn {...rest}>{children}</Warn>;
};

Form.FieldTitle = function FormFieldTitle({ children, ...rest }) {
  return <FieldTitle {...rest}>{children}</FieldTitle>;
};

Form.Textarea = function FormTextarea({ children, ...rest }) {
  return <Textarea {...rest}>{children}</Textarea>;
};

Form.RadioLabel = function FormRadioLabel({ children, ...rest }) {
  return <RadioLabel {...rest}>{children}</RadioLabel>;
};

Form.Radio = function FormRadio({ children, ...rest }) {
  return <Radio type="radio" {...rest} />;
};

Form.InputField = function InputField(props) {
  const {
    type = "text",
    id,
    name,
    label,
    variantProp,
    children,
    setFieldTouched,
    ...rest
  } = props;

  const [variant, setVariant] = useState(variantProp || "");
  const { active, filled, /*disabled, warn*/ } = inputFieldVariants;
  const inputRef = useRef();

  useEffect(() => {
    setVariant(variantProp);
  }, [variantProp]);

  const handleBlur = (e) => {
    setTimeout(() => setFieldTouched(name, true), 100);

    if (!e.currentTarget.value) {
      return setVariant("");
    }
    setVariant(filled);
  };

  const handleFocus = () => {
    setVariant(active);
  };
  useEffect(() => {
    if (variantProp) {
      return setVariant(variantProp);
    }
    const { activeElement } = document;
    if (activeElement === inputRef.current) {
      return setVariant(active);
    }
    setVariant("");
  }, [variantProp, active]);

  return (
    <Fieldset variant={variant}>
      <InputContainer {...rest}>
        <Input
          id={id}
          name={name}
          type={type}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={inputRef}
        />
        <Label htmlFor={id} variant={variant}>
          {label}
        </Label>
      </InputContainer>
    </Fieldset>
  );
};

Form.Text = function FormText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

Form.InputContainer = function FormInputContainer({ children, ...rest }) {
  return <InputContainer {...rest}>{children}</InputContainer>;
};

Form.Input = function FormInput({ ...rest }) {
  return <Input {...rest} />;
};

export default Form;
