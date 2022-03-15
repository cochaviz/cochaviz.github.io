import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Mono&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* clicky traffic analysis */}
          <script async src="//static.getclicky.com/101354370.js"></script>
          <noscript><p><img alt="Clicky" width="1" height="1" src="//in.getclicky.com/101354370ns.gif" /></p></noscript>
        </body>
      </Html>
    )
  }
}

export default MyDocument
