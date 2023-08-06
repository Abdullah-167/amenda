import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

function CheckIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      className={clsx(
        'h-6 w-6 flex-none fill-current stroke-current',
        className
      )}
    >
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        strokeWidth={0}
      />
      <circle
        cx={12}
        cy={12}
        r={8.25}
        fill="none"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({ name, price, description, href, features, featured = false }) {
  return (
    <section
      className={clsx(
        'flex flex-col px-6 sm:px-8',
        featured ? 'order-first bg-gray-900 py-8 lg:order-none' : 'lg:py-8'
      )}
    >
      <h3
        className={clsx(
          'mt-5 font-display text-lg',
          featured ? 'text-white' : 'text-gray-900'
        )}
      >
        {name}
      </h3>
      <p
        className={clsx(
          'mt-2 text-base',
          featured ? 'text-white' : 'text-gray-900'
        )}
      >
        {description}
      </p>
      <p
        className={clsx(
          'order-first font-display text-5xl font-light tracking-tight',
          featured ? 'text-white' : 'text-gray-900'
        )}
      >
        {price}
      </p>
      <ul
        role="list"
        className={clsx(
          'order-last mt-10 flex flex-col gap-y-3 text-sm',
          featured ? 'text-white' : 'text-gray-900'
        )}
      >
        {features.map((feature) => (
          <li key={feature} className="flex">
            <CheckIcon className={featured ? 'text-white' : 'text-slate-400'} />
            <span className="ml-4">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        href={href}
        variant={featured ? 'solid' : 'outline'}
        color={featured ? 'white' : 'gray'}
        className="mt-8"
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        14-Tage testen
      </Button>
    </section>
  )
}

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="bg-white py-20 sm:py-32"
    >
      <Container>
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            <span className="text-gray-900">
              Einfache Preise, für jedes Büro.
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-900">
            Egal ob kleines, mittleres oder großes Architekturbüro – unsere
            Lösung ist für jeden geeignet!
          </p>
        </div>
        <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          <Plan
            name="Starter"
            price="99€"
            description="Für jedes Büro am Anfang digitaler Prozesse."
            href="https://login.amenda.app/signup"
            features={[
              'Projektdatenbank',
              'Standard Projekt Formular',
              '25 GB Medienspeicher',
              'Leistungsstarke Suche',
              'Export von Projektdatenblättern',
            ]}
          />
          <Plan
            featured
            name="Growth"
            price="449€"
            description="Für Büros mit individuellen Ansprüchen."
            href="https://login.amenda.app/signup"
            features={[
              'Projektdatenbank',
              'Individuelle Projekt Formulare',
              '250 GB Medienspeicher',
              'Leistungsstarke Suche',
              'Kontaktverzeichnis',
              'Export von Projektdatenblättern',
            ]}
          />
          <Plan
            name="Teams"
            price="ab 2499€"
            description="Für Büros mit vielen Daten und Beteiligten."
            href="https://login.amenda.app/signup"
            features={[
              'Projektdatenbank',
              'Preisdatenbank',
              'Individuelle Projekt und Medien Formulare',
              '2 TB Medienspeicher',
              'Projekt Portfolio Designer',
              'Leistungsstarke Suche',
              'Kontaktverzeichnis mit Rollen',
              'Export von Projektdatenblättern',
              'Wissensmanagement',
            ]}
          />
        </div>
        <div className="mt-10">
          Alle unsere Pakete beinhalten die individuelle Beratung sowie die
          Einrichtung und Schulung zum Preis von einmalig 1690€.<br/> Weiter bieten wir Ihnen die Datenmigration
          aus gängigen Quellen (z.B. Excel oder Word Dokumenten) an und unterstützen ebenfalls bei der erfolgreichen Einführung.
        </div>
      </Container>
    </section>
  )
}
