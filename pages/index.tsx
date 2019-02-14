import * as React from 'react';
import Head from 'next/head';

import '../style.css';

import Hello from '../components/hello.md';

const App = () => (
  <div>
    <Head>
      <title>Pranam Gurung</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Pranam gurung's developer portfolio" />
      <meta
        name="keywords"
        content="Pranam, Gurung, React, Javascript, Next, MDX, Typescript"
      />
      <meta name="author" content="Pranam Gurung" />
    </Head>
    <div className="container">
      <div className="header">
        <h1>Pranam Gurung</h1>
      </div>
      <Hello />
    </div>
  </div>
);

export default App;
