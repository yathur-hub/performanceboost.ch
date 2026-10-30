/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowLeft, Mail, MapPin, Scale, User, Shield, Info, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { PREMIUM_EASE, DURATIONS, buttonPressProps } from '../lib/motion';

interface LegalViewProps {
  type: 'impressum' | 'datenschutz';
  onNavigate: (path: string) => void;
}

export default function LegalView({ type, onNavigate }: LegalViewProps) {
  const handleBack = () => {
    onNavigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (type === 'impressum') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: DURATIONS.medium, ease: PREMIUM_EASE }}
        className="pt-24 pb-16 text-slate-800 min-h-[600px] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" 
        id="impressum-view"
      >
        <motion.button 
          onClick={handleBack}
          {...buttonPressProps}
          className="inline-flex items-center gap-2 text-xs text-slate-450 hover:text-slate-900 transition-colors cursor-pointer font-bold uppercase tracking-wider bg-transparent border-none outline-none font-mono"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> ZURÜCK ZUR STARTSEITE
        </motion.button>

        <div className="space-y-8">
          <div className="border-l-4 border-[#686DF4] pl-4 space-y-1">
            <h1 className="text-3xl font-display font-semibold tracking-tight text-slate-950">Impressum</h1>
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider font-mono">Offizielle Angaben nach Schweizer Recht.</p>
          </div>

          <div className="bg-white border border-[#E0E0E0]/65 p-8 rounded-3xl space-y-6 text-xs sm:text-sm leading-relaxed text-slate-500 shadow-[var(--shadow-premium-sm)]">
            
            {/* Anbieter */}
            <div className="space-y-2 pb-5 border-b border-slate-50">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#686DF4]" />
                <h3 className="font-bold text-slate-900 font-display text-sm sm:text-base">Anbieter</h3>
              </div>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold pl-6">
                <strong>performanceboost</strong><br />
                Patschär 4<br />
                7306 Fläsch<br />
                Schweiz
              </p>
            </div>

            {/* Verantwortliche Person */}
            <div className="space-y-2 pb-5 border-b border-slate-50">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#686DF4]" />
                <h3 className="font-bold text-slate-900 font-display text-sm sm:text-base">Verantwortliche Person</h3>
              </div>
              <p className="text-slate-500 text-xs sm:text-sm font-semibold pl-6">
                Yathur Nathan<br />
                Inhaber
              </p>
            </div>

            {/* Kontakt */}
            <div className="space-y-2 pb-5 border-b border-slate-50">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#686DF4]" />
                <h3 className="font-bold text-slate-900 font-display text-sm sm:text-base">Kontakt</h3>
              </div>
              <p className="text-slate-500 text-xs sm:text-sm font-semibold pl-6">
                E-Mail: <a href="mailto:hallo@performanceboost.ch" className="text-[#686DF4] font-bold hover:underline">hallo@performanceboost.ch</a>
              </p>
            </div>

            {/* Haftungsausschluss */}
            <div className="space-y-2 pb-5 border-b border-slate-50">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#686DF4]" />
                <h3 className="font-bold text-slate-900 font-display text-sm sm:text-base">Haftungsausschluss</h3>
              </div>
              <div className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold pl-6 space-y-3">
                <p>
                  Die Inhalte dieser Website werden mit grösstmöglicher Sorgfalt erstellt. Dennoch übernimmt performanceboost keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Informationen.
                </p>
                <p>
                  Haftungsansprüche gegen performanceboost wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung beziehungsweise Nichtnutzung der veröffentlichten Informationen entstanden sind, werden ausgeschlossen.
                </p>
              </div>
            </div>

            {/* Urheberrechte */}
            <div className="space-y-2 pb-5 border-b border-slate-50">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-[#686DF4]" />
                <h3 className="font-bold text-slate-900 font-display text-sm sm:text-base">Urheberrechte</h3>
              </div>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold pl-6">
                Sämtliche Inhalte, Bilder, Grafiken, Texte, Videos sowie weitere Dateien auf dieser Website sind urheberrechtlich geschützt. Die Verwendung, Vervielfältigung oder Weitergabe bedarf der vorgängigen schriftlichen Zustimmung von performanceboost beziehungsweise der jeweiligen Rechteinhaber.
              </p>
            </div>

            {/* Anwendbares Recht */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#686DF4]" />
                <h3 className="font-bold text-slate-900 font-display text-sm sm:text-base">Anwendbares Recht</h3>
              </div>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold pl-6">
                Es gilt ausschliesslich schweizerisches Recht. Gerichtsstand ist der Sitz von performanceboost, sofern keine zwingenden gesetzlichen Bestimmungen entgegenstehen.
              </p>
            </div>

          </div>
        </div>
      </motion.div>
    );
  }

  // datenschutz (Privacy Policy)
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: DURATIONS.medium, ease: PREMIUM_EASE }}
      className="pt-24 pb-16 text-slate-800 min-h-[600px] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" 
      id="datenschutz-view"
    >
      <motion.button 
        onClick={handleBack}
        {...buttonPressProps}
        className="inline-flex items-center gap-2 text-xs text-slate-450 hover:text-slate-900 transition-colors cursor-pointer font-bold uppercase tracking-wider bg-transparent border-none outline-none font-mono"
      >
        <ArrowLeft className="w-3.5 h-3.5" /> ZURÜCK ZUR STARTSEITE
      </motion.button>

      <div className="space-y-8">
        <div className="border-l-4 border-[#686DF4] pl-4 space-y-1">
          <h1 className="text-3xl font-display font-semibold tracking-tight text-slate-950">Datenschutzerklärung</h1>
          <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider font-mono">Datenschutzkonformität nach Schweizer Recht (DSG).</p>
        </div>

        <div className="bg-white border border-[#E0E0E0]/65 p-8 rounded-3xl space-y-6 text-xs sm:text-sm leading-relaxed text-slate-500 shadow-[var(--shadow-premium-sm)]">
          
          {/* Allgemeines */}
          <div className="space-y-2 pb-5 border-b border-slate-50">
            <h3 className="font-bold text-slate-900 font-display text-sm sm:text-base">1. Allgemeines</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Der Schutz Ihrer personenbezogenen Daten ist performanceboost ein wichtiges Anliegen. Diese Datenschutzerklärung informiert darüber, welche Daten bei der Nutzung dieser Website erhoben, verarbeitet und gespeichert werden.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Die Bearbeitung personenbezogener Daten erfolgt im Einklang mit dem revidierten Schweizer Datenschutzgesetz (DSG).
            </p>
          </div>

          {/* Verantwortliche Stelle */}
          <div className="space-y-2 pb-5 border-b border-slate-50">
            <h3 className="font-bold text-slate-900 font-display text-sm sm:text-base">2. Verantwortliche Stelle</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              <strong>performanceboost</strong><br />
              Patschär 4<br />
              7306 Fläsch<br />
              Schweiz
            </p>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              <strong>Verantwortliche Person:</strong><br />
              Yathur Nathan
            </p>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              E-Mail: <a href="mailto:hallo@performanceboost.ch" className="text-[#686DF4] hover:underline">hallo@performanceboost.ch</a>
            </p>
          </div>

          {/* Erhebung und Verarbeitung personenbezogener Daten */}
          <div className="space-y-2 pb-5 border-b border-slate-50">
            <h3 className="font-bold text-slate-900 font-display text-sm sm:text-base">3. Erhebung und Verarbeitung personenbezogener Daten</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Personenbezogene Daten werden nur erhoben, soweit dies zur Bereitstellung der Website, zur Bearbeitung von Anfragen oder zur Verbesserung unserer Dienstleistungen erforderlich ist.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Zu den verarbeiteten Daten können insbesondere gehören:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-500 font-semibold">
              <li>Name und Vorname</li>
              <li>E-Mail-Adresse</li>
              <li>Telefonnummer</li>
              <li>Unternehmensangaben</li>
              <li>IP-Adresse</li>
              <li>Nutzungsdaten der Website</li>
              <li>Kommunikationsdaten aus Kontaktanfragen</li>
            </ul>
          </div>

          {/* Hosting */}
          <div className="space-y-2 pb-5 border-b border-slate-50">
            <h3 className="font-bold text-slate-900 font-display text-sm sm:text-base">4. Hosting und Bereitstellung</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Diese Website wird über Cloudflare (Cloudflare, Inc., USA) bereitgestellt. Beim Aufruf der Website werden technisch notwendige Daten wie IP-Adresse, Zeitpunkt des Zugriffs, aufgerufene Seite und Browserinformationen verarbeitet, um die Website auszuliefern und vor Missbrauch und Angriffen zu schützen.
            </p>
          </div>

          {/* Kontaktformular */}
          <div className="space-y-2 pb-5 border-b border-slate-50">
            <h3 className="font-bold text-slate-900 font-display text-sm sm:text-base">5. Kontaktformular und Bearbeitung von Anfragen</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Wenn Sie uns über das Kontaktformular schreiben, bearbeiten wir die Angaben im Formular (Vor- und Nachname, Unternehmen, E-Mail-Adresse, optional Telefonnummer, Grössenordnung des Jahresumsatzes und Ihre Nachricht), um Ihre Anfrage zu beantworten.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Die Angaben werden an unsere Automatisierungsplattform (n8n, erreichbar unter n8n.performanceboost.ch) übermittelt. Dort wird die Anfrage gespeichert, wir werden per E-Mail benachrichtigt, und die Anfrage wird in unserem internen Kundenverwaltungssystem (erp.performanceboost.ch) erfasst.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Ein für Besucher unsichtbares Prüffeld sowie die Zeit zwischen Beginn und Absenden des Formulars dienen dem Schutz vor automatisierten Spam-Einsendungen.
            </p>
          </div>

          {/* Kampagnenparameter */}
          <div className="space-y-2 pb-5 border-b border-slate-50">
            <h3 className="font-bold text-slate-900 font-display text-sm sm:text-base">6. Herkunft Ihrer Anfrage (Kampagnenparameter)</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Rufen Sie unsere Website über eine Anzeige oder einen Link mit Kampagnenparametern auf (z.B. utm_source oder gclid), speichern wir diese Parameter, die Einstiegsseite und die Domain der verweisenden Website für die Dauer Ihrer Browsersitzung im Sitzungsspeicher (sessionStorage) Ihres Browsers.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Senden Sie uns eine Anfrage, übermitteln wir diese Angaben zusammen mit Ihrer Anfrage, damit wir nachvollziehen können, über welchen Kanal Sie uns gefunden haben. Dafür werden keine Cookies gesetzt und keine Profile über mehrere Besuche gebildet. Schliessen Sie den Browser-Tab, werden die Angaben im Browser gelöscht.
            </p>
          </div>

          {/* Leadinfo */}
          <div className="space-y-2 pb-5 border-b border-slate-50">
            <h3 className="font-bold text-slate-900 font-display text-sm sm:text-base">7. Leadinfo</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Diese Website nutzt Leadinfo zur Erkennung von Unternehmensbesuchen auf Basis von IP-Adressen.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Leadinfo verarbeitet Informationen über Unternehmensbesuche und stellt uns diese für Analyse- und Vertriebszwecke zur Verfügung. Personenbezogene Daten einzelner Besucher werden dabei nach Angaben von Leadinfo nicht identifiziert.
            </p>
          </div>

          {/* Google Analytics 4 */}
          <div className="space-y-2 pb-5 border-b border-slate-50">
            <h3 className="font-bold text-slate-900 font-display text-sm sm:text-base">8. Google Analytics 4</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Diese Website verwendet Google Analytics 4 zur Analyse der Nutzung unserer Website.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Google Analytics 4 erhebt Informationen über die Nutzung der Website, insbesondere:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-500 font-semibold">
              <li>Besuchte Seiten</li>
              <li>Aufenthaltsdauer</li>
              <li>Herkunft der Besucher</li>
              <li>Technische Geräteinformationen</li>
              <li>Interaktionen auf der Website</li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed pt-1.5">
              Die IP-Anonymisierung wird eingesetzt, soweit dies technisch möglich ist.
            </p>
          </div>

          {/* Google Tag Manager */}
          <div className="space-y-2 pb-5 border-b border-slate-50">
            <h3 className="font-bold text-slate-900 font-display text-sm sm:text-base">9. Google Tag Manager</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Wir verwenden den Google Tag Manager zur Verwaltung von Tracking- und Analyse-Tags.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Der Google Tag Manager selbst speichert keine personenbezogenen Daten. Er dient ausschliesslich der technischen Aussteuerung weiterer Dienste.
            </p>
          </div>

          {/* Google Marketing Platform */}
          <div className="space-y-2 pb-5 border-b border-slate-50">
            <h3 className="font-bold text-slate-900 font-display text-sm sm:text-base">10. Google Marketing Platform</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Zur Analyse, Messung und Optimierung von Marketingaktivitäten nutzen wir Dienste der Google Marketing Platform.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Dabei können Cookies und ähnliche Technologien eingesetzt werden, um die Wirksamkeit von Marketingmassnahmen zu messen und die Nutzererfahrung zu verbessern.
            </p>
          </div>

          {/* Schriftarten */}
          <div className="space-y-2 pb-5 border-b border-slate-50">
            <h3 className="font-bold text-slate-900 font-display text-sm sm:text-base">11. Schriftarten und Bilder</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Für die Darstellung der Schriften nutzen wir Google Fonts. Dabei wird beim Aufruf der Website eine Verbindung zu Servern von Google (Google Ireland Ltd. bzw. Google LLC, USA) hergestellt und Ihre IP-Adresse übermittelt.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Einzelne Bilder (z.B. Logo und Porträts) werden von raw.githubusercontent.com (GitHub, Inc., USA) geladen. Auch dabei wird Ihre IP-Adresse an den Anbieter übermittelt.
            </p>
          </div>

          {/* Cookies */}
          <div className="space-y-2 pb-5 border-b border-slate-50">
            <h3 className="font-bold text-slate-900 font-display text-sm sm:text-base">12. Cookies</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Diese Website verwendet Cookies und vergleichbare Technologien wie den Sitzungsspeicher des Browsers (siehe Abschnitt «Herkunft Ihrer Anfrage»).
            </p>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Cookies dienen insbesondere:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-500 font-semibold">
              <li>der technischen Bereitstellung der Website</li>
              <li>der Analyse des Nutzerverhaltens</li>
              <li>der Verbesserung der Benutzerfreundlichkeit</li>
              <li>der Erfolgsmessung von Marketingaktivitäten</li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed pt-1.5">
              Besucher können die Speicherung von Cookies in den Einstellungen ihres Browsers einschränken oder deaktivieren.
            </p>
          </div>

          {/* Datenweitergabe */}
          <div className="space-y-2 pb-5 border-b border-slate-50">
            <h3 className="font-bold text-slate-950 font-display text-sm sm:text-base">13. Datenweitergabe</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Eine Weitergabe personenbezogener Daten erfolgt ausschliesslich, soweit dies für die Erbringung unserer Dienstleistungen erforderlich ist, eine gesetzliche Verpflichtung besteht oder eine entsprechende Einwilligung vorliegt.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Einige der genannten Anbieter (Cloudflare, Google, GitHub) haben ihren Sitz in den USA. Dabei können Daten in Länder übermittelt werden, deren Datenschutzniveau nicht in jedem Fall dem schweizerischen entspricht.
            </p>
          </div>

          {/* Speicherdauer */}
          <div className="space-y-2 pb-5 border-b border-slate-50">
            <h3 className="font-bold text-slate-950 font-display text-sm sm:text-base">14. Speicherdauer</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Personenbezogene Daten werden nur so lange gespeichert, wie dies für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
            </p>
          </div>

          {/* Rechte betroffener Personen */}
          <div className="space-y-2 pb-5 border-b border-slate-50">
            <h3 className="font-bold text-slate-950 font-display text-sm sm:text-base">15. Rechte betroffener Personen</h3>
            <p className="text-xs sm:text-sm text-slate-550 text-slate-500 font-semibold leading-relaxed">
              Betroffene Personen haben im Rahmen des geltenden Datenschutzrechts insbesondere das Recht auf:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-500 font-semibold">
              <li>Auskunft</li>
              <li>Berichtigung</li>
              <li>Löschung</li>
              <li>Einschränkung der Bearbeitung</li>
              <li>Widerspruch gegen bestimmte Bearbeitungen</li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed pt-1.5">
              Anfragen können jederzeit an <a href="mailto:hallo@performanceboost.ch" className="text-[#686DF4] hover:underline">hallo@performanceboost.ch</a> gerichtet werden.
            </p>
          </div>

          {/* Änderungen */}
          <div className="space-y-2">
            <h3 className="font-bold text-slate-950 font-display text-sm sm:text-base">16. Änderungen</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              performanceboost behält sich das Recht vor, diese Datenschutzerklärung jederzeit anzupassen. Es gilt die jeweils aktuelle auf dieser Website veröffentlichte Version.
            </p>
            <p className="text-[11px] text-slate-400 font-mono pt-2">
              Stand: Oktober 2026
            </p>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
