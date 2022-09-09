import { styled, config } from '../../../stitches.config';
import { DismissButton, pxToRem } from '../../utilities';

// TODO: colors, spacing and other primitives will be moved to the sitches config as 'theme' styles

export const StyledModal = styled('div', {
  alignItems: 'center',
  display: 'grid',
  gridTemplateColumns: '1fr',
  // using a string as stitches makes this `px` vs unitless
  inset: '0',
  justifyItems: 'center',
  position: 'fixed',

  variants: {
    isOpen: {
      true: {
        display: 'grid',
      },
      false: {
        display: 'none',
      },
    },
  },
});

export const StyledModalOverlay = styled('div', {
  backgroundColor: '#000000',
  inset: '0',
  opacity: 0.5,
  position: 'fixed',
});

export const StyledModalDialog = styled('div', {
  ...config.utils.spacingNormalizer(),
  backgroundColor: '#FFFFFF',
  border: '1px solid #000000',
  borderRadius: '5px',
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gridTemplateRows: 'auto',
  gridColumnGap: pxToRem(10),
  margin: `0 ${pxToRem(20)}`,
  maxWidth: pxToRem(500),
  padding: pxToRem(16),
  position: 'relative',

  '&:focus': {
    outline: '1px solid #000000',
  },

  defaultVariants: {
    isOpen: 'false',
  },
});

export const StyledModalContentWrapper = styled('div', {
  // using grid-area vs grid-template-area as stitches doesnt like non-string/number values
  gridArea: '1 / 1 / 1 / 1',
});

export const StyledModalContent = styled('div', {
  ...config.utils.typographyNormalizer(),
  fontSize: pxToRem(14),
});

export const StyledModalDismissBtn = styled(DismissButton, {
  gridArea: '1 / 2 / 1 / 2',
});

export const StyledModalTitle = styled('h2', {
  ...config.utils.spacingNormalizer(),
  ...config.utils.typographyNormalizerHeading(),
  fontSize: pxToRem(24),
  fontWeight: '800',
});
