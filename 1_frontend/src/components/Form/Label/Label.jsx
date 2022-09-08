import PropTypes from 'prop-types';
import { StyledLabel } from './Label.style';

const Label = ({ name, text }) => {
  return <StyledLabel htmlFor={name}>{text}</StyledLabel>;
};

export default Label;

Label.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
