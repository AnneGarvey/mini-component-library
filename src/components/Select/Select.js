import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.fieldset`
  position: relative;
  width: fit-content;
  isolation: isolate;

  &:hover {
    color: ${COLORS.black};
  }
`;

const Native = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 2;
`;

const Visual = styled.div`
  font-family: 'Roboto';
  font-size: 1rem;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border-radius: 8px;
  padding: 12px 16px;
  padding-right: 52px;

  ${Native}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${Native}:hover + & {
    color: ${COLORS.black};
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 8px;
  right: 10px;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  return (
    <Wrapper>
      <Native value={value} onChange={onChange} label={label}>
        {children}
      </Native>
      <Visual>{displayedValue} <StyledIcon id="chevron-down" size={24} /></Visual>
    </Wrapper>
  );
};

export default Select;
