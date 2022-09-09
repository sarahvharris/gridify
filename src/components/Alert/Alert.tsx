import {
  CheckmarkFilled,
  ErrorFilled,
  WarningAltFilled,
} from '@carbon/icons-react';
import React, {
  CSSProperties,
  ElementType,
  FC,
  ReactNode,
  useRef,
} from 'react';
import {
  StyledAlert,
  StyledAlertContent,
  StyledAlertContentWrapper,
  StyledAlertDismissBtn,
  StyledAlertDismissBtnWrapper,
  StyledAlertIcon,
  StyledAlertTitle,
} from './Alert.styles';

// TYPES
const variant = ['error', 'success', 'warning'] as const;
export type VariantType = typeof variant[number];

export type AlertType = {
  children: ReactNode;
  /**
   * visually hidden text for the dismiss button, use for screen readers
   */
  dismissButtonVhText?: string;
  /**
   * determines if the Alert can be dismissed from the page
   */
  dismissible?: boolean;
  /**
   * title of the Alert
   */
  title?: ReactNode;
  /**
   * HTML element type for the title
   */
  titleElementType?: ElementType;
  /**
   * Alert variant type
   */
  variant?: VariantType;
  style?: CSSProperties;
};

export const Alert: FC<AlertType> = ({
  children,
  dismissButtonVhText,
  dismissible,
  title,
  titleElementType,
  variant,
  ...props
}: AlertType) => {
  const alertRef = useRef<HTMLDivElement>(null);

  const dismissAlert = () => {
    if (alertRef && alertRef.current) {
      alertRef.current.style.display = 'none';
    }
  };

  const renderAlertIcon = () => {
    switch (variant) {
      case 'error':
        return (
          <ErrorFilled
            color="#c91c00"
            style={{ display: 'inline', verticalAlign: 'text-top' }}
            size="20"
          />
        );
      case 'success':
        return (
          <CheckmarkFilled
            color="#217645"
            style={{ display: 'inline', verticalAlign: 'text-top' }}
            size="20"
          />
        );
      case 'warning':
        return (
          <WarningAltFilled
            color="#9e5400"
            style={{ display: 'inline', verticalAlign: 'text-top' }}
            size="20"
          />
        );
    }
  };

  return (
    <StyledAlert
      dismissible={dismissible}
      ref={alertRef}
      variant={variant}
      {...props}
    >
      <StyledAlertIcon>{renderAlertIcon()}</StyledAlertIcon>
      <StyledAlertContentWrapper>
        <StyledAlertTitle as={titleElementType}>{title}</StyledAlertTitle>
        <StyledAlertContent>{children}</StyledAlertContent>
      </StyledAlertContentWrapper>
      {dismissible ? (
        <StyledAlertDismissBtnWrapper>
          <StyledAlertDismissBtn
            dismissButtonVhText={dismissButtonVhText}
            onClick={dismissAlert}
          />
        </StyledAlertDismissBtnWrapper>
      ) : null}
    </StyledAlert>
  );
};

Alert.defaultProps = {
  dismissButtonVhText: 'dismiss message',
  dismissible: false,
  titleElementType: 'h2',
  variant: 'success',
};

export default Alert;
