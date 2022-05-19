import React from "react";

export default function Impressum() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mb-5">
          <div>
            <h5> Gesetzliche Anbieterkennung: </h5>

            <p className="mb-0">
              <b> La Volotte - </b> Münz und Kreuzer GbR vertreten durch die
              Gesellschafter:
            </p>
            <p className="mb-0"> Barbara Münz, Eckart Kreuzer</p>
            <p className="mb-0"> Jakobstrasse 107 </p>
            <p className="mb-5"> 52064 Aachen </p>
            <p className="mb-0">
              {" "}
              <b> Telefon: </b> +49 (0) 241 47587794{" "}
            </p>
            <p className="mb-5">
              {" "}
              <b> E-Mail: </b> wolle@la-volotte.de{" "}
            </p>
            <p className="mb-5"> USt-IdNr.: DE815557094 </p>
          </div>

          <div className="content">
            <h3 id="impressum">Impressum</h3>
            <h4 id="gesetzliche-anbieterkennung">
              Gesetzliche Anbieterkennung:
            </h4>
            <h5 id="la-volotte---münz-und-kreuzer-gbr">
              La Volotte - Münz und Kreuzer GbR
            </h5>
            <p>
              vertreten durch die Gesellschafter: Barbara Münz, Eckart Kreuzer
              Jakobstrasse 107 52064 Aachen Deutschland Telefon: 0241 47587794
            </p>
            <p>
              E-Mail:{" "}
              <a href="mailto:wolle@la-volotte.de">wolle@la-volotte.de</a>
              USt-IdNr.: DE815557094
            </p>
            <p>
              Inhaltlich Verantwortlicher gemäß § 18 Abs. 2 MStV: Frau Barbara
              Münz Jakobstrasse 107 52064 Aachen NRW
            </p>
            <p>
              Alternative Streitbeilegung: Die Europäische Kommission stellt
              eine Plattform für die außergerichtliche Online-Streitbeilegung
              (OS-Plattform) bereit, aufrufbar unter{" "}
              <a href="https://ec.europa.eu/odr">https://ec.europa.eu/odr</a> (
              <a href="https://ec.europa.eu/consumers/odr)">
                https://ec.europa.eu/consumers/odr)
              </a>
              .
            </p>
            <p>
              Wir sind seit 01.02.2021 Mitglied der Initiative
              &ldquo;FairCommerce&rdquo;. Nähere Informationen hierzu finden Sie
              unter{" "}
              <a href="http://www.haendlerbund.de/faircommerce">
                www.haendlerbund.de/faircommerce
              </a>{" "}
              (
              <a href="https://www.haendlerbund.de/de/haendlerbund/interessenvertretung/faircommerce)">
                https://www.haendlerbund.de/de/haendlerbund/interessenvertretung/faircommerce)
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
