// reduce() - To add array elements 

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

//first time acc gets 0 (which is passed) and from the next iteration it gets the value of acc+currval 
//currval contains one element at a time from the array

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const Total = shoppingCart.reduce( (acc , curr) => (acc + curr.price),0 )

console.log(Total);
