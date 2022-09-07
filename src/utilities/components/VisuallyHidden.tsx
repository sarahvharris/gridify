import { styled, config } from '../../../stitches.config';
import type * as Stitches from '@stitches/react';

export const VisuallyHidden = styled('span', {
  ...config.utils.visuallyHidden(),
});

export type VisuallyHiddenProps = Stitches.VariantProps<typeof VisuallyHidden>;
