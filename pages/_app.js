import React from "react";
import '../public/global.scss'
import AppLayout from "../src/components/composite/Layout"

import { wrapper } from "@/redux/store";
import App from 'next/app';
import Head from "next/head";

class HomeApp extends App {

  static getInitialProps = wrapper.getInitialAppProps(store => async ({ Component, ctx }) => {

  });
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        </Head>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </>

    );
  }
}


export default wrapper.withRedux(HomeApp)