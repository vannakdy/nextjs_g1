import '../styles/globals.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
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
          {/* <meta property="og:image" content={Config.imagePath + meta_image} />
          <meta property="og:url" content={meta_url} /> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
