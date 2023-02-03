import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { GetStaticProps } from 'next'

import { useRouter } from 'next/router';
import { en } from '../locales/en';
import { ru } from '../locales/ru';
import { ge } from '../locales/ge';

import { productsListLocale } from '../constants'

import { Flags } from './Flags'
import { useLocale } from '../hooks'

import { Backet } from './Backet'
import Modal from '../components/modal'
import { useAppSelector } from '../hooks'

type Post = {
  author: string
  content: string
}




export const getStaticProps: GetStaticProps<{ post: Post[] }> = async () => {
  return {
    props: {
      post:
        [{ author: 'Dmitry', content: 'text' }],
    } // will be passed to the page component as props
  }
}

export default function Home(props) {

  const { language, t } = useLocale() 

  // const router = useRouter();
  // const getLocale = () => {
  //   if (router.locale === 'en') return 'en'
  //   if (router.locale === 'ru') return 'ru'
  //   return 'ge'
  // }

  // const t = router.locale === 'en' ? en : (router.locale === 'ru' ? ru : ge)


  console.log('props=', props)
  const state = useAppSelector((state) => state)

  return (
    <div className={styles.container}>
      {state.modal.isShow && <Modal />}


      <Flags />
      <Link href="/posts/first-post">this page!</Link>
      <h1>{t.title}</h1>


      {/* <Image
        src="/images/image.png" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      /> */}

      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Backet />

        {
          productsListLocale[language].map(el => {
            return (
              <div key={el.id}>
                <div>{el.title}</div>
                <Image
                  src={el.photo[0]}
                  height={200}
                  width={300}
                  alt={el.title}
                />
                <Link href={`/posts/${el.id}`}>this page!</Link>

              </div>
            )
          })
        }
      </main>

      {/* <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main> */}

      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer> */}

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}