import Head from 'next/head'
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from '@storyblok/react'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import Teaser from '@/components/Teaser'

export default function Home({ story }) {
  story = useStoryblokState(story)
  return (
    <>
      <Head>
        <title>amenda - Medien und Projektdatenbank für Planungsbüros</title>
        <meta
          name="description"
          content="Die einzige, für Architekten angepasste Projektdatenbank, die es ermöglicht Inselwissen zu reduzieren und maximale Transparenz zu schaffen."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}