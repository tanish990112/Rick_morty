import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import icon from '../public/icon.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rick And Morty</title>
        <meta name="description" content="Rick and Morty Info" />
      </Head>
      

      <main className={styles.main}>
      <Image src ={icon} height={300} width={300}/>
        
        <h1 className={styles.title}>
          Welcome Rick and Morty Info page.
        </h1>
        

        <p className={styles.description}>
          You Can Navigate to Episodes And Characters Page from here.
        </p>
        <div className={styles.grid}>
        <Link href='/episodes'>
          <a className= {styles.card}>
          <h2>Episodes &rarr;</h2>
          Find in-depth information about The Episodes from here.</a>
        </Link>
        
        <Link href='/characters'>
          <a className = {styles.card}>
            <h2>Characters &rarr;</h2>
          Find in-depth information about The Characters from here.
          </a>
        </Link>
      </div>
      </main>
    </div>
  )
}
