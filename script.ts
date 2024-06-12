export{}

interface Mountain{
    name: string;
    height: number;
}

let mountains: Mountain[] = [
   {
       name: "Kilimanjaro",
       height: 19341,
   }

    ,{
        name: "Everest",
        height: 29029
    }
    
        
    ,{
        name: "Denali",
        height: 20310
    }
    ]

function findNameOfTallestMountain(allMountains:Mountain[]):string{
let tallMountain:Mountain = allMountains.reduce((prev,current)=>(current.height> prev.height)? current:prev);
return tallMountain.name;
}

let mName:string = findNameOfTallestMountain(mountains);
console.log(mName);



 interface Product{
    name: string;
    price: number;
 }

 let products:Product[] = [
    {
        name: "Nintendo Switch",
        price: 300

    }
    ,{   name:"X-Box",
        price: 500

    }
    ,{
        name: "Playstation",
        price: 600
    }
 ]

    function calcAverageProductPrice(products:Product[]):number{
        let TotalPrice = products.reduce((acc,products)=> acc + products.price,0)
        return TotalPrice
        let calcAverageProductPrice = TotalPrice/products.length
        console.log(calcAverageProductPrice)
        
       }
    
    //let average:Product = consoles / gameSys.length;
        // let avgPrice: number = calcAverageProductPrice(products);
        // console.log(avgPrice)


       

     interface InventoryItem{
         product: Product;
         quantity: number;
     }

     let inventory: InventoryItem[] =[

         ,{

        product:{
            name: "motor",
            price: 10.00,
        },
            quantity: 10
     }
     ,{
         product:
         {
            name: "sensor",
            price: 12.50,
         },
            quantity: 4
     }
     ,{
        product:
        {
            name: "LED",
            price: 20,
        },

        
            quantity: 20
     }
    ]; 

    function calculateInventoryValue(allItems:InventoryItem[]):number{
        let sum = 0;
        allItems.forEach((allItems)=>{
            sum = allItems.product.price * allItems.quantity
            });
        return sum;
    }

    let iValue:number = calculateInventoryValue(inventory);
    console.log(iValue);