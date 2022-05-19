import Footerdata from "../data/footer.json";
import menulist from "../data/menu.json";
import Image from "next/image";
import Form from "../components/form";

export default function Footer() {
  return (
    <>
      <footer className="bg-accent-1 border-t border-accent-2 section pb-0">
        <div className="container">
          <div className="row border-bottom pb-5 justify-content-between">
            <div className="col-12 text-center section-sm">
              <a href="{{ .Site.BaseURL }}">
                <Image
                  src={Footerdata.footer.logo}
                  className="img-fluid"
                  width={100}
                  height={100}
                  alt={Footerdata.footer.title}
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <h5 className="font-weight-medium mb-4">Links</h5>
              <ul className="list-unstyled">
                {menulist.menu.footer.map((item, index) => (
                  <li className="mb-3" key={index}>
                    <a className="text-color" href={item.URL}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-4 col-sm-6">
              <h5 className="font-weight-medium mb-4">
                Wir freuen uns über Euren Besuch
              </h5>
              <ul className="list-unstyled mb-5">
                <li className="mb-3">
                  <a
                    className="text-color"
                    href="tel:{{ .Site.Params.mobile }}"
                  >
                    <i className="ti ti-mobile text-accent me-2"></i>
                    {Footerdata.footer.mobile}
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="text-color"
                    href="mailto:{{ .Site.Params.email }}"
                  >
                    <i className="ti ti-email text-accent me-2"></i>
                    {Footerdata.footer.email}
                  </a>
                </li>
                <li className="mb-3">
                  <i className="ti ti-location-pin text-accent me-2"></i>
                  {Footerdata.footer.location}
                  <br />
                  &nbsp; &nbsp; &nbsp; {Footerdata.footer.location1}
                </li>
              </ul>
              <h5>Folgen Sie uns </h5>
              <ul className="list-inline">
                {Footerdata.footer.social}
                <li className="list-inline-item social-icons me-3">
                  <a href="https://www.facebook.com/Lavolotte/">
                    <i className="ti ti-instagram  text-accent"></i>
                  </a>
                </li>
                <li className="list-inline-item social-icons me-3">
                  <a href="https://www.instagram.com/la_volotte_wollladen/">
                    <i className="ti ti-facebook  text-accent"></i>
                  </a>
                </li>
                {/* <li className="list-inline-item social-icons me-3">
                  <a href="{{ .link | safeURL }}">
                    <i className="ti ti-pinterest  text-accent"></i>
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="col-lg-4 col-md-5">
              <h5 className="font-weight-medium mb-4">Kontakt</h5>
              <Form />
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-center py-4">
              {Footerdata.footer.copyright}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
