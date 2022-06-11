import { ReactNode } from 'react';

import styles from './InputContainer.module.css';

type Props = {
  children: ReactNode;
};

export const InputContainer = ({ children }: Props) => (
  <div className={styles.inputContainer}>{children}</div>
);
