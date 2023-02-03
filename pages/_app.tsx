import React from 'react';

import Head from 'next/head';

import { GlobalContextProvider } from '../contexts/globalContext';

import { store } from '../store'
import { Provider } from 'react-redux'

function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
      </Head>
      <Provider store={store}>
        <GlobalContextProvider>
          <Component {...pageProps} />
        </GlobalContextProvider>
      </Provider>

    </>
  );
}

export default App;