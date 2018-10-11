// export function formatPrice(cents){
//     return(cents/100).toLocaleString("en-US",{
//         style: "currency",
//         currency: "USD"
//     });
// }

export function formatPrice(price){
return( new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price)
);
}


export function getEntryMsg(){

    const moneyMsg =[
      "Show me The MONEY!!!",
      "Slice Me Some Of That Cheddar! 🧀",
      "Bringing Up The Benjamins!",
      "Make It Rain!",
      "Bakin That Bread!"
    ]

    return moneyMsg[Math.floor(Math.random()*moneyMsg.length)];
};