import type { NextPage } from 'next'

import Head from 'next/head'
import Image from 'next/image'
import LandingPage from '../products/landing/containers/LandingPage'

const Home: NextPage = () => {
  const title:string = 'Wedding Invitation Bas & Yasmin';
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage />
      {/* <main className={styles.main}>
      <Image src="/desktop/introduction/introduction.svg" alt={'background-introduction'} width={500} height={300} />
       
      </main> */}
    </div>
  )
}

export default Home
