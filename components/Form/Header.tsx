import { ReactNode } from 'react';

import styles from './Header.module.css';

type Props = {
  children: ReactNode;
};

export const Header = ({ children }: Props) => (
  <h4 className={styles.header}>{children}</h4>
);
