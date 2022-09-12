import React, { ElementType, FC, ReactNode, useEffect, useRef } from 'react';
import { hideOthers, Undo } from 'aria-hidden';
import FocusTrap from 'focus-trap-react';
import { RemoveScroll } from 'react-remove-scroll';

import { Portal } from '../../utilities';

import {
  StyledModal,
  StyledModalContent,
  StyledModalContentWrapper,
  StyledModalDialog,
  StyledModalDismissBtn,
  StyledModalOverlay,
  StyledModalTitle,
} from './Modal.styles';

export const Modal: FC<ModalType> = ({
  children,
  dismissButtonVhText,
  isOpen,
  onClose,
  onOpen,
  title,
  titleElementType,
  zIndex,
  ...props
}: ModalType) => {
  const modalDialogRef = useRef<HTMLDivElement>(null);
  let _undoAriaHidden: Undo;

  const onCloseHandler = () => {
    _undoAriaHidden();
    onClose?.();
  };

  const onOpenHandler = () => {
    // adding `setTimeout` as it reads better for NVDA
    setTimeout(() => {
      if (modalDialogRef) {
        _undoAriaHidden = hideOthers(modalDialogRef.current as HTMLElement);
        modalDialogRef.current?.focus();
      }
    });

    onOpen?.();
  };

  useEffect(() => {
    if (isOpen) onOpenHandler();
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <Portal>
          <RemoveScroll>
            <FocusTrap>
              <StyledModal css={{ zIndex: zIndex }}>
                <StyledModalOverlay onClick={onCloseHandler} />
                <StyledModalDialog
                  aria-modal="true"
                  ref={modalDialogRef}
                  role="dialog"
                  tabIndex={-1}
                  {...props}
                >
                  <StyledModalContentWrapper>
                    <StyledModalTitle as={titleElementType}>
                      {title}
                    </StyledModalTitle>
                    <StyledModalContent>{children}</StyledModalContent>
                  </StyledModalContentWrapper>
                  <StyledModalDismissBtn
                    dismissButtonVhText={dismissButtonVhText}
                    onClick={onCloseHandler}
                  />
                </StyledModalDialog>
              </StyledModal>
            </FocusTrap>
          </RemoveScroll>
        </Portal>
      )}
    </>
  );
};

export type ModalType = {
  children: ReactNode;
  /**
   * visually hidden text for the dismiss button, use for screen readers
   */
  dismissButtonVhText?: string;
  /**
   * determines if the Modal is open
   */
  isOpen?: boolean;
  /**
   * callback when Modal opens
   */
  onOpen?: () => void;
  /**
   * callback when Modal closes
   */
  onClose?: () => void;
  /**
   * content of the Modal title
   */
  title?: ReactNode;
  /**
   * HTML element type for the title
   */
  titleElementType?: ElementType;
  /**
   * z-index of the modal so it exceeds the content behind it
   */
  zIndex?: number;
};

Modal.defaultProps = {
  dismissButtonVhText: 'dismiss dialog',
  isOpen: false,
  titleElementType: 'h1',
  zIndex: 5,
};

export default Modal;
