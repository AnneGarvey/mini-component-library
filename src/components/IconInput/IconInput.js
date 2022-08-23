import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const isLarge = p => p.size === 'large';

const Wrapper = styled.fieldset`
  border-bottom: ${p => isLarge(p) ? 2 : 1}px solid ${COLORS.black};
  width: fit-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const StyledIcon = styled(Icon)`
  display: inline;

  svg {
    display: inline;
  }
`;

const Input = styled.input`
  font-family: 'Roboto';
  font-size: ${p => isLarge(p) ? 18 : 14}px;
  font-weight: 700;
  width: var(--width);
  border: none;
  margin-left: -${p => isLarge(p) ? 20 : 15}px;
  padding-left: ${p => isLarge(p) ? 30 : 20}px;
  padding-bottom: 4px;
  background: transparent;
  outline-offset: 4px;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
  
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder
}) => {
  const id = label.toLowerCase().replaceAll(' ', '-') + '-input';
  const isLarge = size === 'large';
  return <Wrapper size={size}>
    <VisuallyHidden><label for={id} >{label}</label></VisuallyHidden>
    <StyledIcon id={icon} size={isLarge ? 20 : 16} strokeWidth={isLarge && 2} />
    <Input style={{ "--width": width + 'px' }} placeholder={placeholder} id={id} size={size} />
  </Wrapper>;
};

export default IconInput;
