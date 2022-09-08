import { styled, config } from '../../../stitches.config';

import { DismissButton, pxToEm } from '../../utilities';

export const StyledModal = styled('div', {
  display: 'block',
  position: 'fixed',
  zIndex: 3,
});

export const StyledModalOverlay = styled('div', {
  backgroundColor: 'black',
  height: '100%',
  left: '0',
  opacity: '0.5',
  position: 'fixed',
  top: '0',
  width: '100%',

  variants: {
    isOpen: {
      true: {
        display: 'block',
      },
      false: {
        display: 'none',
      },
    },
  },
});

export const StyledModalDialog = styled('div', {
  ...config.utils.spacingNormalizer(),
  alignItems: 'baseline',
  backgroundColor: 'white',
  border: '1px solid black',
  borderRadius: '5px',
  gridTemplateColumns: '1fr auto',
  gridTemplateRows: 'auto',
  gridColumnGap: pxToEm(10),
  lineHeight: '1.5',
  maxWidth: pxToEm(500),
  padding: pxToEm(16),
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 4,

  '&:focus': {
    outline: '1px solid black',
  },

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

  defaultVariants: {
    isOpen: 'false',
  },
});

export const StyledModalContent = styled('div', {
  ...config.utils.typographyNormalizer(),
  gridArea: '1 / 1 / 1 / 1',
});

export const StyledModalDismissBtn = styled(DismissButton, {
  gridArea: '1 / 2 / 1 / 2',
});

export const StyledModalTitle = styled('h2', {
  ...config.utils.spacingNormalizer(),
});
