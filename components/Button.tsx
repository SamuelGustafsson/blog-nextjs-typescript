import { ReactNode } from 'react';

import styles from './Button.module.css';

type ButtonStyles = 'neutral' | 'danger' | 'success';

type Props = {
  children: ReactNode;
  onClick?: () => void;
  theme?: ButtonStyles;
  type?: 'submit' | 'reset' | 'button';
};

export const Button = ({ theme, children, onClick }: Props) => {
  //   const buttonStyle = type ? styles[type] : styles.neutral;
  const defaultStyle: ButtonStyles = 'neutral';

  return (
    <button className={styles[theme ?? defaultStyle]} onClick={onClick}>
      {children}
    </button>
  );
};
