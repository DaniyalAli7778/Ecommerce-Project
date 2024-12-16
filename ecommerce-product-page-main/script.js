const landPageMain = document.querySelector(".section-main");
let productName= "Fall Limited Edition <br/> Sneakers";
let productPrice=250.00;
 
let productshowcase =[{productName:productName, productPrice:productPrice, productDiscount:  productPrice/2,}] 
   let showProducts=  productshowcase.forEach((product) => {

    let cullter = "";
cullter += `  
  
          <div class="main-left">
            <div class="product-img">
              <img src=" ./images/image-product-1.jpg" alt="" />
            </div>
          </div>
          <div class="main-right">
               <div id="main-product-description">
                 
                <h6 class="company-name">
sneakers company
                </h6>
                <h1 class="product-name">
                ${product.productName}
                 </h1>
                <p class="product-details">
                  These low-profile sneakers are your perfect casual wear
  companion. Featuring a durable rubber outer sole, they'1l
  withstand everything the weather can offer.
                </p>
              <h5 class="product-discount"> &#x24; ${product.productDiscount}.00  <span>50% </span> </h5>
                 <h5 class="product-price">&#x24;  ${product.productPrice}.00</h5>
               </div>
              
          </div>
       
     
        `

landPageMain.innerHTML = cullter;
   });

   showProducts();