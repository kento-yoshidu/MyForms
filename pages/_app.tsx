import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Layout from '../components/layout'

import "../styles/globals.css"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
