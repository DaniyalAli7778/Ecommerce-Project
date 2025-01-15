//  BurgerMenue code Starts from here
 function burgerMenue (){
  const menueBurger = document.querySelector('.ri-menu-line');

  menueBurger.addEventListener('click', () => {
      const navitems =document.querySelector('.nav-page');
      navitems.style.display = 'inline-block';
      navitems.style.left= '1%'
  })
  const closeMenueBurger = document.querySelector('.ri-close-line');
  closeMenueBurger.addEventListener('click', () => {
   const navitems =document.querySelector('.nav-page');
   navitems.style.display = 'none';
 })
 }
//  BurgerMenue code Ends here

// ProductListCode Starts here
 function  productListPage(){
 
  const main_left= document.querySelector(".product-img img");

  main_left.addEventListener('click', () => {
    if(window.innerWidth >480){
    const product_page_list = document.querySelector('.product-list');
    product_page_list.style.display = 'inline-block';
    console.log("hellow");
    }
  })


  const product_page_list_i = document.querySelector('#pro-lis-i');
  product_page_list_i.addEventListener('click', () => {
     const product_page_list = document.querySelector('.product-list');
      product_page_list.style.display = 'none';
  })
 }


// ProductListPage ends here

// Cart opening closing functionality starts  from here
function cart_Functionality(){
  const cart = document.querySelector('.ri-shopping-cart-fill');
  cart.addEventListener('click', () => {
    const cart_page = document.querySelector('.cart-page');
    cart_page.style.display = 'inline-block';
    cart.style.display="none";
  })
  const cart_page_close = document.querySelector('.cart-page .ri-close-line');
  cart_page_close.addEventListener('click', () => {
    const cart_page = document.querySelector('.cart-page');
    cart_page.style.display = 'none';
    const cart = document.querySelector('.ri-shopping-cart-fill');
    cart.style.display="inline-block";
  })
}
//  Calling functions 
// here
  productListPage()


cart_Functionality()
 burgerMenue()

