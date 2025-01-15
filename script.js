 
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

  productListPage()



 burgerMenue()

