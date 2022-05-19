import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

/**************************PRODUCTS******************************************/
const productsDirectory = join(process.cwd(), '_products')

export function getProductSlugs() {
  return fs.readdirSync(productsDirectory)
}

export function getProductBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(productsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const productItems = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      productItems[field] = realSlug
    }
    if (field === 'content') {
      productItems[field] = content
    }
    if (typeof data[field] !== 'undefined') {
      productItems[field] = data[field]
    }
  })
  return productItems
}


export function getAllProducts(fields = []) {
  const slugs = getProductSlugs()
  const products = slugs.map((slug) => getProductBySlug(slug, fields))
  .sort((product1, product2) => (product1.productID < product2.productID ? -1 : 1 ))
  .filter((product) => !product.draft)
  return products
}
 

export async function filteredProducts(productFilter) {
  const { category, tags } = productFilter;
  const products =  getAllProducts();
  return products.filter((product) =>  category || tags)

  return filteredProducts;
}


/*********************
export async function filteredProducts(productFilter) {
  const { category, tags } = productFilter;

  const slugs = getProductSlugs()
  const filteredProducts = slugs.map((slug) => getProductBySlug(slug, fields)) 
  .filter((filteredProducts.category, filteredProducts.tags),  
  (filteredProducts.categories === "schoppel"))

  console.log(filteredProducts)
  return filteredProducts;
}*/