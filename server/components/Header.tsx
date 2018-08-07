import Head from "next/head";
import * as React from "react";

export default class Header extends React.Component {
  public render() {
    return (
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossOrigin="anonymous"
        />

        <link
          rel="shortcut icon"
          href="static/imgs/Icone.png"
          type="image/x-icon"
        />
        <link rel="icon" href="static/imgs/Icone.png" type="image/x-icon" />

        <title>Jogo da velha do clan</title>
      </Head>
    );
  }
}
