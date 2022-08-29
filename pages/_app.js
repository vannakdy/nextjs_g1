import '../styles/globals.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import "../public/css/reset.min.css";
import "../public/css/style.min.css";
import "../public/css/boxicons.min.css";
import 'react-slideshow-image/dist/styles.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Head>
          <meta charSet="utf-8" />
          <title>New Information Technology NIT</title>
          <meta name="description" content={"meta_description"} />
          <meta name="keywords" content={"meta_keyword"} />
          <meta property="og:title" content={"mata_title"} />
          <meta property="og:description" content={"meta_description"} />
          <style>
            <link rel="stylesheet" type="text/css" href="../public/css/reset.min.css"></link>
            <link rel="stylesheet" type="text/css" href="../public/css/style.min.css"></link>
            <link rel="stylesheet" type="text/css" href="../public/css/boxicons.min.css"></link>
          </style>
          {/* <meta property="og:image" content={Config.imagePath + meta_image} />
          <meta property="og:url" content={meta_url} /> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
