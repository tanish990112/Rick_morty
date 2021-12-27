import '../styles/globals.scss'
import Layout from '../components/layout';
import Head from 'next/head'

function MyApp({ Component, pageProps}) {
  return (
    <Layout>
       <Head>
        <title>Rick And Morty</title>
        <meta name="description" content="Rick and Morty Info" />
      </Head>
      
      <Component {...pageProps}/>
    </Layout>
  );
}

export default MyApp
