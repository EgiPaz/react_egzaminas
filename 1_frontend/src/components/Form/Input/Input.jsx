import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import {
  StyledInputField,
  StyledInputFieldWrapper,
  StyledHelperText,
} from './Input.style';

const Input = (props, ref) => {
  return (
    <div>
      <StyledInputFieldWrapper ref={ref}>
        {props.startIcon}
        <StyledInputField
          value={props.value}
          onChange={(e) => props.change(e.target.value)}
          hasIcon={!!props.startIcon}
          {...props}
        />
        {props.endIcon}
      </StyledInputFieldWrapper>
      {props.helperText && (
        <div>
          <StyledHelperText>{props.helperText}</StyledHelperText>
        </div>
      )}
    </div>
  );
};

export default forwardRef(Input);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
