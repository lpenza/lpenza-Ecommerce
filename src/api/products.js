const productosPrueba = [
  {
    Title: 'Card Title',
    Text: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
    img: 'https://optitech.co.zw/wp-content/uploads/2022/09/apple-iphone-14-pro-max-6.jpg',
    categorie: 'oneCategorie',
    price: 1500,
    oldPrice: 2000,
    stock: 10
  },
  {
    Title: 'Card Title',
    Text: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
    img: 'https://optitech.co.zw/wp-content/uploads/2022/09/apple-iphone-14-pro-max-6.jpg',
    categorie: 'oneCategorie',
    price: 1500,
    oldPrice: 2000,
    stock: 10



  },
  {
    Title: 'Card Title',
    Text: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
    img: 'https://optitech.co.zw/wp-content/uploads/2022/09/apple-iphone-14-pro-max-6.jpg',
    categorie: 'oneCategorie',
    price: 1500,
    oldPrice: 2000,
    stock: 10



  },
  {
    Title: 'Card Title',
    Text: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
    img: 'https://optitech.co.zw/wp-content/uploads/2022/09/apple-iphone-14-pro-max-6.jpg',
    categorie: 'oneCategorie',
    price: 1500,
    oldPrice: 2000,
    stock: 10



  },
  {
    Title: 'Card Title',
    Text: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
    img: 'https://optitech.co.zw/wp-content/uploads/2022/09/apple-iphone-14-pro-max-6.jpg',
    categorie: 'oneCategorie',
    price: 1500,
    oldPrice: 2000,
    stock: 10



  },
  {
    Title: 'Card Title',
    Text: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
    img: 'https://optitech.co.zw/wp-content/uploads/2022/09/apple-iphone-14-pro-max-6.jpg',
    categorie: 'oneCategorie',
    price: 1500,
    oldPrice: 2000,
    stock: 10



  },
  {
    Title: 'Card Title',
    Text: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
    img: 'https://optitech.co.zw/wp-content/uploads/2022/09/apple-iphone-14-pro-max-6.jpg',
    categorie: 'oneCategorie',
    price: 1500,
    oldPrice: 2000,
    stock: 10



  },
  {
    Title: 'Card Title',
    Text: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
    img: 'https://optitech.co.zw/wp-content/uploads/2022/09/apple-iphone-14-pro-max-6.jpg',
    categorie: 'oneCategorie',
    price: 1500,
    oldPrice: 2000,
    stock: 10



  }
]


export const allProducts = () => new Promise((res, rej) => {
  setTimeout(() => {
    res(productosPrueba)
    rej('Error al consultar los productos')
  }, 1500)
})


export const productApi = () => {
  return fetch('https://fakestoreapi.com/products?limit=100')
    .then(res => res.json())
    
}

export const productApiCategory = (category) => {
  return fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(res => res.json())
    
}

export const productApiId = (id) => {
  return fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    
}