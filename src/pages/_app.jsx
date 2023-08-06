import 'focus-visible'
import '@/styles/tailwind.css'
import { storyblokInit, apiPlugin } from '@storyblok/react'
import Feature from '../components/Feature'
import Grid from '../components/Grid'
import Page from '../components/Page'
import Teaser from '../components/Teaser'

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
}
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_PREVIEW_TOKEN,
  use: [apiPlugin],
  components,
})

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
