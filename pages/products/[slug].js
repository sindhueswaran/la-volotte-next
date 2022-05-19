import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getProductBySlug, getAllProducts } from "../../lib/api";
import ProductTitle from "../../components/products/product-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import Image from "next/image";
import Slider from "react-slick";
import Farbenhinweis from "../../components/products/farben-hinweis"; 
import { Tab, Tabs } from "react-bootstrap";
import { SRLWrapper } from "simple-react-lightbox";
import BtnBack from "../../components/btn-back";

export default function Product({ product }) {
  const router = useRouter();
  if (!router.isFallback && !product?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  
  const settings = {
    autoplay: false,
    infinite: true,
    arrows: false,
    dots: true,
    dotsClass: "slick-dots li", 
  };

  const options = {
    settings: {
      overlayColor: "rgb(0, 0, 0, 1)",
    },
    buttons: {
      showDownloadButton: false,
    },
    caption: {
      captionColor: "#fff",
      captionTextTransform: "capitalize",
      captionFontSize: "1rem",
    },
    thumbnails: {
      showThumbnails: false,
    },
  };

  return (
    <div className="container">
      {router.isFallback ? (
        <ProductTitle>Loading…....</ProductTitle>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>
                {CMS_NAME} | {product.title}
                <link rel="shortcut icon" href="/favicons/favicon.ico" />
              </title>
              {/* <meta property="og:image" content={product.ogImage.url} /> */}
            </Head> 
            <BtnBack/>
            <section className="section pt-0">
              <div className="container">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-5 mb-4 mb-lg-0">
                      <Slider {...settings} className="product-slider">
                        {product.images.map((item, index) => (
                          <div
                            data-image={item.image}
                            className="img-fluid "
                            key={index}
                          >
                            <Image
                              src={item}
                              width={360}
                              height={360}
                              layout="responsive"
                              alt="Product image"
                            />
                          </div>
                        ))}
                      </Slider>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                      <h4 className="font-weight-medium">{product.title}</h4>
                      <h6 className="font-weight-medium">{product.brand}</h6>

                      <div className="my-4">
                        <span className="lead text-primary font-weight-medium">
                          {product.dprice} €
                        </span>{" "}
                        &nbsp; <s>{product.priceBefore} </s> <br />
                        <span className="lead text-primary font-weight-medium">
                          {product.cprice} <small>{product.cpricetext} </small>
                        </span>
                        <small> inkl. MwSt. zzgl. Versandkosten* </small>
                        <p>
                          Gewicht: {product.menge} &nbsp; &nbsp; <br />
                          <Image
                            src="/images/nadelstaerke.png"
                            width={20}
                            height={10}
                            alt=" "
                          />
                          &nbsp;{product.nadel} <br />
                          Lauflänge: {product.laenge} &nbsp; &nbsp;
                        </p>
                      </div>
                      <h5>Kurzbeschreibung</h5>
                      <p>{product.shortDescription}</p>

                      <button
                        className="snipcart-add-item btn  btn-outline-primary"
                        id="my-button"
                        data-item-id={product.productID}
                        data-item-price={product.price}
                        data-item-url={product.slug}
                        data-item-description={product.description}
                        data-item-image={product.img}
                        data-item-name={product.title}
                        data-item-custom1-name="Farbe"
                        data-item-custom1-options={product.farben}
                      >
                        in den Warenkorb
                      </button>

                      <p className="mt-5">
                        *
                        <small>
                          Der Versand kostet pauschal € 6,00.
                          <br />
                          Bei einer Bestellung ab € 80,00 versenden wir
                          kostenfrei. <br />
                          Bei Abholung im Laden bitte den Gutschein "ABHOLUNG"
                          beim Check-out verwenden.
                        </small>
                      </p>
                    </div>
                    <div className="col-12 mt-5">
                      <Tabs
                        defaultActiveKey="home"
                        id="uncontrolled-tab-example"
                        className="mb-3 border-bottom-0"
                      >
                        <Tab eventKey="home" title="Hinweis zu farben auswahl">
                          <Farbenhinweis />
                        </Tab>
                        <Tab eventKey="farbauswahl" title="Farbauswahl">
                          <h1 class="font-weight-light text-center text-lg-left mt-4 mb-5">
                            Farben
                          </h1>

                          <SRLWrapper options={options}>
                            <ul className="gallery">
                              {product.farbimages.map((farbimage, index) => {
                                return (
                                  <li className=" d-block mb-4 ">
                                    <a key={index} href={farbimage.farbimg}>
                                      <Image
                                        className="img-fluid "
                                        src={farbimage.farbimg}
                                        alt={farbimage.farbtitle}
                                        layout="fixed"
                                        width="200"
                                        height="200"
                                      />
                                      <h5 className="text-center">
                                        {farbimage.farbtitle}{" "}
                                      </h5>
                                    </a>
                                  </li>
                                );
                              })}
                            </ul>
                          </SRLWrapper>
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </>
      )}
    </div>
  );
}

export async function getStaticProps({ params }) {
  const product = getProductBySlug(params.slug, [
    "title",
    "slug",
    "content",
    "draft",
    "category",
    "tags",
    "nadel",
    "laenge",
    "description",
    "farben",
    "dprice",
    "cprice",
    "cpricetext",
    "price",
    "priceBefore",
    "menge",
    "shortDescription",
    "productID",
    "type",
    "brand",
    "img",
    "images",
    "farbimages",
    "farbimg",
    "farbtitle",
  ]);
  const content = await markdownToHtml(product.content || "");

  return {
    props: {
      product: {
        ...product,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const products = getAllProducts(["slug"]);

  return {
    paths: products.map((product) => {
      return {
        params: {
          slug: product.slug,
        },
      };
    }),
    fallback: false,
  };
}
