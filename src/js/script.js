function openSidebar() {
  document.querySelector('#navbar').classList.toggle('-top-[283px]');
}

const historyCart = [
    {
        _id: "622a5972267c73c856ba51c6",
        title: "Potato Wedges",
        price: 22500
    },
    {
        _id: "622a5972267c73c856ba51c6",
        title: "Potato Wedges",
        price: 22500
    },
    {
        _id: "622a5972267c73c856ba51c6",
        title: "Potato Wedges",
        price: 22500
    },
    {
        _id: "622a5972267c73c856ba51c6",
        title: "Potato Wedges",
        price: 22500
    },
    {
        _id: "622a59cc267c73c856ba51ce",
        title: "Pisang Goreng",
        price: 17500
    },
    {
        _id: "622a59cc267c73c856ba51ce",
        title: "Pisang Goreng",
        price: 17500
    },
    {
        _id: "622a59cc267c73c856ba51ce",
        title: "Pisang Goreng",
        price: 17500
    },
    {
        _id: "622a5a56267c73c856ba51d6",
        title: "Spageti",
        price: 21400
    },
]

const filter = historyCart.filter((item) => {
    item._id === "622a5a56267c73c856ba51d6"
})

console.log(filter)

// example Accumulator for cart
// const tax = 10;
// const discount = 5000;
// const historyCart = [
//     {
//         price: 22500,
//         qty: 3
//     },
//     {
//         price: 22500,
//         qty: 2
//     }
// ]

// const cart = historyCart.map(item => {
//         return {
//             price: item.price,
//             qty: item.qty,
//             total: item.price * item.qty
//         }
// })

// const accumulator = cart.reduce((a,b) => {
//     return {
//         subtotal: a.total + b.total,
//         discount: discount,
//         tax: ((a.total + b.total) - discount) * (tax / 100),
//         total: ((a.total + b.total) - discount) + ((a.total + b.total) - discount) * (tax / 100)
//     }
// });


// console.log(
//     {
//         cart,
//         subtotal: accumulator.subtotal,
//         discount: accumulator.discount,
//         tax: accumulator.tax,
//         total: accumulator.total
//     }
// );