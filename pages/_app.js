import "../styles/index.scss";
import "../styles/custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "@icon/themify-icons/themify-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/layout";
import SimpleReactLightbox from "simple-react-lightbox";
import { SnipcartProvider } from "use-snipcart";
import TagManager from "react-gtm-module";
import React, { useEffect } from "react"; 

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-TQZ2SQM" });
  }, []);
  return (
    <SnipcartProvider>
      <SimpleReactLightbox>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SimpleReactLightbox>
    </SnipcartProvider>
  );
}
