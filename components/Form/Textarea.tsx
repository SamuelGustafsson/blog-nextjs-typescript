import React from 'react';

import styles from './Input.module.css';

type Props = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

// eslint-disable-next-line react/display-name
export const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  (props, ref) => <textarea className={styles.input} ref={ref} {...props} />,
);
