import { FC, ReactElement, ReactPortal } from 'react';
import { createPortal } from 'react-dom';

export const Portal: FC<PortalTypes> = ({
  appendToEl,
  children,
}): ReactPortal => {
  return createPortal(children, appendToEl || document.body);
};

export type PortalTypes = {
  children?: ReactElement;
  appendToEl?: HTMLElement;
};

export default Portal;
