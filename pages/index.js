import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amit Kurud</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.description}>
          Welcome to my portfolio, it will be ready in few days.
        </h1>
      </main>

      <footer className={styles.footer}>
        Copyright: - Amit Kurud
      </footer>
    </div>
  )
}
