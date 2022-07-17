import type { NextPageContext } from 'next';
import Head from 'next/head';
import Navbar from '@molecules/m-navbar';
import Footer from '@molecules/m-footer';

function withWrapper(WrappedComponent: any) {
  const withThing = (props: any) => {
    return (
      <div className="font-Theme">
        <Head>
          <title>apply pay</title>
          <link rel="icon" href="/" />
          <meta name="title" content="apply pay" />
          <meta name="description" content="apply pay" />
          <meta property="og:image" content="apply pay" key="og:image" />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="apply pay" />
          <meta property="og:title" content="apply pay" />
          <meta property="og:description" content="apply pay" />
          <meta property="og:image" content="apply pay" key="og:image" />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="apply pay" />
          <meta property="twitter:title" content="apply pay" />
          <meta property="twitter:description" content="apply pay" />
          <meta property="twitter:image" content="apply pay" key="og:image" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fascinate&family=Montserrat:wght@200;400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200&display=swap"
            rel="stylesheet"
          />
        </Head>

        <Navbar />
        <main className="min-h-[100vh]">
          <WrappedComponent {...props} />
        </main>
        <Footer />
      </div>
    );
  };

  withThing.getInitialProps = async ({ req }: NextPageContext) => {
    const host = req?.headers;
    return { host };
  };

  return withThing;
}
export default withWrapper;
