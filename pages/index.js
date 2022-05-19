import { getAllPosts, getAllProducts } from "../lib/api";
import Head from "next/head";
import homepage from "../data/homepage.json";
import ProductStories from "../components/products/product-stories";
import Gallery from "../components/gallery";
import About from "../components/about";

export default function Index({ allProducts }) { 
  const n = 8;
  const randomProducts = allProducts.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, n);

  return (
    <>
      <Head>
        <title>La Volotte</title>
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
      </Head>
      <About />
      <Gallery homepage={homepage} />

      <section className="section pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2>{homepage.products.title} </h2>
            </div>
            <ProductStories products={randomProducts} />
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);
  const allProducts = getAllProducts([
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
  ]);

  return {
    props: { allPosts },
    props: { allProducts },
  };
}
