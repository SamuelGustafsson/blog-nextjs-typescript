import type { NextPage } from 'next';
import Link from 'next/link';

import GallaryItem from '@/components/GalleryItem';
import GalleryWrapper from '@/components/GalleryWrapper';
import { Jumbotron } from '@/components/Jumbotron';
import { useBlog } from '@/contexts/BlogContext';
import styles from '@/styles/Home.module.css';

const Home: NextPage = () => {
  const { posts } = useBlog();

  return (
    <div>
      <main className={styles.container}>
        <Jumbotron
          imagePath="https://assets.phenompeople.com/CareerConnectResources/prod/IGABSE/images/M8490-blog-1644497146848.jpg"
          alt="Jumbotron"
        />

        <div className={styles.postWrapper}>
          <GalleryWrapper>
            {posts.map(({ id, heading, preamble, slug, date }) => {
              const formattedCreatedAt = new Date(date).toLocaleDateString(
                'sv-SE',
              );
              return (
                <Link href={`/blog/${slug}`} key={id}>
                  <a>
                    <GallaryItem
                      title={heading}
                      content={preamble}
                      createdAt={formattedCreatedAt}
                    />
                  </a>
                </Link>
              );
            })}
          </GalleryWrapper>
        </div>
      </main>
    </div>
  );
};

export default Home;
