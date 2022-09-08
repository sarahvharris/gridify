import { styled, config } from '../../../stitches.config';

import { DismissButton, pxToEm } from '../../utilities';

// TODO: colors, spacing and other primitives will be moved to the sitches config as 'theme' styles

export const StyledAlert = styled('div', {
  ...config.utils.spacingNormalizer(),
  alignItems: 'baseline',
  display: 'grid',
  gridTemplateRows: 'auto',
  gridColumnGap: pxToEm(10),
  lineHeight: 1.5,
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
        backgroundColor: '#ECF4EE',
      },
      error: {
        backgroundColor: '#FCF1EF',
      },
      warning: {
        backgroundColor: '#FDF1DD',
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
  // using grid-area vs grid-template-area as stitches doesnt like non-string/number values
  gridArea: '1 / 1 / 1 / 1',
  backgroundColor: '#000000',
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
