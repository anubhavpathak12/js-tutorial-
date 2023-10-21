// reduce method

const array1 = [1, 2, 3, 4, 5];

const myTotal = array1.reduce(function(acc, currVal) {
    console.log(`acc: ${acc} and currVal: ${currVal}`)
    return acc + currVal
}, 0)

//0 + 1 + 2 + 3 + 4 + 5 = 15

const myNewTotal = array1.reduce( (acc, currVal) => (acc + currVal), 0)



console.log(myNewTotal);


const shoppingCart = [
    {
        itemName: "iphone 20",
        price: 15
    },
    {
        itemName: "android lava phone",
        price: 20000
    },
    {
        itemName: "Nokia",
        price: 2
    }
]

const netPrice = shoppingCart.reduce( (acc, item) => (acc + item.price), 0 )

console.log(netPrice);