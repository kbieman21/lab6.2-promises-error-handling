//functions fetchProductCatalog(), returns a Promise:
//Simulates fetching a list of products, each with id, name, and price.
//Resolve the Promise with an array of mock products after a 1-second delay.
//Use Math.random() to sometimes reject the Promise with an error message, e.g., "Failed to fetch product catalog".
//THIS IS THE SAME FOR fetchProductReviews() AND fetchSalesReport()

//Base interface
export default interface Product{
    id:number;
    name:string;
    price:number;
    
}

//an object product of the Product instance/type
const products: Product[] = [
    { id: 1, name: 'Laptop', price: 1200  },
    { id: 2, name: 'Headphones', price: 200 }
];

//Base interface for SalesReport
interface SalesReport {
    totalSales: number;
    unitSold: number;
    averagePrice:number;
}

//an object salesReport of the above SalesReport instance/type
const salesReport: SalesReport = {
    totalSales: 150,
    unitSold: 10,
    averagePrice: 15
};

//Declare the data of the review by lookup mechanism
const dataReview: {[id:number]:string[]} = {
    1:['excelent'],
    2:['good'],
    3:['nice flskadflsdk']
};

//fetch product catalog
//export const fetchProductCatalog = (): Promise<{id:number, name:string, price:number}[]> =>{ THIS IS TRANSFERRED TO AN INTERFACE
export const fetchProductCatalog = (): Promise<Product[]> =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(Math.random() < 0.9){
                resolve(products)
            }else{
                reject('Failed to fetch product catalog!!!!')
            }
        }, 1000);
    });
};


//simulate fetching product reviews
export const fetchProductReviews = (productId: number): Promise<string[]> =>{
    return new Promise<string[]>((resolve, reject) =>{
        if(productId){
           const reviews= dataReview[productId] || ['No data found']
            setTimeout(()=>{
                if(Math.random() < 0.5){
                resolve(reviews);
            }else{
                reject(`Failed to fetch reviews for product ID ${productId}`);
            }
            }, 1500);
        }else{
            reject('No id found')   // WE WANT TO ASK TEACHERS OR STUDENTS ABOUT THIS ISSUE
        }
    });
}  

  
export const fetchSalesReport = ():Promise<SalesReport> =>{
    return new Promise<SalesReport>((resolve, reject) =>{
        setTimeout(() => {
            if(Math.random() < 0.6){
                //typeof SalesReport = {123,456,789}
                resolve(salesReport);
            }else{
                reject('Failed to fetch sales report')
            }
    }, 1000);
});
}











//=======================================================================================


// interface SalesReport{
//     totalSales: number,
//     unitsSold: number,
//     averagePrice: number
// }


//Base interface
// interface Product{
//     id:number;
//     name:string;
//     price:number;
//     //review?: string
// }

// //an object product of the above Product instance/type
// const relatedProducts: Product[] = [
//         {id: 1, name: 'mouse', price: 20},
//         {id: 2, name: 'monitor', price: 80}
// ]

// //
// function getProductDetails() {
//     return new Promise<Product>((resolve, _reject) => {
//         const product: Product = {id: 3, name: "Keyboard", price: 50};

//         setTimeout(() => resolve(product), 1000)
//     });
// }


// function getProductReviews() {
//     return new Promise<string[]>((resolve, _reject) => {
//         const reviews: string[] = ['good product', 'excellent product'];
//         setTimeout(() => resolve(reviews), 1000); 
//     })
// }

// function getRelatedProducts() {
//     return new Promise<Product[]>((resolve, _reject) => {
//         if(Math.random() < 0.9){
//             console.log('FailFailFailFailFailFail');
            
//         }else{
//             setTimeout(() => resolve(relatedProducts), 1000);
//         }
        
//     })
// }


// fetchProductCatalog()
//     .then(product => {
//         console.log('call 1', product)
//         return fetchProductReviews();
//     })
//     .then(reviews => {
//         console.log('call 2', reviews);
//         return fetchSalesReport();
//     })
//     .then(relatedProducts => console.log('log 3', relatedProducts)).catch(error => {
//         console.error('Error:', error);
//     });

 