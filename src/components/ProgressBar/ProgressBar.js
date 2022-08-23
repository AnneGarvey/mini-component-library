/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const HEIGHTS = {
  small: 8,
  medium: 12,
  large: 16
};

const Wrapper = styled.div`
  width: 370px;
  background: ${COLORS.transparentGray15};
  border-radius: ${p => p.size === 'large' ? 8 : 4}px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: ${p => p.size === 'large' && '4px'};
`;

const Trimmer = styled.div`
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled.div`
  background-color: ${COLORS.primary};
  width: ${p => p.value}%;
  height: ${p => HEIGHTS[p.size]}px;
`;

const ProgressBar = ({ value, size, ariaLabel, ariaLabelledBy }) => {
  return <Wrapper size={size}>
    <Trimmer>
      <Progress role="progressbar" value={value} aria-label={ariaLabel} aria-labelledby={ariaLabelledBy} size={size} />
    </Trimmer>
  </Wrapper>
};

export default ProgressBar;
