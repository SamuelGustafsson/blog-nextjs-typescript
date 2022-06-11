import styles from './InputErrorMessage.module.css';

type Props = {
  message: string;
};

export const InputErrorMessage = ({ message }: Props) => (
  <span className={styles.fieldError}>{message}</span>
);
