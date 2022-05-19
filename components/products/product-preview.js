import Link from "next/link";
import Image from "next/image";

export default function ProductPreview({
  title,
  slug,
  category,
  tags,
  nadel,
  laenge,
  description,
  farben,
  dprice,
  cprice,
  cpricetext,
  price,
  priceBefore,
  menge,
  shortDescription,
  productID,
  type,
  brand,
  img,
}) {
  return (
    <>
      <div id="products" className="col-6 col-md-4 col-lg-3 product-item">
        <div className="card border-0 text-center mb-100 ">
          <Link href={`/products/${slug}`}>
            <a>
              <Image
                src={img}
                width={240}
                height={240}
                alt={title}
                className="card-img-top"
              />
            </a>
          </Link>
          <div className="card-body">
            <Link href={`/products/${slug}`}>
              <a className="h4">{title}</a>
            </Link>

            <br />
            <a href="/" className="h6">
              {brand}
            </a>
            <p className="product-description">{description} </p>
            <p>
              {menge}&nbsp; &nbsp;
              <Image
                src="/images/nadelstaerke.png"
                className="card-img-top"
                alt=" "
                width={20}
                height={10}
              />
              &nbsp; {nadel}
            </p>
            <div className="mb-4">
              <span className="lead text-primary">{dprice} € </span> &nbsp;
              <s>{priceBefore}</s>
              <br />
              <small> inkl. MwSt. zzgl. Versandkosten* </small>
            </div>
            <button
              className="snipcart-add-item btn btn-sm btn-outline-primary"
              data-item-id={productID}
              data-item-price={price}
              data-item-url={slug}
              data-item-description={description}
              data-item-image={img}
              data-item-name={title}
              data-item-custom1-name="Farbe"
              data-item-custom1-options={farben}
            >
              in den Warenkorb
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
