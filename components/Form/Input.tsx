import React from 'react';

import styles from './Input.module.css';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => (
  <input className={styles.input} ref={ref} {...props} />
));

Input.displayName = 'Input';
