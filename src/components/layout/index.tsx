import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ScrollContainer } from 'react-nice-scroll';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyle } from '@/components/constant';
import useResponsive from '@/hooks/useMediaQuery';
import Header from './Header';
import { getToken } from '@/services/Auth';

type Props = {
  keyword?: string;
  desc?: string;
  metaTitle?: string;
  children: React.ReactNode;
  className?: string;
};

const Layout: React.FC<Props> = ({ children }) => {
  const { isMobile } = useResponsive();
  const token = getToken();

  // console.log(token);

  return (
    <>
      <GlobalStyle />
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Code Test</title>
        <link rel="icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Main className={`overflow-hidden ${!isMobile ? 'mt-[88px]' : 'mt-[60px]'}`}>
        <Header />
        <article className="overflow-hidden">{children}</article>
      </Main>
    </>
  );
};

export default Layout;

const Main = styled.div`
  article {
    min-height: calc(100vh - 115px);
  }
`;
