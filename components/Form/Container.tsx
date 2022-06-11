import { ReactNode } from 'react';

import styles from './Container.module.css';

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => (
  <section className={styles.container}>{children}</section>
);
