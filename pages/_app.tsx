import '../styles/globals.css';

import type { AppProps } from 'next/app';

import { Header } from '@/components/Header';
import { BlogProvider } from '@/contexts/BlogContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BlogProvider>
        <>
          <Header />
          <Component {...pageProps} />
        </>
      </BlogProvider>
    </>
  );
}

export default MyApp;
