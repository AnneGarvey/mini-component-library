import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.fieldset`
  position: relative;
  width: fit-content;

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
`;

const Visual = styled.div`
  font-family: 'Roboto';
  font-size: 1rem;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border-radius: 8px;
  padding: 12px 16px;
  padding-right: 52px;
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
