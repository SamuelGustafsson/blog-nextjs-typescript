import styles from './GalleryItem.module.css';

export type Props = {
  title: string;
  content: string;
  createdAt: string;
};

export default function GallaryItem({ title, content, createdAt }: Props) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p>{content}</p>
      <em>{createdAt}</em>
    </div>
  );
}
