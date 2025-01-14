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