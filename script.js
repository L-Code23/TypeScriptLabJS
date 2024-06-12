"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mountains = [
    {
        name: "Kilimanjaro",
        height: 19341,
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    }
];
function findNameOfTallestMountain(allMountains) {
    var tallMountain = allMountains.reduce(function (prev, current) { return (current.height > prev.height) ? current : prev; });
    return tallMountain.name;
}
var mName = findNameOfTallestMountain(mountains);
console.log(mName);
var products = [
    {
        name: "Nintendo Switch",
        price: 300
    },
    { name: "X-Box",
        price: 500
    },
    {
        name: "Playstation",
        price: 600
    }
];
function calcAverageProductPrice(products) {
    var TotalPrice = products.reduce(function (acc, products) { return acc + products.price; }, 0);
    return TotalPrice;
    var calcAverageProductPrice = TotalPrice / products.length;
    console.log(calcAverageProductPrice);
}
//let consoles:Product = gameSys.reduce((prev,current)=>(current.price> prev.price)? current:prev);
//return consoles.price;
//let average:Product = consoles / gameSys.length;
// let avgPrice: number = calcAverageProductPrice(products);
// console.log(avgPrice)
// l
// let avg = 0;
// for(let i = 0; i < gameSys.length; i++){
//  avg += gameSys[i];
// }
// return avg/ gameSys.length;
// interface InventoryItem{
//     product: Product;
//     quanitiy: number;
// }
// let inventory:InventoryItem []=[
//     {
//     product.name: "motor",
//     product.price: 10.00,
//     quanitiy: 10
// }
// ,{
//     product.name: "sensor",
//     product.price: 12.50,
//     quantity: 4
// }
// ]
