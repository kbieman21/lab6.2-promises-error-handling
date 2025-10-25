import { fetchProductCatalog } from "./apiSimulator";
import { fetchProductReviews } from "./apiSimulator";
import { fetchSalesReport } from "./apiSimulator";


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
