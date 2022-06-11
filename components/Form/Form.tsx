import { FormEventHandler, ReactNode } from 'react';

import styles from './Form.module.css';

type Props = {
  children: ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement> | undefined;
};

export const Form = ({ children, onSubmit }: Props) => (
  <form onSubmit={onSubmit} className={styles.form}>
    {children}
  </form>
);
