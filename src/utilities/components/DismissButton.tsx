import React, { FC } from 'react';
import { Close } from '@carbon/icons-react';
import { styled, config } from '../../../stitches.config';
import { pxToRem } from '../functions/pxToRem';
import { VisuallyHidden } from './VisuallyHidden';

export type DismissButtonType = {
  /**
   * visually hidden text for the dismiss button, use for screen readers
   */
  dismissButtonVhText?: string;
  /**
   * visually hidden text for the dismiss button, use for screen readers
   */
  onClick: () => void;
};

export const StyledDismissBtn = styled('button', {
  ...config.utils.typographyNormalizer(),
  alignItems: 'center',
  backgroundColor: 'transparent',
  border: 0,
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  height: pxToRem(44),
  width: pxToRem(44),

  '&:hover': {
    backgroundColor: '#F2F2F2',
  },

  '&:focus': {
    outline: '2px solid #000000',
  },
});

export const DismissButton: FC<DismissButtonType> = ({
  dismissButtonVhText,
  onClick,
  ...props
}: DismissButtonType) => {
  return (
    <StyledDismissBtn onClick={onClick} {...props}>
      <VisuallyHidden>{dismissButtonVhText}</VisuallyHidden>
      <Close size="24" color="#000000" />
    </StyledDismissBtn>
  );
};

export default DismissButton;
