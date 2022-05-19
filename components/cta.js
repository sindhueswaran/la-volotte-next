import Image from "next/image";

import homepage from "../data/homepage.json";

export default function CTA() {
  return (
    <section className="py-4 bg-gradient-lv position-relative">
      <Image
        src={homepage.cta.overlayImage}
        layout="fill"
        className="img-fluid overlay-image"
        alt=""
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-7">
            <h2 className="text-white">{homepage.cta.title}</h2>
            <p className="text-white">{homepage.cta.content}</p>
            <a href={homepage.cta.button.link} className="btn btn-light">
              {homepage.cta.button.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
