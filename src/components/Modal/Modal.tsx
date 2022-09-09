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
  StyledModalContentWrapper,
  StyledModalDialog,
  StyledModalDismissBtn,
  StyledModalOverlay,
  StyledModalTitle,
} from './Modal.styles';

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

// TODO: trap focus, focus on trigger on close

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
    <StyledModal css={{ zIndex: zIndex }} isOpen={isOpen} ref={modalRef}>
      <StyledModalOverlay />
      <StyledModalDialog
        aria-modal="true"
        ref={modalDialogRef}
        role="dialog"
        tabIndex={-1}
        {...props}
      >
        <StyledModalContentWrapper>
          <StyledModalTitle as={titleElementType}>{title}</StyledModalTitle>
          <StyledModalContent>{children}</StyledModalContent>
        </StyledModalContentWrapper>
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
