import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoMdAddCircleOutline } from 'react-icons/io';

import styles from './Header.module.css';

export const Header = () => {
  const router = useRouter();

  const showAddPostButton = !['/blog/add', '/blog/edit'].includes(
    router.pathname,
  );

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.container}>
        <span>
          <Link href="/blog">
            <a>
              <Image
                src="/ica-logo.svg"
                alt="Vercel Logo"
                width={66}
                height={46}
                priority={true}
              />
            </a>
          </Link>
        </span>

        {showAddPostButton && (
          <Link href="/blog/add">
            <a className={styles.addPostBtn} style={{ gridColumn: 3 }}>
              <IoMdAddCircleOutline size="24px" />
              Skapa inlägg
            </a>
          </Link>
        )}
      </header>
    </>
  );
};
