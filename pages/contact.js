import Head from "next/head";
import Address from "../components/address";
import Timings from "../components/timings";
import Form from "../components/form";

export default function Contact() {
  return (
    <>
      <Head>
        <title>La Volotte | Kontakt</title>
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
      </Head> 
        <section className="section pt-0">
          <div className="container">
            <div className="row">
              <Address/>
              <Timings/> 
              <div className="col-lg-4 offset-lg-1">
                <h3 className="mb-4">Kontakt</h3>
                <Form />
              </div>
            </div>
          </div>
        </section> 
    </>
  );
}
