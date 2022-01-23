import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en-us">
        <Head>
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TL56QJD');`,
            }}
          ></script>
          {/* <link
            rel="stylesheet"
            href="/public/assets/font/RammettoOne-Regular.ttf"
            as="font"
            crossOrigin=""
          /> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body style={{ height: "100vh" }}>
          <noscript>
            <iframe
              loading="lazy"
              src="https://www.googletagmanager.com/ns.html?id=GTM-TL56QJD"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript mode="defer" />
        </body>
      </Html>
    )
  }
}
