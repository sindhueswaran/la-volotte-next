import { useEffect, useState } from "react";
import { getAllProducts } from "../../lib/api";
import ProductStories from "../../components/products/product-stories";
import ps from "../../data/productsearch.json";
import Head from "next/head";
import { useRouter } from "next/router";
import BtnUp from "../../components/btn-up"; 

export default function Products({ allProducts }) {
  const router = useRouter();
  const [filteredList, setFilteredList] = useState(allProducts);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTags, setSelectedTags] = useState("");
  const [selectedNadel, setSelectedNadel] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filterByCategory = (filteredData) => {
    if (!selectedCategory) {
      return filteredData;
    }

    const filteredProduct = filteredData.filter(
      (product) => product.category.split(" ").indexOf(selectedCategory) !== -1
    );
    return filteredProduct;
  };

  const filterByTags = (filteredData) => {
    if (!selectedTags) {
      return filteredData;
    }

    const filteredProduct = filteredData.filter(
      (product) => product.tags.indexOf(selectedTags) !== -1
    );
    return filteredProduct;
  };

  const filterByNadel = (filteredData) => {
    if (!selectedNadel) {
      return filteredData;
    }

    const filteredProduct = filteredData.filter(
      (product) => product.nadel.indexOf(selectedNadel) !== -1
    );
    return filteredProduct;
  };

  const searchTermInput = (filteredData) => {
    if (!searchTerm) {
      return filteredData;
    }

    const filteredProduct = filteredData.filter(
      (product) =>
        product.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
        product.category.indexOf(searchTerm) !== -1 ||
        product.tags.indexOf(searchTerm) !== -1 ||
        product.nadel.indexOf(searchTerm) !== -1
    );
    return filteredProduct;
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleTagChange = (event) => {
    setSelectedTags(event.target.value);
  };

  const handleNadelChange = (event) => {
    setSelectedNadel(event.target.value);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    console.log(searchTerm);
  };

  useEffect(() => {
    var filteredData = filterByCategory(allProducts);
    filteredData = filterByTags(filteredData);
    filteredData = filterByNadel(filteredData);
    filteredData = searchTermInput(filteredData);
    setFilteredList(filteredData);
  }, [selectedCategory, selectedTags, selectedNadel, searchTerm]);

  if (!filteredList || filteredList.length === 0) {
    return (
      <>
       <Head>
        <title>La Volotte | Produkte </title>
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
      </Head>
      <section className="container"> 
        <div>
          <p>Keine Produkte gefunden, bitte mit geänderter Suchanfrage erneut suchen.</p>
        </div>
        <div className="my-5">
          <button
            className="btn btn-outline-primary "
            onClick={() => router.reload()}
          >
            Zurücksetzen 
          </button>
        </div>
      </section>
      </>
    );
  }

  return (
    <>
      <Head>
      <title>La Volotte | Produkte </title>
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
      </Head>
      <BtnUp/>
      <div className="container">
        <h4 className="text-center"> Produkte </h4>
        <div className="row mb-5 text-center mx-auto">
          <div className="col-md">
            <h6 className="m-3">Marke</h6>

            <select
              id="brand-input"
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="form-select form-select-sm"
            >
              {ps.productsearch.categories.map((category, index) => (
                <option key={index} value={category.URL}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md">
            <h6 className="m-3">Material</h6>
            <select
              className="form-select form-select-sm"
              id="brand-input"
              value={selectedTags}
              onChange={handleTagChange}
            >
              {ps.productsearch.tags.map((tag, index) => (
                <option key={index} value={tag.URL}>
                  {tag.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md">
            <h6 className="m-3">Nadelstärke</h6>
            <select
              className="form-select form-select-sm"
              id="brand-input"
              value={selectedNadel}
              onChange={handleNadelChange}
            >
              {ps.productsearch.nadels.map((nadel, index) => (
                <option key={index} value={nadel.name}>
                  {nadel.name}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md">
            <h6 className="m-3">Suchen</h6>
            <input
              className="btn-search"
              id="brand-input"
              placeholder="Suchen..."
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
          </div>

          <div className="col-md">
            <h6 className="text-white m-3"> Reset </h6>
            <button
              className="btn btn-outline-primary "
              onClick={() => router.reload()}
            >
              Zurücksetzen 
            </button>
          </div>
        </div>
        <ProductStories products={filteredList} />
      </div>
    </>
  );
}

export async function getStaticProps() {
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
    props: { allProducts },
  };
}
