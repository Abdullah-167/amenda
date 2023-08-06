import Image from 'next/future/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Für wen ist amenda?',
      answer:
        'Well no, but if you move your company offshore you can probably ignore it.',
    },
    {
      question: 'Welche Vorteile bietet eine zentrale Projektdatenbank?',
      answer: 'Absolutely, we are happy to take your money in all forms.',
    },
    {
      question: 'Welche Vorteile bietet eine zentrale Mediendatenbank?',
      answer:
        'We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk.',
    },
  ],
  [
    {
      question: 'Welche Projektkennwerte können erfasst werden?',
      answer:
        'TaxPal is just a software application, ultimately your books are your responsibility.',
    },
    {
      question:
        'Wie viel Bilder können in der Mediendatenbank verwaltet werden?',
      answer:
        'This is the power of excellent visual design. You just can’t resist it, no matter how poorly it actually functions.',
    },
    {
      question:
        'In welchen Formaten kann ich Daten aus amenda exportieren?',
      answer:
        'Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website.',
    },
  ],
  [
    {
      question: 'Wie erstelle ich individuelle Reports?',
      answer:
        'You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.',
    },
    {
      question: 'Wie kann ich mein Büro für amenda registrieren?',
      answer: 'In life it’s really better to never expect anything at all.',
    },
    {
      question: '?',
      answer:
        'Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-gray-900 sm:text-4xl"
          >
            Häufig gestellte Fragen
          </h2>
          <p className="mt-4 text-lg tracking-tight text-gray-700">
            Wenn Sie keine geeignte Antwort auf Ihre Fragen finden, kontaktieren Sie uns gerne! Wir haben für jede Anforderung die passende Lösung.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
