import { fetchAllPetShop } from "./modules/productApi.js"

let createPetShopCard = (petShopObject) =>{
    let {name, picture, precio, talla} = petShopObject
    
    let petShopCard = document.createElement("div")
    petShopCard.classList.add("card", "card-group")

    let cardBody = document.createElement("div")
    cardBody.classList.add("card-body")

    let cardTitle = document.createElement("h4")
    cardTitle.classList.add("card-title")
    cardTitle.innerText = name

    let cardinfo = document.createElement("p")
    cardinfo.classList.add("card-text")
    cardinfo.innerText = `Talla: ${talla} - Precio: ${precio}`

    let productImage = document.createElement("img");
  productImage.setAttribute("src", picture);

  cardBody.append(cardTitle, cardinfo)

  petShopCard.append(productImage, cardBody)
  
  return petShopCard
}
const printPetShop= (productsArray, wrapperId) => {
    let wrapper = document.getElementById(wrapperId);
    //wrapper.innerHTML = "";
    productsArray.forEach((product) => {
      wrapper.append(createPetShopCard(product));
    });
  };

const printAllProducts = async () => {
    let petShopArray = await fetchAllPetShop()
    printPetShop(petShopArray, "pet-shop-wrapper")
}

printAllProducts()