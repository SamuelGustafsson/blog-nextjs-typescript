import { ReactNode } from 'react';

import styles from './GalleryWrapper.module.css';

type Props = {
  children: ReactNode;
};
export default function GallaryWrapper({ children }: Props) {
  return <section className={styles.container}>{children}</section>;
}
