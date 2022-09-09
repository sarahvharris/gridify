import { styled, config } from '../../../stitches.config';
import { DismissButton, pxToRem } from '../../utilities';

// TODO: colors, spacing and other primitives will be moved to the sitches config as 'theme' styles

export const StyledAlert = styled('div', {
  ...config.utils.spacingNormalizer(),
  alignItems: 'baseline',
  display: 'grid',
  gridTemplateRows: 'auto',
  gridColumnGap: pxToRem(8),
  padding: pxToRem(12),

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
        border: '1px solid #217645',
        backgroundColor: '#ECF4EE',
      },
      error: {
        border: '1px solid #c91c00',
        backgroundColor: '#FCF1EF',
      },
      warning: {
        border: '1px solid #9e5400',
        backgroundColor: '#FDF1DD',
      },
    },
  },

  defaultVariants: {
    dismissible: true,
    variant: 'success',
  },
});

export const StyledAlertIcon = styled('div', {
  ...config.utils.typographyNormalizerHeading(),
  // using grid-area vs grid-template-area as stitches doesnt like non-string/number values
  gridArea: '1 / 1 / 1 / 1',
});

export const StyledAlertContentWrapper = styled('div', {
  gridArea: '1 / 2 / 1 / 2',
});

export const StyledAlertContent = styled('div', {
  ...config.utils.typographyNormalizer(),
  fontSize: pxToRem(14),
});

export const StyledAlertDismissBtnWrapper = styled('div', {
  gridArea: '1 / 3 / 1 / 3',
});

export const StyledAlertDismissBtn = styled(DismissButton, {
  // lets do math! icon is 24px, touch target is 44px
  // 44 - 24 = 20 / 2 = 10 + 1 (border) = 11
  marginTop: pxToRem(-11),
  marginRight: pxToRem(-11),

  '&:hover': {
    backgroundColor: '#FFFFFF',
  },
});

export const StyledAlertTitle = styled('h2', {
  ...config.utils.spacingNormalizer(),
  ...config.utils.typographyNormalizerHeading(),
  fontSize: pxToRem(18),
  fontWeight: '800',
});
