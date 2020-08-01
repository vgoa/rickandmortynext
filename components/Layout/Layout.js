import Head from 'next/head'

import Footer from './Footer/Footer'
import Header from './Header/Header'


import styles from './Layout.module.scss'

const Layout  = ({children,title}) => {
  return(
    <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header/>
    <main className={styles.Layout}>
      {children}
    </main>
    <Footer/>
    </>
  )
}

export default Layout