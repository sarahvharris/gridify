import React, {
  ElementType,
  FC,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  StyledModal,
  StyledModalContent,
  StyledModalDialog,
  StyledModalDismissBtn,
  StyledModalOverlay,
  StyledModalTitle,
} from './Modal.styles';

export interface ModalType {
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
}

/**
 * I am no designer so I am using [Radix UI](https://www.radix-ui.com/docs/primitives/components/dialog) as reference
 */
export const Modal: FC<ModalType> = ({
  children,
  dismissButtonVhText,
  isOpen,
  onClose,
  onOpen,
  title,
  titleElementType,
  zIndex, // TODO: gotta figure out how to dynamically set it
  ...props
}: ModalType) => {
  const [initBodyOverflow, setInitBodyOverflow] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);
  const modalDialogRef = useRef<HTMLDivElement>(null);

  const onCloseHandler = () => {
    document.body.style.overflow = initBodyOverflow;
    onClose?.();
  };

  const onOpenHandler = () => {
    setInitBodyOverflow(document.body.style.overflow);
    document.body.style.overflow = 'hidden';
    onOpen?.();
  };

  const dismissModal = () => {
    onCloseHandler();
  };

  useEffect(() => {
    if (isOpen && modalDialogRef && modalDialogRef.current) {
      onOpenHandler();
      modalDialogRef.current.focus();
    }
  }, [isOpen]);

  return (
    <StyledModal ref={modalRef}>
      <StyledModalOverlay isOpen={isOpen} />
      <StyledModalDialog
        isOpen={isOpen}
        aria-modal="true"
        ref={modalDialogRef}
        role="dialog"
        tabIndex={-1}
        {...props}
      >
        <StyledModalContent>
          <StyledModalTitle as={titleElementType}>{title}</StyledModalTitle>
          <StyledModalContent>{children}</StyledModalContent>
        </StyledModalContent>
        <StyledModalDismissBtn
          dismissButtonVhText={dismissButtonVhText}
          onClick={dismissModal}
        />
      </StyledModalDialog>
    </StyledModal>
  );
};

Modal.defaultProps = {
  dismissButtonVhText: 'dismiss dialog',
  isOpen: false,
  titleElementType: 'h1',
  zIndex: 3,
};

export default Modal;
