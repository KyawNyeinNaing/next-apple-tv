import React, { useEffect } from 'react';
import nextCookie from 'next-cookies';
import Router from 'next/router';
import { logout } from '../services/Auth';

export const auth = (ctx: any) => {
  const { token } = nextCookie(ctx);

  if (!token) {
    if (typeof window === 'undefined') {
      ctx.res.writeHead(302, { Location: '/login' });
      ctx.res.end();
    } else {
      Router.push('/login');
    }
  }

  return { token };
};

export const withAuth = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const { token } = props;

    if (!token) {
      logout();
    }

    return <WrappedComponent {...props} />;
  };

  Wrapper.getInitialProps = async (ctx: any) => {
    const { token } = auth(ctx);
    const componentProps = WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));

    return { ...componentProps, token };
  };

  return Wrapper;
};
