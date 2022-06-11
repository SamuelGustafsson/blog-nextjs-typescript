import Image from 'next/image';

import styles from './Jumbotron.module.css';

type Props = {
  imagePath: string;
  alt?: string;
};

export const Jumbotron = ({ imagePath }: Props) => (
  <div className={styles.container}>
    <Image
      className={styles.image}
      src={imagePath}
      alt="jumbotron"
      height="480px"
      width="1200"
      layout="intrinsic"
      objectFit="cover"
    />
  </div>
);
