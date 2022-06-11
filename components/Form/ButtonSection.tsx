import { ReactNode } from 'react';

import styles from './ButtonSection.module.css';

type Props = {
  children: ReactNode;
};

export const ButtonSection = ({ children }: Props) => (
  <div className={styles.buttons}>{children}</div>
);
