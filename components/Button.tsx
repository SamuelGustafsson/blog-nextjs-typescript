import React from 'react';
import { ReactNode } from 'react';

import styles from './Button.module.css';

type ButtonStyles = 'neutral' | 'danger' | 'success';

type Props = {
  children: ReactNode;
  onClick?: () => void;
  theme?: ButtonStyles;
  type?: 'submit' | 'reset' | 'button';
};

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ theme, children, onClick }, ref) => {
    const defaultStyle: ButtonStyles = 'neutral';

    return (
      <button
        ref={ref}
        className={styles[theme ?? defaultStyle]}
        onClick={onClick}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
