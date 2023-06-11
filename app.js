const quantity = document.getElementsByClassName(
  "main__quantity-controller--text"
);
const sumSelectedPrice = document.getElementById("sum-price");
// const dolar=document.getElementsByClassName("dolar")

const cartShipping = document.getElementById("cart-shipping");
const cartTax = document.getElementById("cart-tax");
const cartTotal = document.getElementById("cart-total");
const mainProductLinePrice = document.getElementsByClassName("main__product-line-price");
const mainProductPrice = document.getElementById("main-price");
const mainProductPrice1 = document.getElementById("main-price1");
const mainProductPrice2 = document.getElementById("main-price2");
const mainProducts = document.getElementsByClassName("main__product");
// console.log(mainProducts);
const divP=document.getElementById("products-preview")
const p=document.createElement("p");
divP.appendChild(p);
    
    // ********************BUTTONS**********************************
const navListBtn=document.getElementsByClassName("nav__list--btn");
const btnDeleteProducts = document.getElementsByClassName("nav__list--btn");
const btnDeleteAllTrash = document.getElementById("delete-all");
const productsQuantity = document.getElementById("span");
const btnPlus = document.getElementsByClassName("fa-plus");
const btnMinus = document.getElementsByClassName("fa-minus");
const btnRemoveProducts = document.getElementById("remove-product");
const btnFinishOrder = document.getElementById("finish-order");
//****************ÇALIŞMA ALANI**** */
console.log(navListBtn[0]);
// console.log(localStorage.getItem(quantity[0]));
// console.log(typeof quantity[0].textContent);
// console.log(sumSelectedPrice);
// console.log(typeof Number(sumSelectedPrice.textContent));
// console.log(mainProductLinePrice);
// console.log(mainProducts);
// console.log(quantity[0].textContent);
// console.log(typeof Number(mainProductLinePrice[0].textContent))

// **********************CLİCK************************************
mainProducts[0].addEventListener("click", (e) => {
    
  if (e.target.classList.contains("fa-plus")) {
    mainProductLinePrice[0].textContent = Number(
      (
        Number(mainProductLinePrice[0].textContent) +
        Number(mainProductPrice.textContent)
      ).toFixed(2)
    );
    quantity[0].textContent = Number(quantity[0].textContent) + 1;
    // localStorage.setItem("quantity[0]",quantity[0].textContent)
    sumSelectedPrice.innerText = Number(
      (
        Number(sumSelectedPrice.textContent) +
        Number(mainProductPrice.textContent)
      ).toFixed(2)
    );
    // console.log(quantity[0].textContent);
    productsQuantity.textContent = Number(productsQuantity.textContent) + 1;
  }
  if (e.target.classList.contains("fa-minus")) {
    if (Number(quantity[0].textContent) > 1) {
      mainProductLinePrice[0].textContent = Number(
        (
          Number(mainProductLinePrice[0].textContent) -
          Number(mainProductPrice.textContent)
        ).toFixed(2)
      );
      quantity[0].textContent = Number(quantity[0].textContent) - 1;
      sumSelectedPrice.innerText = Number(
        (
          Number(sumSelectedPrice.innerText) -
          Number(mainProductPrice.textContent)
        ).toFixed(2)
      );
      productsQuantity.textContent = Number(productsQuantity.textContent) - 1;
    }
  }
  if (e.target.classList.contains("fa-trash-can")) {
    // console.log(Number(quantity[0].textContent));
    // console.log(Number(productsQuantity.textContent));
    const removedQuantity = quantity[0].textContent;

    if (confirm("Do you want to remove the Macbook M2 Air?")) {
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
      sumSelectedPrice.innerText = Number(
        (
          Number(sumSelectedPrice.innerText) -(removedQuantity * Number(mainProductPrice.textContent))
          
        ).toFixed(2)
      );
      
      productsQuantity.textContent = Number(Number(productsQuantity.textContent) - removedQuantity)
    //   productsQuantity.textContent = Number(Number(productsQuantity.textContent) - Number(localStorage.getItem(quantity[0]).value))
    }
  }
  shipping();
  tax();
  total();
});

mainProducts[1].addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-plus")) {
    mainProductLinePrice[1].textContent = Number(
      (
        Number(mainProductLinePrice[1].textContent) +
        Number(mainProductPrice1.textContent)
      ).toFixed(2)
    );
    quantity[1].textContent = Number(quantity[1].textContent) + 1;
    sumSelectedPrice.innerText = Number(
      (
        Number(sumSelectedPrice.textContent) +
        Number(mainProductPrice1.textContent)
      ).toFixed(2)
    );
    console.log(quantity[1].textContent);
    productsQuantity.textContent = Number(productsQuantity.textContent) + 1;
  }
  if (e.target.classList.contains("fa-minus")) {
    if (Number(quantity[1].textContent) > 1) {
      mainProductLinePrice[1].textContent = Number(
        (
          Number(mainProductLinePrice[1].textContent) -
          Number(mainProductPrice1.textContent)
        ).toFixed(2)
      );
      quantity[1].textContent = Number(quantity[1].textContent) - 1;
      sumSelectedPrice.innerText = Number(
        (
          Number(sumSelectedPrice.innerText) -
          Number(mainProductPrice1.textContent)
        ).toFixed(2)
      );
      productsQuantity.textContent = Number(productsQuantity.textContent) - 1;
    }
  }
  if (e.target.classList.contains("fa-trash-can")) {
    const removedQuantity = quantity[0].textContent;
    if (confirm("Do you want to remove the Apple Keyboard?")) {
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
      sumSelectedPrice.innerText = Number(
        (
          Number(sumSelectedPrice.innerText) -
         Number(removedQuantity)* Number(mainProductPrice1.textContent)
        ).toFixed(2)
      );
      productsQuantity.textContent = Number(productsQuantity.textContent) - Number(removedQuantity);
    }
  }
  shipping();
  tax();
  total();
});

mainProducts[2].addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-plus")) {
    mainProductLinePrice[2].textContent = Number((Number(mainProductLinePrice[2].textContent) + Number(mainProductPrice2.textContent)).toFixed(2));
    quantity[2].textContent = Number(quantity[2].textContent) + 1;
    sumSelectedPrice.innerText = Number((Number(sumSelectedPrice.textContent)+Number(mainProductPrice2.textContent)).toFixed(2)
    );
    console.log(quantity[2].textContent);
    productsQuantity.textContent = Number(productsQuantity.textContent) + 1;
  }
  if (e.target.classList.contains("fa-minus")) {
    if (Number(quantity[2].textContent) > 1) {
      mainProductLinePrice[2].textContent = Number(( Number(mainProductLinePrice[2].textContent) - Number(mainProductPrice2.textContent)).toFixed(2));
      quantity[2].textContent = Number(quantity[2].textContent) - 1;
      sumSelectedPrice.innerText = Number((Number(sumSelectedPrice.innerText) -Number(mainProductPrice2.textContent)).toFixed(2));
      productsQuantity.textContent = Number(productsQuantity.textContent) - 1;
    }
  }
  if (e.target.classList.contains("fa-trash-can")) {
    const removedQuantity = quantity[0].textContent;
    if (confirm("Do you want to remove the Apple Mouse?")) {
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
      sumSelectedPrice.innerText = Number((Number(sumSelectedPrice.innerText) -Number(removedQuantity)*Number(mainProductPrice2.textContent)).toFixed(2));
      productsQuantity.textContent = Number(productsQuantity.textContent) - Number(removedQuantity);
    }
  }
  shipping();
  tax();
  total();
});


//! ********DElete All kısmı kaldı */


navListBtn[0].addEventListener("click", (e)=>{
    if(e.target.classList.contains("fa-trash-can") || e.target.classList.contains("delete")){
        e.target.closest("body").querySelector("#product-painel").remove()
        p.textContent="No products!"
        cartShipping.textContent = 0;
        cartTax.textContent =0;
        cartTotal.textContent=0;
        productsQuantity.textContent =0;
        sumSelectedPrice.innerText=0;


    }
    
})


//****************TOTAL****************************** */
const shipping = () => {
  if (Number(sumSelectedPrice.textContent) >= 3000) {
    cartShipping.textContent = 0;
  } else {
    cartShipping.textContent = 25.99;
  }
};

const tax = () => {
  cartTax.textContent = Number(
    (Number(sumSelectedPrice.textContent) * 0.18).toFixed(2)
  );
};

const total = () => {
  cartTotal.textContent = Number(
    (
      Number(sumSelectedPrice.textContent) +
      Number(cartShipping.textContent) +
      Number(cartTax.textContent)
    ).toFixed(2)
  );
};
