import Head from 'next/head';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer'
import '../styles/globals.css';
import 'swiper/swiper-bundle.css';
import {wrapper} from '../redux/store'

function MyApp({Component, pageProps}) {
  return (
    <div className="mb-5">
      <Head>
        <title>Tectony Create next.js</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
          crossOrigin="anonymous"
        />
      </Head>

      <Navbar />

      <Component {...pageProps} />

      <Footer />
      
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
        crossOrigin="anonymous"></script>
    </div>
  );
}

export default wrapper.withRedux(MyApp);
