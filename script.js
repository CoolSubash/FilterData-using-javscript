const data = [
  {
    id: 1,
    name: `Blue Dial Men's Watch M79030b`,
    img:
      'https://cdn2.jomashop.com/media/wysiwyg/category-page-headers/Watches/Automatic.jpg',
    price: 3599,
    cart: 'Luxury',
  },
  {
    id: 2,
    name: 'M25600TN-0001',
    img:
      'https://cdn2.jomashop.com/media/catalog/product/cache/df24c858758eb768757877f23cd17493/t/u/tudor-black-bay-fifty-eight-automatic-chronometer-blue-dial-mens-watch-m79030b0001_1.jpg?width=350&height=350',
    price: 4250,
    cart: 'Luxury',
  },
  {
    id: 3,
    name: 'Watch-101',
    img:
      'https://cdn2.jomashop.com/media/catalog/product/cache/df24c858758eb768757877f23cd17493/o/m/omega-speedmaster-racing-automatic-chronograph-silver-dial-stainless-steel-men_s-watch-32630405002001_6.jpg?width=350&height=350',
    price: 5000,
    cart: 'Luxury',
  },
  {
    id: 4,
    name: 'Watch-201',
    img:
      'https://cdn2.jomashop.com/media/catalog/product/cache/df24c858758eb768757877f23cd17493/o/m/omega-speedmaster-racing-automatic-chronograph-men_s-watch-326.30.40.50.01.001.jpg?width=350&height=350',
    price: 5200,
    cart: 'Luxury',
  },
  {
    id: 5,
    name: 'Watch-C-01',
    img:
      'https://cdn2.jomashop.com/media/catalog/product/cache/df24c858758eb768757877f23cd17493/h/a/hamilton-intra-matic-automatic-men_s-chronograph-watch-h38416711.jpg?width=350&height=350',
    price: 1600,
    cart: 'Cheap',
  },
  {
    id: 6,
    name: 'Watch-C-01',
    img:
      'https://cdn2.jomashop.com/media/catalog/product/cache/df24c858758eb768757877f23cd17493/l/o/longines-master-collection-automatic-chronograph-mens-watch-l27734786.jpg?width=350&height=350',
    price: 6100,
    cart: 'Luxury',
  },
  {
    id: 7,
    name: 'ZESICA3',
    img:
      'https://cdn2.jomashop.com/media/catalog/product/cache/df24c858758eb768757877f23cd17493/o/m/omega-seamaster-automatic-black-dial-men_s-watch-210.32.42.20.01.001.jpg?width=350&height=350',
    price: 1200,
    cart: 'Cheap',
  },
  {
    id: 8,
    name: 'M32',
    img:
      'https://cdn2.jomashop.com/media/catalog/product/cache/df24c858758eb768757877f23cd17493/l/o/longines-heritage-automatic-silver-dial-men_s-watch-l1.645.4.75.4.jpg?width=350&height=350',
    price: 900,
    cart: 'Simple',
  },
  {
    id: 9,
    name: 'M34',
    img:
      'https://cdn2.jomashop.com/media/catalog/product/cache/df24c858758eb768757877f23cd17493/h/a/hamilton-intra-matic-automatic-men_s-chronograph-watch-h38416711.jpg?width=350&height=350',
    price: 1000,
    cart: 'Simple',
  },
  {
    id: 10,
    name: 'Watch-01',
    img:
      'https://cdn2.jomashop.com/media/catalog/product/cache/df24c858758eb768757877f23cd17493/h/a/hamilton-intra-matic-automatic-men_s-chronograph-watch-h38416711.jpg?width=350&height=350',
    price: 1260,
    cart: 'Cheap',
  },
  {
    id: 11,
    name: 'M032',
    img:
      'https://cdn2.jomashop.com/media/catalog/product/cache/df24c858758eb768757877f23cd17493/h/a/hamilton-intra-matic-automatic-men_s-chronograph-watch-h38416711.jpg?width=350&height=350',
    price: 1760,
    cart: 'Cheap',
  },
  {
    id: 12,
    name: 'M04',
    img:
      'https://cdn2.jomashop.com/media/catalog/product/cache/df24c858758eb768757877f23cd17493/h/a/hamilton-intra-matic-automatic-men_s-chronograph-watch-h38416711.jpg?width=350&height=350',
    price: 500,
    cart: 'Very Cheap',
  },

  {
    id: 13,
    name: 'M03',
    img:
      'https://cdn2.jomashop.com/media/catalog/product/cache/df24c858758eb768757877f23cd17493/h/a/hamilton-intra-matic-automatic-men_s-chronograph-watch-h38416711.jpg?width=350&height=350',
    price: 600,
    cart: 'Very Simple',
  },
  {
    id: 14,
    name: 'M01',
    img:
      'https://cdn2.jomashop.com/media/catalog/product/cache/df24c858758eb768757877f23cd17493/h/a/hamilton-intra-matic-automatic-men_s-chronograph-watch-h38416711.jpg?width=350&height=350',
    price: 1900,
    cart: 'Simple',
  },
  {
    id: 15,
    name: 'ZESICA3',
    img:
      'https://cdn2.jomashop.com/media/catalog/product/cache/df24c858758eb768757877f23cd17493/h/a/hamilton-intra-matic-automatic-men_s-chronograph-watch-h38416711.jpg?width=350&height=350',
    price: 900,
    cart: 'Simple',
  },
  {
    id: 16,
    name: 'M34',
    img:
      'https://cdn2.jomashop.com/media/catalog/product/cache/df24c858758eb768757877f23cd17493/h/a/hamilton-intra-matic-automatic-men_s-chronograph-watch-h38416711.jpg?width=350&height=350',
    price: 1000,
    cart: 'Simple',
  },
]

let dataHtml = `<div class="product">
                    <img src="https://img.kwcdn.com/product/open/2022-11-28/1669618848979-de1df4010266402f9fa107dcd8e75a5c-goods.jpeg?imageView2/2/w/500/q/70/format/webp" alt="">
                    <span class="name">name</span>
                    <span class="priceText">$44</span>
                </div>`
const ProductContainer = document.querySelector('.products')
const searchInput = document.querySelector('.search')
const CategoriesContainer = document.querySelector('.carts')

const priceValue = document.querySelector('.priceValue')
const priceRange = document.querySelector('.priceRange')

const displayProducts = (filterproduct) => {
  ProductContainer.innerHTML = filterproduct
    .map((product) => {
      return `<div class="product">
                    <img src=${product.img} alt="">
                    <span class="name">${product.name}</span>
                    <span class="priceText"> $ ${product.price}</span>
                </div>`
    })
    .join('')
}
displayProducts(data)
const category = data.map((item) => {
  return item.cart
})

const uniquecat = category.filter((item, i) => {
  return category.indexOf(item) === i
})

const allcat = ['All', ...uniquecat]
allcat.map((e) => {
  CategoriesContainer.innerHTML += `<span class="cart">${e}</span>`
})
searchInput.addEventListener('keyup', (e) => {
  const value = e.target.value.toLowerCase()

  if (value) {
    const filterName = data.filter((itemname) => {
      return itemname.name.toLowerCase().indexOf(value) != -1
    })
    console.log(filterName)
    displayProducts(filterName)
  } else {
    displayProducts(data)
  }
})

CategoriesContainer.addEventListener('click', (e) => {
  let targetValue = e.target.textContent
  targetValue == 'All'
    ? displayProducts(data)
    : displayProducts(
        data.filter((text) => {
          return text.cart == targetValue
        }),
      )
})
const price = data.map((pricevalue) => {
  return pricevalue.price
})
console.log(Math.max(...price))
console.log(Math.min(...price))
priceRange.max = Math.max(...price)
priceRange.min = Math.min(...price)
priceRange.value = Math.max(...price)
priceValue.innerHTML = '$' + Math.max(...price)

priceRange.addEventListener('input', (e) => {
  const rangevalue = e.target.value
  console.log(rangevalue)
  priceValue.innerHTML = '$' + rangevalue

  displayProducts(
    data.filter((pricevalue) => {
      return pricevalue.price <= rangevalue
    }),
  )
})
