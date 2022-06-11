import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button } from '@/components/Button';
import { useBlog } from '@/contexts/BlogContext';
import styles from '@/styles/Post.module.css';

function BlogPage() {
  const router = useRouter();
  const { deletePost, getPostBySlug } = useBlog();

  const slug = router.query?.slug;

  const post = slug && getPostBySlug(slug.toString());

  if (!post) return <div>Hoppasan det gick inte att läsa detta inlägget?</div>;
  const formattedCreatedAt = new Date(post.date).toLocaleDateString('sv-SE');

  if (post)
    return (
      <div className={styles.container}>
        <header className={styles.head}>
          <h1 className={styles.title}>{post.heading}</h1>
        </header>

        <main className={styles.main}>
          <Image
            className={styles.image}
            src="https://picsum.photos/430/285"
            alt="jumbotron"
            height="285px"
            width="430px"
            layout="responsive"
          />
          <div>
            <h2>{post.heading}</h2>
            <div className={styles.preambleContainer}>
              <p>
                <em className={styles.createdAt}>
                  Publicerat {formattedCreatedAt}
                </em>
              </p>
              <em className={styles.preamble}>{post.preamble}</em>
            </div>
          </div>
          <p className={styles.content}>{post.text}</p>
          <div className={styles.authorContainer}>
            <strong>{post.author.name}</strong>
            <a href={`mailto:${post.author.email}`}>
              <strong>{post.author.email}</strong>
            </a>
          </div>
          <div className={styles.buttons}>
            <Link href={`${post.slug}/edit`}>
              <Button>Editera post</Button>
            </Link>
            <Button theme="danger" onClick={() => deletePost(post.id)}>
              Ta bort
            </Button>
          </div>
        </main>
      </div>
    );
}

export default BlogPage;
