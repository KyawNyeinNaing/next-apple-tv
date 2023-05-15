import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Router from 'next/router';
import { Provider } from 'react-redux';
import { ParallaxProvider } from 'react-scroll-parallax';

// third party imports
import { ThemeProvider } from 'styled-components';
import NProgress from 'nprogress';

// project imports
import { colors, font } from '@/components/constant';
import { wrapper } from '@/store';

// styles
import 'nprogress/nprogress.css';
import '@/styles/globals.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'react-nice-scroll/dist/styles.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

NProgress.configure({
  minimum: 0.3,
  easing: 'ease-in-out',
  speed: 800,
  showSpinner: false,
});

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const theme = {};

  return (
    <SessionProvider session={props.pageProps.session}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ThemeProvider theme={colors}>
            <ThemeProvider theme={font}>
              <ParallaxProvider>
                <Component {...props.pageProps} />
              </ParallaxProvider>
            </ThemeProvider>
          </ThemeProvider>
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  );
};

export default App;
