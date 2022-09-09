import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {},
  media: {},
  utils: {
    spacingNormalizer: () => ({
      boxSizing: 'border-box',
      margin: '0',
      padding: '0',
    }),
    typographyNormalizer: () => ({
      fontFamily: 'Inter, san-serif',
      letterSpacing: '0.2',
      lineHeight: '1.5',
    }),
    typographyNormalizerHeading: () => ({
      fontFamily: 'Inter, san-serif',
      letterSpacing: '0.2',
      lineHeight: '1.5',
    }),
    visuallyHidden: () => ({
      clip: 'rect(0 0 0 0)',
      'clip-path': 'inset(50%)',
      height: 1,
      overflow: 'hidden',
      position: 'absolute',
      whiteSpace: 'nowrap',
      width: 1,
    }),
  },
});
