import React, { ElementType, FC, ReactNode, useRef } from 'react';
import { VisuallyHidden } from '../../utilities';
import {
  StyledAlert,
  StyledAlertContent,
  StyledAlertDismissBtn,
  StyledAlertIcon,
  StyledAlertTitle,
} from './Alert.styles';

export interface AlertType {
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
  variant?: 'success' | 'error' | 'warning' | undefined;
}

/**
 * I am no designer so I am using [Pajamas Design System's Alert](https://design.gitlab.com/components/alert) as reference
 */
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

  return (
    <StyledAlert
      dismissible={dismissible}
      ref={alertRef}
      variant={variant}
      {...props}
    >
      <StyledAlertIcon></StyledAlertIcon>
      <StyledAlertContent>
        <StyledAlertTitle as={titleElementType}>{title}</StyledAlertTitle>
        {children}
      </StyledAlertContent>
      {dismissible ? (
        <StyledAlertDismissBtn onClick={dismissAlert}>
          <VisuallyHidden>{dismissButtonVhText}</VisuallyHidden>x
        </StyledAlertDismissBtn>
      ) : null}
    </StyledAlert>
  );
};

Alert.defaultProps = {
  dismissButtonVhText: 'dismiss message',
  dismissible: true,
  titleElementType: 'h2',
  variant: 'success',
};

export default Alert;
