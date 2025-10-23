import { fetchProductCatalog } from "./apiSimulator";
import { fetchProductReviews } from "./apiSimulator";
import { fetchSalesReport } from "./apiSimulator";


//fetch product details and display them
// fetchProductCatalog()
//     .then((products) => console.log(products))
//     .catch((e) => console.log(e))
//     .finally(() => console.log('Product API call has been attempted'));
    


// //For each product, fetch the reviews
// fetchProductReviews(4)
//     .then(reviews => console.log(`Review for product id mentioned: ${reviews}`))
//     .catch(e => console.error(e))
//     .finally(() => console.log('Reviews API call has been attempted'));



// //After fetching products and reviews, retrieve the sales report 
// fetchSalesReport()
// .then((salesReport) => console.log(salesReport))
// .catch(e => console.log(e))
// .finally(() => console.log('Sales API call has been attempted'));

fetchProductCatalog()
  .then(products => {
    console.log('Product catalog fetched', products);

    //Fetch reviews for the first product
    const firstProductId = products[0]?.id;
    if (!firstProductId) throw new Error('No products found');

    return fetchProductReviews(firstProductId);
  })
  .then(reviews => {
    console.log('Reviews fetched', reviews);

    // Now fetch sales report
    return fetchSalesReport();
  })
  .then(salesReport => {
    console.log('Sales report fetched', salesReport);
  })
  .catch(error => {
    console.error('Error:', error);
  })
  .finally(() => {
    console.log('All API calls have been attempted');
  });
