import { ReactNode } from 'react';

import styles from './FieldSet.module.css';

type Props = {
  children: ReactNode;
};

export const FieldSet = ({ children }: Props) => (
  <fieldset className={styles.fieldset}>{children}</fieldset>
);
