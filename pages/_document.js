import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className='dark' lang="en-US">
        <Head>
          {/* google fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          {/* Fira Code */}
          <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          {/* Source Pro */}
          <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
          {/* Noto Emoji */}
          <link href="https://fonts.googleapis.com/css2?family=Noto+Emoji:wght@700&display=swap" rel="stylesheet" />

          {/* favicon - Copyright 2020 Twitter, Inc and other contributors */}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
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
