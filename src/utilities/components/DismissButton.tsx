import React, { FC } from 'react';
import { styled, config } from '../../../stitches.config';
import { pxToEm } from '../functions/pxToEm';
import { VisuallyHidden } from '../';

export interface DismissButtonType {
  /**
   * visually hidden text for the dismiss button, use for screen readers
   */
  dismissButtonVhText?: string;
  /**
   * visually hidden text for the dismiss button, use for screen readers
   */
  onClick: () => void;
}

export const StyledDismissBtn = styled('button', {
  ...config.utils.typographyNormalizer(),
  fontSize: pxToEm(16),
  height: pxToEm(44),
  width: pxToEm(44),
});

export const DismissButton: FC<DismissButtonType> = ({
  dismissButtonVhText,
  onClick,
  ...props
}: DismissButtonType) => {
  return (
    <StyledDismissBtn onClick={onClick} {...props}>
      <VisuallyHidden>{dismissButtonVhText}</VisuallyHidden>x
    </StyledDismissBtn>
  );
};

export default DismissButton;
