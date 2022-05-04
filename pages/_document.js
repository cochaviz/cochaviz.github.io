import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          {/* favicon - Copyright 2020 Twitter, Inc and other contributors */}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />

          {/* adjust dark/light mode to system theme */}
          <script dangerouslySetInnerHTML={{
            __html:
              "if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) { \
          document.documentElement.classList.add('dark') \
            } else { \
          document.documentElement.classList.remove('dark') \
            }"
          }} />
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
