/**
 * More clear way of translating px to em
 * People are more familiar with px values so in CSS if they can see the px value and then code transforms for them
 * @param px the expected end 'px' value
 * @param base the parent 'base' font-size
 * @returns a px number transformed into em
 */
export const pxToEm = (px: number, base = 16): string => {
  return `${isNaN(px / base) ? 0 : px / base}em`;
};
