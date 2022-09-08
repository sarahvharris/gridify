import { styled, config } from '../../../stitches.config';

import { DismissButton, pxToEm } from '../../utilities';

export const StyledAlert = styled('div', {
  ...config.utils.spacingNormalizer(),
  alignItems: 'baseline',
  display: 'grid',
  gridTemplateRows: 'auto',
  gridColumnGap: pxToEm(10),
  lineHeight: '1.5',
  padding: pxToEm(16),

  variants: {
    dismissible: {
      true: {
        gridTemplateColumns: 'auto 1fr auto',
      },
      false: {
        gridTemplateColumns: 'auto 1fr',
      },
    },
    variant: {
      success: {
        backgroundColor: '#ecf4ee',
      },
      error: {
        backgroundColor: '#fcf1ef',
      },
      warning: {
        backgroundColor: '#fdf1dd',
      },
    },
  },

  defaultVariants: {
    dismissible: true,
    variant: 'success',
  },
});

export const StyledAlertIcon = styled('span', {
  display: 'inline',
  gridArea: '1 / 1 / 1 / 1',
  backgroundColor: 'black',
  width: pxToEm(16),
  height: pxToEm(16),
});

export const StyledAlertContent = styled('div', {
  ...config.utils.typographyNormalizer(),
  gridArea: '1 / 2 / 1 / 2',
});

export const StyledAlertDismissBtn = styled(DismissButton, {
  gridArea: '1 / 3 / 1 / 3',
});

export const StyledAlertTitle = styled('h2', {
  ...config.utils.spacingNormalizer(),
});
