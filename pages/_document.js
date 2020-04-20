import Document, { Html, Head, Main, NextScript } from 'next/document'
import GoogleTagManager from '../components/tagManager';
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
        <GoogleTagManager gtmId="GTM-5SSJRB7" />
        {/* <div id="fb-root"></div> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument