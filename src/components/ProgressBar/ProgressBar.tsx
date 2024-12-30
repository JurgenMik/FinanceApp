import React from 'react';
import styled from 'styled-components';
import type { ProgressBarProps } from '../../interfaces';

const ProgressContainer = styled.div`
  width: 100%; 
  height: 1.75rem;
  background-color: hsl(30, 36%, 96%); 
  border-radius: 0.25rem;
`;

const ProgressBarInner = styled.div<{ width: number; theme: string }>`
  height: 100%;
  width: ${({ width }) => width}%;
  max-width: 100%;
  background-color: ${({ theme }) => theme}; 
  border-radius: 0.25rem; 
`;

function ProgressBar({max, progress, theme}: ProgressBarProps) {

  const progressPercentage = (progress / max) * 100;

  return (
    <ProgressContainer>
      <ProgressBarInner
        width={progressPercentage}
        role="progressbar"
        theme={theme}
        aria-valuenow={progress}
        aria-valuemax={max}
      />
    </ProgressContainer>
  );
}

export default ProgressBar;