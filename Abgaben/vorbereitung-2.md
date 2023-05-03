   <style>
    table, tr, td {
        border-collapse: collapse !important;
    border: none !important;
}
.centered{
    align:"center";
}
.blank_row
{
    height: 10px !important; /* overwrites any other rules */
    background-color: #FFFFFF;
}
    </style>
   <table width="100%" cellspacing="0" cellpadding="0" style="border:none;">
      <tbody>
        <tr>
          <td>Gruppe 1</td>
          <th>Sicherheitsmanagement<br />Vorbereitung 1b</th>
          <td>24.04.2023</td>
        </tr>
        <tr class="blank_row">
              <td colspan="3"></td>
        </tr>
        <tr>
          <td><br /><br /><br /></td>
          <td align="center">
            <img
              src="./Assets/bht-logo.png"
              style="height:2.66cm;width:11.4cm;"
            />
          </td>
          <td></td>
        </tr>       
        <tr>
          <td></td>
          <td align="center">
            Fachbereich VI - Informatik und Medien<br />Studiengang
            IT-Sicherheit Online / Medieninformatik
          </td>
          <td></td>
        </tr>
        <tr align="center">
          <td></td>
          <td style="font-weight:bold; padding:8px">Vorbereitung 1b</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td align="center">
            <img
              src="./Assets/pareto-logo.jpg"
            style="height:5.6cm;width:8.31cm;"
            />
          </td>
          <td></td>
        </tr>
        <tr>
          <td>Modul:</td>
          <td>Sicherheitsmanagement</td>
          <td></td>
        </tr>
        <tr>
          <td>Dozent:</td>
          <td>Sven Zehl</td>
          <td></td>
        </tr>
        <tr>
          <td>vorgelegt von:</td>
          <td>
            Gruppe 1<br />Christine Kuczera<br />Dirk Drutschmann<br />Hicham
            Naoufal<br />Michael Schröter<br />Jan Zimmermann<br />Ivo Valls
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
<div style="page-break-after: always"></div>



## Aufgabe a) Vergegenwärtigen Sie Ihre Dokumentation des Rollenspiels Kosten der Sicherheit aus dem Nachgang der ersten Vorlesung. Auch wenn eventuelldas eine oder andere Teammitglied gewechselt haben mag: Würden Sie heute einzelne Verhandlungspositionen revidieren können? Können Sie JSM verargumentieren? Warum wird der Kunde die "Selbstverständlichkeit Sicherheit" nicht gesondert bezahlen wollen?

**Antwort**

Aus Erfahrung haben wir das Thema Sicherheit schon mit in den Auftrag nachverhandelt, dies sollte jede halbwegs seriöse Firma heutzutage auch so tun (bzw den Kunden von Anfang an darauf hinweisen das dies ein Thema sein wird). Joint Security Management (JSM) bietet sich vor allem bei nicht technischen Kunden an, da sie oft nicht über das Know-how verfügen und man sich damit potenziell einen Imageschaden zuziehen kann. 

Der Kunde erwartet zwar grundsätzlich eine sichere Anwendung, aber Sicherheit ist in der Realität kein Zustand sondern ein Prozess. Hierbei entstehen natürlich kontinuierliche Aufwände die dann dementsprechend in Rechnung gestellt werden. Ein Weg den Kunden das nicht so offensichtlich auf die Rechnung zu schreiben ist es, die Software nur noch als Abo Modell zu vertreiben oder updates kostenpflichtig zu machen. 


## Frage b) Zur Software-Sicherheit: Welche Arten von Fehlern kennen Sie?

__**Bugs**__

Programmierfehler (umgangsprachlich "Bugs") sind Fehler welche bei der Umsetzung von Software entstehen können. Bugs können zu ungewünschtem Programmverhalten wie z.B.: Abstürzen führen oder verhindern das ein Programm ausgeliefert werden kann, wenn es nicht kompiliert.

__**Dokumentationsfehler**__

Fehlerhafte Dokumentation entsteht häufig wenn die Kommunikation im Projekt nicht optimal läuft und/oder die Dokumentation nur als notwendiges Übel gesehen wird und nicht entsprechend gepflegt wird. Erfahrungsgemäß zeigt sich dass, je weiter die Dokumentation vom Code entfernt ist, desto veralteter ist sie. 

__**Logikfehler/Spezifikationsfehler**__ 

Sind Anforderungen nicht genügend kommuniziert worden kommt es häufig zu dieser Fehlerklasse. Hierbei handelt es sich nicht um Fehler in der Umsetzung, der Code läuft unter den Annahmen der Entwickler wie gewünscht. Vielmehr sind es die Annahmen die nicht stimmen und so zu ungewünschtem Verhalten führen. 

__**Konfigurationsfehler**__

Selbst wenn eine Anwendung fehlerfrei ausgeliefert werden sollte (welches eigentlich bei real existierender, nicht trivialer Software eigentlich nie der Fall ist) kann es zur Fehlern bei der Konfiguration kommen. Fehler kann hier heißen das etwas nicht richtig oder aber auch unsicher, evtl. durch unsichere Standardwerte (z.B. Schlüssellängen) konfiguriert wird.