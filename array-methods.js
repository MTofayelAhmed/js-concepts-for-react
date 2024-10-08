// map concepts
const products = [
    {name: "camera", price: 2000, brand: "HP", color: "grey"},
    {name: "phone", price: 2000, brand: "Apple", color: "grey"},
    {name: "watch", price: 2000, brand: "apple", color: "grey"},
    {name: "laptop", price: 2000, brand: "HP", color: "grey"}

]


const brandName = products.map(product => product.name)
console.log(brandName)

//  for each concepts
products.forEach(product=> console.log(product.name))

// filter concepts (filter also return an array)

const filteredProducts = products.filter(product => product.name.includes("a"))
console.log(filteredProducts)

// find concepts  

const findProducts = products.find(product => product.price === 2000)
console.log(findProducts)
