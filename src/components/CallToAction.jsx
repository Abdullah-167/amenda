import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-gray-900 py-32"
    >
      {/* <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      /> */}
      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Legen Sie den Grundstein für eine erfolgreiche Digitalisierung
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Lösen Sie sich von unübersichtlichen Excels und unstrukturierten
            Sharepoints. Befreien Sie sich von lokalen Dateistrukturen und
            verwalten Sie Ihre Daten in der Cloud. Beseitigen Sie Datensilos 
            und nutzen Sie Ihre Daten zu Ihrem Vorteil!{' '}
          </p>
          <Button
            href="https://login.amenda.app/signup"
            color="white"
            className="mt-10"
            variant="solid"
          >
            Jetzt beginnen und testen
          </Button>
        </div>
      </Container>
    </section>
  )
}
