// export function getFeaturedEvents() {
//     return DUMMY_EVENTS.filter((event) => event.isFeatured);
//   }
  
//   export function getAllEvents() {
//     return DUMMY_EVENTS;
//   }
  
//   export function getEventById(id) {
//     return DUMMY_EVENTS.find((event) => event.id === id);
//   }

// import { getAllProducts } from "../lib/api";


  export function getFilteredProducts(productFilter) {
    const { category, tag  } = productFilter; 
  
    let filteredProducts = getAllProducts.filter((product) => {
      const selectedProducts = product.filter(productFilter)
      return selectedProducts;
    });
  
    return filteredProducts;
  }

/*********************************************************** */
  // export function getFilteredEvents(dateFilter) {
  //   const { year, month } = dateFilter;
  
  //   let filteredEvents = DUMMY_EVENTS.filter((event) => {
  //     const eventDate = new Date(event.date);
  //     return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  //   });
  
  //   return filteredEvents;
  // }
  
  