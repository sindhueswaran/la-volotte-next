import ProductPreview from './product-preview'

export default function ProductStories({ products }) {
  return (
    <>  
      <div className="row">
        {products.map((product) => (
          <ProductPreview
            key={product.slug}
            title={product.title}
            slug={product.slug} 
            category={product.category}
            tags={product.tags}
            nadel={product.nadel}
            laenge={product.laenge}
            description={product.description}
            farben={product.farben}
            dprice={product.dprice}
            cprice={product.cprice}
            cpricetext={product.cpricetext}
            price={product.price}
            priceBefore={product.priceBefore}
            menge={product.menge}
            shortDescription={product.shortDescription}
            productID={product.productID}
            type={product.type}
            brand={product.brand}
            img={product.img}
          />
        ))}
      </div> 
    </ >
  )
}

