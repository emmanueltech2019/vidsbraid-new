// app/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Best Rated Hair Braids Salon - VidBraids Artistic Hair Braiding Services</title>
          <meta description="Experience the beauty of hair braids with VID hair salon in Sandy Springs, Georgia. Our hair braids are not only stylish but protective for your natural hair."></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
