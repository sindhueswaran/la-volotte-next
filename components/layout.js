import Header from "../components/header";
import Footer from "../components/footer";
import Meta from "../components/meta";
import Breadcrumbs from "./breadcrumbs";
import CTA from "../components/cta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Header />
      <Breadcrumbs />
      <div>
        <main>{children}</main>
      </div>
      <CTA />
      <Footer />
    </>
  );
}
