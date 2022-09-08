import { forwardRef } from 'react';
import Input from '../Input/Input';
import Label from '../Label/Label';
import { StyledFormInput } from './FormInput.style';
const FormInput = (
  { name, text, type, id, value, change, startIcon, endIcon, helperText },
  ref
) => {
  return (
    <StyledFormInput>
      <Label name={name} text={text} />
      <Input
        type={type}
        id={id}
        startIcon={startIcon}
        endIcon={endIcon}
        ref={ref}
        value={value}
        change={change}
        helperText={helperText}
      />
    </StyledFormInput>
  );
};

export default forwardRef(FormInput);
