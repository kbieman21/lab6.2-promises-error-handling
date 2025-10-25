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
interface Sales {
    totalSales: number;
    unitSold: number;
    averagePrice:number;
}

//an object salesReport of the above SalesReport instance/type
const salesReport: Sales[] = [{
    totalSales: 150,
    unitSold: 10,
    averagePrice: 15
}];


// Custom NetworkError class to handle network related issues
export class NetworkError extends Error {
    name:string;
    constructor(message:string){
         super(message)
         this.name = "NetworkError";
    }   
}

// Custom DataError class to handle data related issues
export class DataError extends Error {
    name: string;
    constructor(message:string){
        super(message);
        this.name = "DataError"
    }
}

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
                // reject('Failed to fetch product catalog!!!!')
                 reject(new NetworkError("Failed to fetch product catalog"))
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
                if(Math.random() < 0.9){
                resolve(reviews);
            }else{
                // reject(`Failed to fetch reviews for product ID ${productId}`);
                 reject(new NetworkError(`Failed to fetch review for ID ${productId} `))
            }
            }, 1500);
        }else{
            // reject('No id found')  
             reject(new DataError(`No Id found ${productId}`))
        }
    });
}  

  
export const fetchSalesReport = ():Promise<Sales[]> =>{
    return new Promise<Sales[]>((resolve, reject) =>{
        setTimeout(() => {
            if(Math.random() < 0.9){
                //typeof SalesReport = {123,456,789}
                resolve(salesReport);
            }else{
                // reject('Failed to fetch sales report')
                 reject(new NetworkError("Failed to fetch sales report"));
            }
    }, 1000);
});
}

