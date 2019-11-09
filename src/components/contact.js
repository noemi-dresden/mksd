import React from 'react';
import { AppBar, Toolbar,  Grid, Slide, Typography, IconButton, Dialog } from '@material-ui/core';
import '../App.css';
import { Copyright, Facebook, Favorite, Email, Book, Close } from '@material-ui/icons';


const Transition = React.forwardRef(function Transition(props, ref){
  return <Slide direction="up" ref={ref} {...props} />;
})

const Contact = (props) => {
  var contact = props.contact
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
       <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className="footer">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <Close/>
            </IconButton>
            <Typography variant="h6">
              Close Impressum
            </Typography>
          </Toolbar>
         <div className="impressum">
         <div>
            <h1>Impressum</h1>
            <span>Informationspflicht laut § 5 TMG.</span>
            <span>M.K.S.D.</span>
            <span>Hannover, Deutchland</span>
            <span>E-Mail: fihaonana.malagasy@gmail.com</span>
            <span>Quelle: Erstellt mit dem Impressum Generator von AdSimple in Kooperation mit slashtechnik.de</span>
         </div>
         <div>
           <h1>EU-Streitschlichtung</h1>
           <p>
           Gemäß Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über die Online-Streitbeilegungsplattform (OS-Plattform) informieren.Verbraucher haben die Möglichkeit, Beschwerden an die Online Streitbeilegungsplattform der Europäischen Kommission unter http://ec.europa.eu/odr?tid=321126872 zu richten. Die dafür notwendigen Kontaktdaten finden Sie oberhalb in unserem Impressum.
           </p>
           <p>
           Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder verpflichtet sind, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
           </p>
         </div>
         <div>
           <h1>Haftung für Inhalte dieser Website</h1>
           <p>Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen uns korrekte und aktuelle Informationen bereitzustellen. Laut Telemediengesetz (TMG) §7 (1) sind wir als Diensteanbieter für eigene Informationen, die wir zur Nutzung bereitstellen, nach den allgemeinen Gesetzen verantwortlich. Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser Webseite übernehmen, speziell für jene die seitens Dritter bereitgestellt wurden. Als Diensteanbieter im Sinne der §§ 8 bis 10 sind wir nicht verpflichtet, die von ihnen übermittelten oder gespeicherten Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen</p>
           <p>Unsere Verpflichtungen zur Entfernung von Informationen oder zur Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen aufgrund von gerichtlichen oder behördlichen Anordnungen bleiben auch im Falle unserer Nichtverantwortlichkeit nach den §§ 8 bis 10 unberührt.</p>
           <p>Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitte wir Sie uns umgehend zu kontaktieren, damit wir die rechtswidrigen Inhalte entfernen können. Sie finden die Kontaktdaten im Impressum.</p>
         </div>
         <div>
           <h1>Haftung für Links auf dieser Website</h1>
           <p>Unsere Webseite enthält Links zu anderen Webseiten für deren Inhalt wir nicht verantwortlich sind. Haftung für verlinkte Websites besteht für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten hatten und haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir Links sofort entfernen würden, wenn uns Rechtswidrigkeiten bekannt werden.</p>
           <p>Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitte wir Sie uns zu kontaktieren. Sie finden die Kontaktdaten im Impressum.</p>
         </div>
         <div>
           <h1>Urheberrechtshinweis</h1>
           <p>Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht der Bundesrepublik Deutschland. Bitte fragen Sie uns bevor Sie die Inhalte dieser Website verbreiten, vervielfältigen oder verwerten wie zum Beispiel auf anderen Websites erneut veröffentlichen. Falls notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen.</p>
           <p>Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht verletzen, bitten wir Sie uns zu kontaktieren.</p>
         </div>
         <div>
           <h1>Bildernachweis</h1>
           <p>Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich geschützt.Die Bilderrechte liegen bei den folgenden Fotografen und Unternehmen:www.canva.com</p>
         </div>
         <div>
           <h1>Datenschutzerklärung</h1>
           <p>Wir haben diese Datenschutzerklärung (Fassung 09.11.2019-321126872) verfasst, um Ihnen gemäß der Vorgaben der Datenschutz-Grundverordnung (EU) 2016/679 zu erklären, welche Informationen wir sammeln, wie wir Daten verwenden und welche Entscheidungsmöglichkeiten Sie als Besucher dieser Webseite haben.</p>
           <p>Leider liegt es in der Natur der Sache, dass diese Erklärungen sehr technisch klingen, wir haben uns bei der Erstellung jedoch bemüht die wichtigsten Dinge so einfach und klar wie möglich zu beschreiben.</p>
         </div>
         <div>
           <h1>Automatische Datenspeicherung</h1>
           <p>Wenn Sie heutzutage Webseiten besuchen, werden gewisse Informationen automatisch erstellt und gespeichert, so auch auf dieser Webseite.</p>
           <p>Wenn Sie unsere Webseite so wie jetzt gerade besuchen, speichert unser Webserver (Computer auf dem diese Webseite gespeichert ist) automatisch Daten wie</p>
           <p>die Adresse (URL) der aufgerufenen Webseite, Browser und Browserversion, das verwendete Betriebssystem, die Adresse (URL) der zuvor besuchten Seite (Referrer URL), den Hostname und die IP-Adresse des Geräts von welchem aus zugegriffen wird, Datum und Uhrzeit in Dateien</p>
           <p>In der Regel werden Webserver-Logfiles zwei Wochen gespeichert und danach automatisch gelöscht. Wir geben diese Daten nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten eingesehen werden.
Die Rechtsgrundlage besteht nach Artikel 6  Absatz 1 f DSGVO (Rechtmäßigkeit der Verarbeitung) darin, dass berechtigtes Interesse daran besteht, den fehlerfreien Betrieb dieser Webseite durch das Erfassen von Webserver-Logfiles zu ermöglichen.</p>
         </div>
         <div>
           <h1>TLS-Verschlüsselung mit https</h1>
           <p>Wir verwenden https um Daten abhörsicher im Internet zu übertragen (Datenschutz durch Technikgestaltung Artikel 25 Absatz 1 DSGVO). Durch den Einsatz von TLS (Transport Layer Security), einem Verschlüsselungsprotokoll zur sicheren Datenübertragung im Internet können wir den Schutz vertraulicher Daten sicherstellen. Sie erkennen die Benutzung dieser Absicherung der Datenübertragung am kleinen Schloßsymbol links oben im Browser und der Verwendung des Schemas https (anstatt http) als Teil unserer Internetadresse.</p>
         </div>
         <div>
           <h1>Google Analytics Datenschutzerklärung</h1>
           <p>Wir verwenden auf dieser Website Google Analytics der Firma Google LLC (1600 Amphitheatre Parkway Mountain View, CA 94043, USA) um Besucherdaten statistisch auszuwerten. Dabei verwendet Google Analytics zielorientierte Cookies.</p>
           <h2>Cookies von Google Analytics</h2>
           Nähere Informationen zu Nutzungsbedingungen und Datenschutz finden Sie unter http://www.google.com/analytics/terms/de.html bzw. unter https://support.google.com/analytics/answer/6004245?hl=de.
         </div>
         <div>
           <h1>Pseudonymisierung</h1>
           <p>Unser Anliegen im Sinne der DSGVO ist die Verbesserung unseres Angebotes und unseres Webauftritts. Da uns die Privatsphäre unserer Nutzer wichtig ist, werden die Nutzerdaten pseudonymisiert. Die Datenverarbeitung erfolgt auf Basis der gesetzlichen Bestimmungen des Art 6 EU-DSGVO Abs 1 lit a (Einwilligung) und/oder f (berechtigtes Interesse) der DSGVO.</p>
         </div>
         <div>
           <h1>Deaktivierung der Datenerfassung durch Google Analytics</h1>
           <p>Mithilfe des Browser-Add-ons zur Deaktivierung von Google Analytics-JavaScript (ga.js, analytics.js, dc.js) können Website-Besucher verhindern, dass Google Analytics ihre Daten verwendet.</p>
           <p>Sie können die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: https://tools.google.com/dlpage/gaoptout?hl=de</p>
         </div>
         <div>
           <span>Quelle: Erstellt mit dem Datenschutz Generator von AdSimple in Kooperation mit warkly.de</span>
         </div>
         </div>
        </AppBar>
      </Dialog>
      <AppBar position="static" className="footer">
        <Toolbar>
          <Grid container justify="center" spacing={3}>
            <Grid item > Made with <Favorite color="secondary"/> by s.Privat </Grid>
            <Grid item > <Copyright/> M.K.S.D. {new Date().getFullYear()} </Grid>
            <Grid item > Follow us on <a href={contact.facebook}><Facebook/></a>   </Grid>
            <Grid item > {contact.email} <a href={'mailto:'+contact.email}><Email/></a>   </Grid>
            <Grid item > <span onClick={handleClickOpen} >Impressum</span>  <Book /></Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Contact;