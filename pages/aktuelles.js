import Head from "next/head";

export default function Aktuelles() {
  return (
    <>
      <Head>
        <title>La Volotte | Aktuelles</title>
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
      </Head>
      <div className="container">
        <section className="section pt-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-sm-10 mb-5">
                <div className="content">
                  <p>
                    Heute und morgen ( 6. und 7. Mai ) bleibt La Volotte
                    geschlossen! Am Mittwoch, 11.5. sind wir wieder da!
                    Dankeschön und liebe Grüße!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div> 
    </>
  );
}
