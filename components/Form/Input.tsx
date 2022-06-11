import React from 'react';

import styles from './Input.module.css';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

// eslint-disable-next-line react/display-name
export const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => (
  <input className={styles.input} ref={ref} {...props} />
));
