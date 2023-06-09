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
          <th>Sicherheitsmanagement<br />Vertiefung 7</th>
          <td>09.06.2023</td>
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
          <td style="font-weight:bold; padding:8px">Vertiefung 7</td>
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

## Aufgabe a) Füllen Sie Abbildung 4 mit weiteren Beispielen zum Schädigungspotential!

**Antwort**
|                                    |              Aktivisten              |             Script Kiddies            |              Organisiertes Verbrechen             |                Staatliche Organisationen                |
|:----------------------------------:|:------------------------------------:|:-------------------------------------:|:-------------------------------------------------:|:-------------------------------------------------------:|
|        Spaß, Grenzen testen        | Gezielte Malware, Social Engineering | Vorgefertigte Scripts und Anleitungen |                         -                         |                            -                            |
|   Intellektuelle Herausforderung   |                   -                  |                   -                   |                         -                         |                            -                            |
| Politische Motivation:  Fanatismus |    DDoS-Angriffe mittels Botnetzen   |                   -                   |   Malware (z.B. Scareware), Mehrstufige Angriffe  |                 Malware (z.B. Rootkits)                 |
|   Persönliche Motive:  Genugtuung  |         Malware (z.B. Würmer)        | Vorgefertigte Scripts und Anleitungen |       Ungezielte Malware (Drive-by-Exploits)      |                 Malware (z.B. Trojaner)                 |
|         Finanzielle Motive         |                Whaling               |                   -                   | Identitätsdiebstahl, Social Engineering, Pharming |       Social Engineering, Spionage (z.B. Spyware)       |
|      Internationale Konflikte      |           Gezieltes Hacking          |                   -                   |          Gezieltes Hacking von Webservern         | Gezieltes Hacking von Webservern, Hybride Kriegsführung |

<div style="page-break-after: always"></div>

## Aufgabe b) Skizzieren Sie die Selbstlegitimation des "Gray Hat". Wie würden Sie vorbeugen? 

**Antwort**

### Selbstlegitimation
Die Selbstlegitimations von Gray Hats ist das Streben nach Verbesserung der Sicherheit und dem Aufdecken von Schwachstellen.   
Hierfür verwenden sie sowohl legalen als auch illegalen Methoden zur Identifikation/Nutzung von Schwachstellen unter den Vorgaben des ethical Hackings. Sie grenzen sich damit klar von Black Hats ab, verfügen aber meist ebenso über umfassende Kenntinsse und Fähigkeiten.

### Vorbeugende Maßnahmen:
Die Etablierung von Richtlinien und Standards und die Entwicklung der Richtlienen durch das Unternehmen für das Testen von Sicherheitslücken.
Auch die Beschränkung des Zugangs zu Systemen und Daten auf Notwendigkeitsbasis und die Implementierung von Kontrollen und Überwachungen zur Erkennung/Reaktion von verdächtige Aktivitäten können potentiellen Angriffen entgegen wirken.

<div style="page-break-after: always"></div>

## Aufgabe c) Skizzieren Sie, wie ein Unternehmen sein Asset ändern könnte, sollten die Maßnahmen zur Behebung der Schwachstellen nicht mehr wirtschaftlich sein.

**Antwort**

Wird in der Bedrohungsmodellierung der Kausalkette Angreifer - System - Asset festgestellt, dass es sich wirtschaftlich nicht lohnt die gefundenen Maßnahmen umzusetzen, hat ein Unternehmen, folgende Möglichkeiten:
- Ändern der angebotetnen Services mit neu Modelierung der Bedrohung
- Auslagern der Services an einen Dienstleister um Scaleneffecte zu nutzen
- Einstellung des Dienstes so dass das Asset nicht mehr geschütz werden muss

Grundsätzlich gilt auch hier, den Zugang zu Systemen und Daten auf Notwendigkeitsbasis zu beschtränken und eine 
Implementierung von Kontrollen und Überwachungen zur Erkennung/Reaktion von verdächtige Aktivitäten.

<div style="page-break-after: always"></div>

## Aufgabe d) Ermitteln Sie für Ihren Use Case folgende Eckpunkte:

**Antwort**

| Unternehmenswerte                                                                                                             | Anwenderanforderungen                                                  | Sicherheitsziele | Angreifer                               |
|-------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|------------------|-----------------------------------------|
| Auktionsdaten müssen <br>vertrauenswürdig und unveränderlich sein                                                            | Auktionsdaten dürfen nicht manipulierbar sein                          | Integrität       | Insider-Bedrohungen, <br>Hacker         |
| Zahlungsinformation                                                                                                           | Zahlungsinformationen <br>dürfen nicht an Unbefugte <br>gelangen      | Vertraulichkeit  | Finanzamt, <br>Hacker                   |
| Nur berechtigte User dürfen auf ihre Konten zugreifen <br>und persönlicher Informationen müssen vertraulich behandelt werden | Sichere Authentifizierung mittels <br>zweifelsfreier Identitätsprüfung | Authentizität    | Phishing-Angreifer, <br>Identitätsdiebe |

<div style="page-break-after: always"></div>

## Aufgabe e) Modellieren Sie die Webapplication Ihres Use Cases mittels MTMT DFD

**Antwort**

Siehe MTMT Report