import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Footer } from '@/components/Footer'

export default function Login() {
  return (
    <>
      <Head>
        <title>Datenschutz</title>
      </Head>
      <Header />
      <div class="mx-auto max-w-5xl px-4 py-8">
        <h1 className="text-black-900 mx-auto mb-2 max-w-5xl font-display text-xl font-medium tracking-tight sm:text-4xl">
          Datenschutz
        </h1>

        <h2 class="mb-2 text-lg font-bold">Datenschutzerklärung</h2>
        <p class="mb-4">
          Die Firma netnauten ist verantwortlich für die Erhebung, Verarbeitung
          und Nutzung von personenbezogenen Daten im Sinne der
          EU-Datenschutz-Grundverordnung („DSGVO“) und des
          Bundesdatenschutzgesetzes („BDSG“). Netnauten ist der ordnungsgemäße
          Umgang mit den persönlichen Daten der Nutzer ein besonderes Anliegen.
          Die Erhebung und Verwendung dieser Daten erfolgt ausschließlich im
          Rahmen der gesetzlichen Bestimmungen und in Übereinstimmung mit dem
          Datenschutzrecht und dieser Datenschutzerklärung. Sie können diese
          Datenschutzerklärung speichern und ausdrucken.
        </p>
        <h2 class="mb-2 text-lg font-bold">
          I. Was sind personenbezogene Daten?
        </h2>
        <p class="mb-4">
          Personenbezogene Daten sind alle Informationen, die sich auf eine
          identifizierte oder identifizierbare natürliche Person (im Folgenden
          „betroffene Person“) beziehen, wie etwa Name, Anschrift und
          Telefonnummer. Die folgenden Datenschutzerklärungen erläutern Art,
          Umfang und Zwecke der Erhebung und Verwendung personenbezogener Daten,
          wenn Sie: die Webseite nur als Besucher nutzen, d.h. die Webseite und
          deren Inhalte aufrufen und auf der Webseite surfen, ohne sich jedoch
          als Nutzer zu registrieren (nachfolgend unter „Datenschutzerklärung
          für alle Besucher der Website“ (Ziffer II)); sich auf der Webseite
          zusätzlich als Interessent:in für den auf der Webseite angebotenen
          Service registrieren und diesen in Anspruch nehmen (nachfolgend unter
          „Datenschutzerklärung für Nutzer des Service“ (Ziffer III)).
          Allgemeine Informationen zum Datenschutz, etwa zu Ihren Rechten als
          betroffene Person, erhalten Sie unter Ziffer IV.
        </p>
        <h2 class="mb-2 text-lg font-bold">
          II. Datenschutzerklärung für alle Besucher der Website
        </h2>
        <p class="mb-4">
          Zugriffsdaten Wir erheben Daten über jeden Zugriff auf die Website (so
          genannte Serverlogfiles). Zu den Zugriffsdaten gehören: Name der
          abgerufenen Website, Datei, Datum und Uhrzeit des Abrufs, übertragene
          Datenmenge, Meldung über erfolgreichen Abruf, Browsertyp nebst
          Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor
          besuchte Seite), IP-Adresse und der anfragende Provider. Der Anbieter
          verwendet diese Daten nur für statistische Auswertungen zum Zweck des
          Betriebs, der Sicherheit und der Optimierung des Angebotes. Sie können
          von uns nicht verwendet werden, um einzelne Besucher der Website zu
          identifizieren. Wir behalten uns vor, diese Daten nachträglich zu
          prüfen, wenn aufgrund konkreter Anhaltspunkte der berechtigte Verdacht
          einer rechtswidrigen Nutzung besteht.
        </p>
        <p class="mb-4">
          Cookies Die Webseite verwendet sog. „Cookies“. Cookies sind kleine
          Dateien, die es ermöglichen, auf dem Endgerät der Nutzer (PC,
          Smartphone o.ä.) auf das Gerät bezogene Informationen zu speichern.
          Sie dienen dazu, die Webseite nutzerfreundlicher, effektiver und
          sicherer zu machen und dient insbesondere dazu, unser Angebot für Sie
          zu optimieren und Ihnen in Zukunft zielgerichteter Informationen zur
          Verfügung stellen zu können. Die meisten der von uns verwendeten
          Cookies sind so genannte „Session-Cookies“. Sie werden nach Ende des
          Besuchs der Webseite automatisch gelöscht. Andere Cookies bleiben auf
          dem Endgerät gespeichert, bis diese gelöscht werden. Diese Cookies
          ermöglichen es uns, Ihren Browser beim nächsten Besuch
          wiederzuerkennen. Die Nutzer können auf den Einsatz der Cookies
          Einfluss nehmen. Die meisten Browser verfügen über eine Option, mit
          der das Speichern von Cookies eingeschränkt oder komplett verhindert
          wird. Allerdings wird darauf hingewiesen, dass die Nutzung und
          insbesondere der Nutzungskomfort ohne Cookies eingeschränkt werden.
          Bitte beachten Sie, dass wir grundsätzlich sämtliche Nutzungsdaten
          (wie IP Adressen, Benutzernamen, etc.) unter Verwendung eines
          Pseudonyms speichern, sodass eine persönliche Identifikation
          ausgeschlossen ist. Sollten Sie nicht mit der Verwendung von Cookies
          einverstanden sein, können Sie die Verwendung von Cookies jederzeit
          für unsere Website im Folgenden deaktivieren. Sie deaktivieren die
          Cookies auf unserer Website, indem Sie im Cookie-Banner auf "alle
          Cookies ablehnen" klicken.
        </p>
        <p class="mb-4">
          <p className="my-4 font-bold">
            Reichweitenmessung, Onlinemarketing und Technologiepartner
          </p>
          In diesem Abschnitt informieren wir Sie, welche Dienste von
          Technologiepartnern wir zur Reichweitenmessung und zu
          Onlinemarketingzwecken einsetzen. Deren Einsatz erfolgt auf Grundlage
          e des Art. 6 Abs. 1 lit. f DSGVO und unseres Interesses an der
          Steigerung der Nutzerfreundlichkeit, Optimierung unseres Angebotes und
          dessen Betriebswirtschaftlichkeit. Zu den verarbeiteten Daten gehören
          in allen Fällen die Nutzungs- und die Metadaten. Weitere Erläuterungen
          sind in den Begriffsdefinitionen, insbesondere zu den Funktionsweisen
          und Schutzmaßnahmen, am Ende dieser Datenschutzerklärung zu finden.
          Die Löschung der Daten bestimmt sich, sofern nicht anders angegeben
          entsprechend den Datenschutzerklärungen der Technologiepartner.
        </p>
        <p class="my-4">GOOGLE TAG MANAGER</p>
        <p>
          Google Tag Manager ist eine Lösung, mit der wir sog. Website-Tags über
          eine Oberfläche verwalten können (und so z.B. Google Analytics sowie
          andere Google-Marketing-Dienste in unser Onlineangebot einbinden). Der
          Tag Manager selbst (welches die Tags implementiert) verarbeitet keine
          personenbezogenen Daten der Nutzer. Im Hinblick auf die Verarbeitung
          der personenbezogenen Daten der Nutzer wird auf die folgenden Angaben
          zu den Google-Diensten verwiesen. Nutzungsrichtlinien:
          https://www.google.com/intl/de/tagmanager/use-policy.html.
        </p>
        <p class="my-4">GOOGLE ANALYTICS</p>
        <p>
          Wir setzen Google Analytics zu Zwecken der Reichweitenmessung und
          Zielgruppenbildung ein.
        </p>
        <p>
          <ul class="my-4 ml-6 list-disc">
            <li>
              Verarbeitete Daten: Nutzungsdaten, Metadaten, Kunden-ID bei uns
              (Google erhält die Kunden-ID nur als ein pseudonymes Datum ohne
              die dazu gehörenden Bestandsdaten, wie Namen, Adresse oder E-Mail
              des Kunden).
            </li>
            <li>
              Art, Umfang, Funktionsweise der Verarbeitung: Permanent-Cookies,
              Third-Party-Cookies, Tracking, interessenbasiertes Marketing,
              Profiling, Custom Audiences, Remarketing.
            </li>
            <li>
              Besondere Schutzmaßnahmen: Pseudonymisierung, IP-Masking,
              Abschluss Auftragsverarbeitungsvertrag, Opt-Out.
            </li>
            <li>
              Opt-Out:{' '}
              <a
                href="http://tools.google.com/dlpage/gaoptout?hl=de"
                class="text-gray-600 hover:underline"
              >
                http://tools.google.com/dlpage/gaoptout?hl=de
              </a>{' '}
              (Browser-Add-On Google Analytics),{' '}
              <a
                href="https://adssettings.google.com/"
                class="text-gray-600 hover:underline"
              >
                https://adssettings.google.com/
              </a>
              ,{' '}
              <a
                href="https://adssettings.google.com/authenticated"
                class="text-gray-600 hover:underline"
              >
                https://adssettings.google.com/authenticated
              </a>{' '}
              (Einstellung für Werbeanzeigen).
            </li>
            <li>
              Offenlegung extern: Google Ireland Limited, Gordon House, Barrow
              Street, Dublin 4, Irland.
            </li>
            <li>
              Datenschutzerklärung:{' '}
              <a
                href="https://www.google.com/policies/privacy/"
                class="text-gray-600 hover:underline"
              >
                https://www.google.com/policies/privacy/
              </a>
            </li>
            <li>Verarbeitung in Drittländern: Nein.</li>
            <li>Löschung der Daten: 14 Monate.</li>
          </ul>
        </p>
      </div>
      <Footer />
    </>
  )
}
