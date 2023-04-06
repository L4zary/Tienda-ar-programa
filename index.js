const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})

const cartInfo = document.querySelector(".cart-product")
const rowproduct =document.querySelector('.row-product')

//lista de los productos//

const productlist = document .querySelector ('container-items')
//variable de arreglos de productos
let allProducts = []




productlist.addEventListener('click', e => {

if(e.target.classList.contains('btn-add-cart')){

    const product = e.target.partelement

    constinfoproduct = {
        quantity: 1,
        title: product.querySelector('h2').textcontent
        
        price: product.querySelector('p').textcontent
    }
}


})

